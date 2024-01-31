import { TextSearch } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { ServerHeader } from "./server-header";
import { Separator } from "../ui/separator";
import { ServerChannel } from "./server-channel";
import { channels } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-[#2B2D31]">
      <ServerHeader serverId={serverId} />
      <ScrollArea className="flex-1 px-3">
        {/* Browse Channels */}
        <div className="mt-2">
          <div>
            <button className="group flex w-full items-center gap-x-2 rounded-md px-2 py-2 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 ">
              <TextSearch className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              <p className="text-sm font-semibold text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                Browse Channels
              </p>
            </button>
          </div>
        </div>
        {/* Text Channels */}
        <Separator className="my-2 rounded-md bg-zinc-200 dark:bg-zinc-700" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-sm font-semibold uppercase text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Text Channels
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                {channels
                  .filter((channel) => channel.type === "text")
                  .map((channel) => (
                    <div key={channel.id}>
                      <ServerChannel
                        id={channel.id}
                        name={channel.name}
                        type={channel.type}
                      />
                    </div>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/*Voice Channels */}
        <Separator className="my-2 rounded-md bg-zinc-200 dark:bg-zinc-700" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-sm font-semibold uppercase text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Voice Channels
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                {channels
                  .filter((channel) => channel.type === "audio")
                  .map((channel) => (
                    <div key={channel.id}>
                      <ServerChannel
                        id={channel.id}
                        name={channel.name}
                        type={channel.type}
                      />
                    </div>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Dump */}
      </ScrollArea>
    </div>
  );
};
