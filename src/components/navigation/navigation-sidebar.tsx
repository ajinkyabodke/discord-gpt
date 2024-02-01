import React from "react";
import { NavigationAction } from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { serverList } from "@/lib/constants";
import { ActionTooltip } from "../action-tooltip";
import { Compass } from "lucide-react";

export const NavigationSidebar = () => {
  return (
    <div className="flex h-full w-[68px] flex-col items-center space-y-4 bg-[#E3E5E8] py-3 text-primary dark:bg-[#1E1F22]">
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "h-[48px] w-[48px]",
          },
        }}
      />
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
      <ScrollArea className="w-full flex-1">
        {serverList.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <NavigationAction />
      <div>
        <ActionTooltip side="right" align="center" label="Explore discoverable servers">
          <button className="group flex items-center">
            <div className="mx-3 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700">
              <Compass className="transtion text-emerald-500 group-hover:text-white" />
            </div>
          </button>
        </ActionTooltip>
      </div>
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />

      <div className="mt-auto flex flex-col items-center gap-y-4 pb-3">
        <ModeToggle />
      </div>
    </div>
  );
};
