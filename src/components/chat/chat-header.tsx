"use client";
import { BellOff, Hash, HelpCircle, Inbox, Pin, Users } from "lucide-react";
import React from "react";
import { MobileToggle } from "../mobile-toggle";
import { useParams } from "next/navigation";
import { Command, CommandInput } from "../ui/command";

export const ChatHeader = () => {
  const params = useParams();
  return (
    <div className="text-md flex h-12 w-full items-center justify-between border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <div className="flex items-center justify-center align-bottom">
        <MobileToggle serverId={params.serverId} />
        <div className="flex items-center justify-center">
          <Hash className="mr-2 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          <p className="text-md font-semibold text-black dark:text-white">
            general
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <button className="mb-[2px] mr-2 flex h-6 w-6 items-center justify-center ">
          <svg
            x={0}
            y={0}
            className="icon__4cb88"
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
              className="fill-zince-500  hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-zinc-100"
            />
          </svg>
        </button>
        <button>
          <BellOff className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <Pin className="mr-2 h-6 w-6 rotate-45 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <Users className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>

        <div className="hidden h-[30px] w-[180px] md:block">
          <Command>
            <CommandInput placeholder="Search" />
          </Command>
        </div>

        <button>
          <Inbox className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>
        <button>
          <HelpCircle className="mr-2 hidden h-7 w-7 stroke-zinc-500 hover:stroke-zinc-700  dark:fill-zinc-400 dark:stroke-zinc-800 dark:hover:stroke-zinc-100 sm:block" />
        </button>
      </div>
    </div>
  );
};
