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
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
      <p
        className={cn(
          "line-clamp-1 text-sm font-semibold text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300",
        )}
      >
        {name}
      </p>
      {name === "welcome" && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit Channel">
            <Settings className="hidden h-4 w-4 text-zinc-500 transition hover:text-zinc-600 group-hover:block dark:text-zinc-400 dark:hover:text-zinc-300" />
          </ActionTooltip>
        </div>
      )}
      {name !== "welcome" && (
        <Lock className="ml-auto h-4 w-4 text-zinc-500 dark:text-zinc-400" />
      )}
    </button>
  );
};
