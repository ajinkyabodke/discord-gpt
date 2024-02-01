"use client";

import { Fragment, useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { ChatWelcome } from "./chat-welcome";
import { ChatItem } from "./chat-item";
import { ScrollArea } from "../ui/scroll-area";
import { users, type MessagesSelectType } from "@/server/db/schema";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import { getUserByUserId } from "@/server/actions";

export const ChatMessages = ({
  messages,
  userInfo,
}: {
  messages: MessagesSelectType;
  userInfo: any;
}) => {
  // const chatId = 1;

  // if (status === "loading") {
  //   return (
  //     <div className="flex flex-1 flex-col items-center justify-center">
  //       <Loader2 className="my-4 h-7 w-7 animate-spin text-zinc-500" />
  //       <p className="text-xs text-zinc-500 dark:text-zinc-400">
  //         Loading messages...
  //       </p>
  //     </div>
  //   );
  // }

  // if (status === "error") {
  //   return (
  //     <div className="flex flex-1 flex-col items-center justify-center">
  //       <ServerCrash className="my-4 h-7 w-7 text-zinc-500" />
  //       <p className="text-xs text-zinc-500 dark:text-zinc-400">
  //         Something went wrong!
  //       </p>
  //     </div>
  //   );
  // }

  const [posts, setPosts] = useState(messages);
  const scriptRef = useRef();

  const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  useEffect(() => {
    scriptRef.current.scrollTop = scriptRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("realtime messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "discord-gpt_messages",
        },
        async (payload) => {
          const userData = await getUserByUserId(payload.new.userId);
          setPosts([...posts, { messages: payload.new, users: userData }]);
          // console.log(posts);
          // Scroll to the bottom when posts change
          scriptRef.current.scrollTop = scriptRef.current.scrollHeight;
          setTimeout(() => {
            scriptRef.current.scrollTop = scriptRef.current.scrollHeight;
          }, 100);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, posts]);

  return (
    <div className="flex flex-1 flex-col justify-end overflow-y-auto py-1">
      <div className="flex-1" />
      <div className="mt-auto flex flex-col overflow-y-scroll " ref={scriptRef}>
        <ChatWelcome />

        {posts.map((message) => (
          <ChatItem
            key={message.messages.id}
            content={message.messages.content}
            id={message.messages.id}
            role={message.messages.role}
            timestamp={message.messages.createdAt}
            imageUrl={message.users?.imageUrl}
            name={message.users?.name}
          />
        ))}
      </div>
      <div />
    </div>
  );
};
