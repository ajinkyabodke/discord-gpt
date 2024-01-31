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
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

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
      <DropdownMenuContent className="w-56 space-y-[2px] text-sm font-medium text-black dark:text-neutral-100">
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm text-indigo-600 dark:text-indigo-400">
          <span>Invite People</span>
          <span>
            <UserPlus className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm ">
          <span>Server Settings</span>
          <span>
            <Settings className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm ">
          <span>Manage Members</span>
          <span>
            <Users className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm ">
          <span>Create Channel</span>
          <span>
            <PlusCircle className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm ">
          <span>Leave Server</span>
          <span>
            <LogOut className="h-4 w-4 text-rose-500" />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
