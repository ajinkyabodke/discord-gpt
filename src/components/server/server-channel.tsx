"use client";

import { channels } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Edit,
  Hash,
  Lock,
  Mic,
  Settings,
  Speaker,
  Volume2,
} from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { ActionTooltip } from "../action-tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ChannelSettings } from "./channel-settings";

interface ServerChannelProps {
  id: number;
  name: string;
  type: string;
}

export const ServerChannel = ({ id, name, type }: ServerChannelProps) => {
  const iconMap = {};
  const params = useParams();

  channels.forEach((channel) => {
    if (channel.type === "text") {
      iconMap[channel.name] = Hash; // Text channel icon: hash
    } else if (channel.type === "audio") {
      iconMap[channel.name] = Volume2; // Audio channel icon: mic
    }
  });
  const Icon = iconMap[name];

  return (
    <button
      onClick={() => {
        console.log();
      }}
      className={cn(
        "group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50",
        name === "welcome"
          ? "bg-zinc-700/10 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-200 "
          : "text-zinc-500 hover:bg-zinc-700/10 group-hover:text-zinc-600  dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:group-hover:text-zinc-300",
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
      <p className={cn("line-clamp-1 text-sm font-semibold transition")}>
        {name}
      </p>
      {name === "welcome" && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit Channel">
            <Dialog>
              <DialogTrigger asChild>
                <Settings className="hidden h-4 w-4 text-zinc-500 transition hover:text-zinc-600 group-hover:block dark:text-zinc-400 dark:hover:text-zinc-300" />
              </DialogTrigger>
              <DialogContent className="h-full w-full">
                <ChannelSettings />
              </DialogContent>
            </Dialog>
          </ActionTooltip>
        </div>
      )}
      {name !== "welcome" && (
        <Lock className="ml-auto h-4 w-4  text-zinc-500 dark:text-zinc-400" />
      )}
    </button>
  );
};
