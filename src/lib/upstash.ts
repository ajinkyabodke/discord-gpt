import { env } from "@/env";
import { absoluteUrl } from "./utils";

export const scheduleMessageCheck = async ({
  runId,
  threadId,
  messageId,
}: {
  runId: string;
  threadId: string;
  messageId: string;
}) => {
  // const callbackUrl = absoluteUrl("/api/check");
  const callbackUrl = "https://discord-gptt.vercel.app/api/check";
  console.log(callbackUrl);

  const res = await fetch(`${env.QSTASH_URL}/${callbackUrl}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.QSTASH_TOKEN}`,
      "Content-Type": "application/json",
      "Upstash-Delay": "2s",
    },
    body: JSON.stringify({ threadId, runId, messageId }),
  });

  if (!res.ok) {
    throw new Error(`Upstash failed : ${res.status} ${await res.text()} `);
  }
};
