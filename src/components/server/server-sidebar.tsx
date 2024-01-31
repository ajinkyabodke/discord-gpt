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
    <div className="flex h-full w-72 flex-col bg-[#F2F3F5] text-primary dark:bg-[#2B2D31]">
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
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-sm font-semibold uppercase text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Text Channels
              </div>
            </AccordionTrigger>
            <AccordionContent onCha>
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
      <div className="bg-semibackground flex justify-between gap-1 px-2 py-1.5">
        <button
          className="flex gap-2 rounded-md py-1 pl-0.5 pr-2 text-left leading-tight hover:bg-white/20"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r0:"
          data-state="closed"
        >
          <div className="relative flex h-8 h-8 w-8 w-8 items-center justify-center rounded-full bg-white/5 text-white">
            <img
              alt="Repeep"
              fetchpriority="high"
              width={32}
              height={32}
              decoding="async"
              data-nimg={1}
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/16727448?v=4"
              style={{ color: "transparent" }}
            />
            <div className="border-midground absolute -bottom-1 -right-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border-[3px] bg-red-600">
              <div className="bg-midground h-0.5 w-1.5 rounded-sm" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold">Repeep</div>
            <div className="text-[11px] text-gray-300">Don't Disturb</div>
          </div>
        </button>
        <div className="flex items-center">
          <button
            className="group relative flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:bg-gray-700 hover:text-gray-200"
            data-state="closed"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              fontSize={18}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            </svg>
            <div className="border-semibackground absolute h-3/4 w-[5px] rotate-45 rounded-sm border-[2px] bg-red-500 group-hover:border-gray-700" />
          </button>
          <button
            className="group relative flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:bg-gray-700 hover:text-gray-200"
            data-state="closed"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              fontSize={20}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
            </svg>
          </button>
          <button
            className="group relative flex h-8 w-8 items-center justify-center rounded-md text-gray-300 hover:bg-gray-700 hover:text-gray-200"
            data-state="closed"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              fontSize={18}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
