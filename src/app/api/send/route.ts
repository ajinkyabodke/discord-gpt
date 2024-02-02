import { NextRequest } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";
import OpenAI from "openai";
import { scheduleMessageCheck } from "@/lib/upstash";

async function handler(_req: NextRequest) {
  const data = await _req.json();

  console.log("recieved data", data);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const message = await openai.beta.threads.messages.create(data.threadId, {
    role: "user",
    content: data.content,
  });

  const run = await openai.beta.threads.runs.create(data.threadId, {
    assistant_id: data.assistant_id,
  });

  await scheduleMessageCheck({
    threadId: data.threadId,
    runId: run.id,
    messageId: message.id,
  });
  return new Response("OK", { status: 200 });
}

export const POST = verifySignatureAppRouter(handler);
