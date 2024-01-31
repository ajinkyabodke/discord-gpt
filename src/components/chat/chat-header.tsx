"use client";
import { Hash } from "lucide-react";
import React from "react";
import { MobileToggle } from "../mobile-toggle";
import { useParams } from "next/navigation";

export const ChatHeader = () => {
  const params = useParams();
  return (
    <div className="text-md flex h-12 w-full items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle serverId={params.serverId} />
      <Hash className="mr-2 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      <p className="text-md font-semibold text-black dark:text-white">
        general
      </p>
    </div>
  );
};
