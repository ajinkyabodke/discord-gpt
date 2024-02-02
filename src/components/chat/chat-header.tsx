"use client";
import { BellOff, Hash, HelpCircle, Inbox, Pin, Radio } from "lucide-react";
import React from "react";
import { MobileToggle } from "../mobile-toggle";
import { useParams } from "next/navigation";
import { Command, CommandInput } from "../ui/command";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export const ChatHeader = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
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
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none" asChild>
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
                  className="fill-zinc-500  hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-zinc-100"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[27rem] space-y-[2px] text-sm font-medium text-black dark:bg-[#111214] dark:bg-[#1e1f22] dark:text-[#b5bac1]">
            <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white dark:bg-[#1e1f22]">
              <div className="flex items-center justify-center gap-x-2">
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
                    className="fill-zinc-500  hover:fill-zinc-700  dark:fill-zinc-400 dark:hover:fill-zinc-100"
                  />
                </svg>
                <span>Threads</span>
              </div>

              <div className="hidden h-[30px] w-[180px] md:block">
                <Command>
                  <CommandInput placeholder="Search for threads" />
                </Command>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" flex h-[20rem] cursor-pointer items-center justify-between px-3 py-2 text-sm text-white dark:bg-[#2b2d31] ">
              <div className="w-full flex-col items-center justify-center gap-2 align-middle">
                <div className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
                      fill="text-slate-600"
                      className="fill-slate-600 dark:fill-slate-200"
                    />
                  </svg>
                </div>
                <span className="flex justify-center py-2 text-2xl font-semibold text-slate-600 dark:text-slate-200">
                  There are no threads.
                </span>
                <span className="flex justify-center py-2 text-center text-slate-400 dark:text-white">
                  Stay focused on a conversation with a thread, a temporary text
                  channel.
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none" asChild>
            <button>
              <BellOff className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="space-y-[2px] p-3 text-sm font-medium text-black dark:bg-[#111214] dark:text-[#b5bac1]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 dark:bg-[#111214] dark:text-[#b5bac1]"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={"1"}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem
                            className="flex items-center space-x-3 space-y-0"
                            id="1"
                          >
                            <FormControl>
                              <RadioGroupItem value="all" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              All Messages
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mentions" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Only @mentions
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="none" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Nothing
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none" asChild>
            <button>
              <Pin className="mr-2 h-6 w-6 rotate-45 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[27rem] space-y-[2px] text-sm font-medium text-black dark:bg-[#111214]  dark:text-[#b5bac1]">
            <DropdownMenuItem className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-violet-500 hover:text-white dark:bg-[#1e1f22]">
              <div className="flex items-center justify-center gap-x-2">
                <span>Pinned Messages</span>
              </div>

              <div className="hidden h-[30px] w-[180px] md:block"></div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" flex h-[20rem] cursor-pointer items-center justify-between px-3 py-2 text-sm text-white dark:bg-[#2b2d31] ">
              <div className="w-full flex-col items-center justify-center gap-2 align-middle">
                <div className="flex justify-center">
                  <Pin className="mr-2 h-16 w-16 rotate-45 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
                </div>
                <span className="flex justify-center py-2 text-2xl font-semibold text-slate-700 dark:text-white">
                  There are no pins.
                </span>
                <span className="flex justify-center py-2 text-center text-slate-400 dark:text-white">
                  Stay focused on a conversation with a thread, a temporary text
                  channel.
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button>
          <Users className="mr-2 h-6 w-6 stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
        </button>

        <div className="hidden h-[30px] w-[180px] pr-1 md:block">
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
