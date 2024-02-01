import { NextRequest, NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";
import OpenAI from "openai";
import { scheduleMessageCheck } from "@/lib/upstash";
import { threadId } from "worker_threads";
import { db } from "@/server/db";
import { messages } from "@/server/db/schema";

async function handler(_req: NextRequest) {
  const data = await _req.json();

  console.log("recieved data", data);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log("retrieving openai");

  const run = await openai.beta.threads.runs.retrieve(
    data.threadId,
    data.runId,
  );

  console.log("recieved run", run);

  if (run.status === "queued" || run.status === "in_progress") {
    await scheduleMessageCheck({
      threadId: data.threadId,
      runId: data.runId,
      messageId: data.messageId,
    });

    return new Response("OK", { status: 200 });
  }
  console.log("status  completed ");

  if (run.status === "completed") {
    const message = await openai.beta.threads.messages.list(data.threadId);
    const messageContent = message.data[0]?.content[0].text.value;

    console.log("status  completed response", messageContent);

    const [messageStoredInDb] = await db
      .insert(messages)
      .values({
        content: messageContent,
        role: "assistant",
        userId: "gptuserid",
      })
      .returning();
    console.log("message  stored in db", messageStoredInDb);
    return new Response("OK", { status: 200 });
  }
}

export const POST = verifySignatureAppRouter(handler);
