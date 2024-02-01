"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Gift, Plus, Sticker } from "lucide-react";
import { EmojiPicker } from "../emoji-picker";
import { api } from "@/trpc/react";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const ChatInput = () => {
  const { mutate, isLoading } = api.post.sendMessage.useMutation();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate({ content: values.message });
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative p-4 pb-6">
                  <button
                    type="button"
                    className="absolute left-8 top-7 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-zinc-500 p-1 transition hover:bg-zinc-600 dark:bg-zinc-400 dark:hover:bg-zinc-300"
                  >
                    <Plus className="text-white dark:text-[#313338]" />
                  </button>
                  <Input
                    className="border-0 border-none bg-zinc-200/90 px-14 py-6 text-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-700/75 dark:text-zinc-200"
                    placeholder={`Message`}
                    {...field}
                  />
                  <div className="absolute right-8 top-7">
                    <div className="flex gap-x-4">
                      <Gift className="stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
                      <div>
                        <svg
                          className="icon__68853"
                          aria-hidden="true"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z"
                            clipRule="evenodd"
                            className="fill-zinc-400 hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:fill-zinc-100"
                          />
                        </svg>
                      </div>
                      <Sticker className="stroke-zinc-500 hover:stroke-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-100" />
                      <EmojiPicker
                        onChange={(emoji: string) =>
                          field.onChange(`${field.value} ${emoji}`)
                        }
                      />
                    </div>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
