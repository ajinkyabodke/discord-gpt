import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  protectedProcedure,
  publicProcedure,
} from "../trpc";
import { messages } from "@/server/db/schema";
import OpenAI from "openai";
import { TRPCError } from "@trpc/server";
import { scheduleMessageCheck } from "@/lib/upstash";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const threadId = "thread_CdlEm8vRTxisWnkfuQsMb0Ir";
const assistantsId = "asst_70IEFMHgxh07oS5xui6VGG1H";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  sendMessage: protectedProcedure
    .input(
      z.object({
        content: z.string().min(2).max(250),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId;

      // const { success } = await ratelimit.limit(authorId);
      // if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
      const [messageStoredInDb] = await ctx.db
        .insert(messages)
        .values({
          userId: userId,
          content: input.content,
          role: "user",
        })
        .returning();

      if (!messageStoredInDb) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }

      const isMessageForGPT = messageStoredInDb?.content
        .toLowerCase()
        .includes("@gpt");

      if (!isMessageForGPT) {
        return messageStoredInDb;
      }

      const message = await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: input.content,
      });

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantsId,
      });

      await scheduleMessageCheck({
        threadId,
        runId: run.id,
        messageId: message.id,
      });

      console.log("Message Sent successfully");
    }),
});
