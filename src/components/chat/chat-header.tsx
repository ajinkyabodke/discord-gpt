"use client";
import { BellOff, Hash, HelpCircle, Inbox, Pin, Users } from "lucide-react";
import React from "react";
import { MobileToggle } from "../mobile-toggle";
import { useParams } from "next/navigation";

export const ChatHeader = () => {
  const params = useParams();
  return (
    <div className="text-md flex h-12 w-full items-center justify-between border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <div>
        <MobileToggle serverId={params.serverId} />
        <div className="flex ">
          <Hash className="mr-2 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          <p className="text-md font-semibold text-black dark:text-white">
            general
          </p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <button>
          <BellOff className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <Pin className="mr-2 h-6 w-6 rotate-45 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <Users className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <Inbox className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <HelpCircle className="mr-2 h-7 w-7 stroke-zinc-500  hover:stroke-zinc-700 dark:fill-zinc-400 dark:stroke-zinc-800 dark:hover:stroke-zinc-100" />
        </button>
      </div>
    </div>
  );
};
