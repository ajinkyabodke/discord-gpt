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
  console.log(callbackUrl);

  await fetch(`${env.QSTASH_URL}/${callbackUrl}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.QSTASH_TOKEN}`,
      "Content-Type": "application/json",
      "Upstash-Delay": "10s",
    },
    body: JSON.stringify({ threadId, runId, messageId }),
  });
};
