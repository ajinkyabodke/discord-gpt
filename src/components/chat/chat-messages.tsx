"use client";

import { Fragment, useRef, ElementRef } from "react";
import { format } from "date-fns";

import { Loader2, ServerCrash } from "lucide-react";
import { messages } from "@/lib/constants";
import { ChatWelcome } from "./chat-welcome";
import { ChatItem } from "./chat-item";
import { ScrollArea } from "../ui/scroll-area";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

export const ChatMessages = () => {
  const chatId = 1;

  if (status === "loading") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <Loader2 className="my-4 h-7 w-7 animate-spin text-zinc-500" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading messages...
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center">
        <ServerCrash className="my-4 h-7 w-7 text-zinc-500" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Something went wrong!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-end overflow-y-auto py-1">
      <ScrollArea>
        {true && <div className="flex-1" />}
        {true && <ChatWelcome />}
        {false && (
          <div className="flex justify-center">
            {false ? (
              <Loader2 className="my-4 h-6 w-6 animate-spin text-zinc-500" />
            ) : (
              <button className="my-4 text-xs text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Load previous messages
              </button>
            )}
          </div>
        )}
        <div className="mt-auto flex flex-col">
          <Fragment>
            {messages.map((message) => (
              <ChatItem
                key={message.id}
                content={message.content}
                id={message.id}
                imageUrl={message.imageUrl}
                member={message.member}
                timestamp={message.timestamp}
              ></ChatItem>
            ))}
          </Fragment>
        </div>
        <div />
      </ScrollArea>
    </div>
  );
};
