"use client";
import React from "react";
import { UserAvatar } from "../user-avatar";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import { Edit, Trash } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { MessagesSelectType } from "@/server/db/schema";

export const ChatItem = ({ id, content, timestamp, role, imageUrl, name }) => {
  return (
    <div className="group relative flex w-full items-center p-4 transition hover:bg-black/5">
      <div className="group flex w-full items-start gap-x-2">
        <div className="cursor-pointer transition hover:drop-shadow-md">
          {role === "assistant" ? (
            <UserAvatar
              src={
                "https://cdn.discordapp.com/icons/1015095797689360444/af578001e4a166fd6181c3757b71ff39.webp?size=240"
              }
            ></UserAvatar>
          ) : (
            <UserAvatar src={imageUrl}></UserAvatar>
          )}
        </div>
        <div className="flex w-full flex-col">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <p
                className={cn(
                  role === "assistant" ? "text-orange-300" : "text-blue-400",
                  "cursor-pointer text-sm font-semibold  hover:underline",
                )}
              >
                {role === "assistant" ? "GPT" : name}
              </p>
            </div>
            <span
              className="text-xs text-zinc-500 dark:text-zinc-400"
              suppressHydrationWarning
            >
              {timestamp}
              {/* {new Date(timestamp).toLocaleString("en-US", {
                hour12: true,
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })} */}
              {/* {new Date(timestamp).toLocaleString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })} */}
            </span>
          </div>
          <p className={cn("text-sm text-zinc-600 dark:text-zinc-300")}>
            {content}
          </p>
        </div>
      </div>
      <div className="absolute -top-2 right-5 hidden items-center gap-x-2 rounded-sm border bg-white p-1 group-hover:flex dark:bg-zinc-800">
        <ActionTooltip label="Edit">
          <Edit className="ml-auto h-4 w-4 cursor-pointer text-zinc-500 transition hover:text-zinc-600 dark:hover:text-zinc-300" />
        </ActionTooltip>
        <ActionTooltip label="Delete">
          <Trash className="ml-auto h-4 w-4 cursor-pointer text-zinc-500 transition hover:text-zinc-600 dark:hover:text-zinc-300" />
        </ActionTooltip>
      </div>
    </div>
  );
};
