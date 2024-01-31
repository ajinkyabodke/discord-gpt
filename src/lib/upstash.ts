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
  const callbackUrl = absoluteUrl("/api/check");


await fetch(`${env.QSTASH_URL}/${callbackUrl}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.QSTASH_TOKEN}`,
      "Content-Type": "application/json",
      "Upstash-Delay": "30s",
    },
    body: JSON.stringify({ threadId, runId, messageId }),
  });

};
