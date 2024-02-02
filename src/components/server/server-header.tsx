"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { serverList } from "@/lib/constants";
import {
  Bell,
  Bot,
  ChevronDown,
  Diamond,
  Gem,
  LogOut,
  Pencil,
  PlusCircle,
  Settings,
  ShieldEllipsis,
  UserPlus,
  Users,
} from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Checkbox } from "../ui/checkbox";

interface ServerHeaderProps {
  serverId: "string";
}

export const ServerHeader = ({ serverId }: ServerHeaderProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="text-md flex h-12 w-full items-center border-b-2 border-neutral-200 px-3 font-semibold transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50">
          {serverList[Number(serverId - 1)].name}
          <ChevronDown className="ml-auto h-5 w-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 space-y-[2px] text-sm font-medium text-black dark:bg-[#111214] dark:text-[#b5bac1]">
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white">
          <span>Server Boost</span>
          <span>
            <Gem className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" flex cursor-pointer items-center justify-between px-3 py-2 text-sm text-indigo-400 hover:bg-violet-500 hover:text-white dark:text-indigo-400 dark:hover:text-white">
          <span>Invite People</span>
          <span>
            <UserPlus className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>App Directory</span>
          <span>
            <Bot className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>Show All Channels</span>
          <span>
            <Checkbox className="h-4 w-4 " />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>Notification Settings</span>
          <span>
            <Bell className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>Privacy Settings</span>
          <span>
            <ShieldEllipsis className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>Edit Server Profile</span>
          <span>
            <Pencil className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span>Hide Muted Channels</span>
          <span>
            <Checkbox className="h-4 w-4 " checked />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white ">
          <span className="text-rose-500">Leave Server</span>
          <span>
            <LogOut className="h-4 w-4 text-rose-500" />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
