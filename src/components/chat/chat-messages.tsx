"use client";

import { Fragment, useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { ChatWelcome } from "./chat-welcome";
import { ChatItem } from "./chat-item";
import { ScrollArea } from "../ui/scroll-area";
import type { MessagesSelectType } from "@/server/db/schema";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { env } from "@/env";

export const ChatMessages = ({
  messages,
}: {
  messages: MessagesSelectType;
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
  const scrollRef = useRef();

  const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

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
        (payload) => {
          setPosts([...posts, payload.new]);
          console.log(posts);
          // Scroll to the bottom when posts change
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight + 100;
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, posts, setPosts]);

  return (
    <div className="flex flex-1 flex-col justify-end overflow-y-auto py-1">
      <ScrollArea>
        <div className="flex-1" />
        <ChatWelcome />
        <div className="mt-auto flex flex-col " ref={scrollRef}>
          <Fragment>
            {posts.map((message) => (
              <ChatItem
                key={message.id}
                content={message.content}
                id={message.id}
                imageUrl={message.imageUrl}
                timestamp={message.createdAt}
              ></ChatItem>
            ))}
          </Fragment>
        </div>
        <div />
      </ScrollArea>
    </div>
  );
};
