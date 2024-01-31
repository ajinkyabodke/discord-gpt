import {
  createTRPCProxyClient,
  // TODO: switch this out with `httpBatchLink` if something breaks
  // TODO: upgrade to stable version when it's released
  // unstable_httpBatchStreamLink,
  httpBatchLink,
  loggerLink,
} from "@trpc/client";
import { headers } from "next/headers";

import { env } from "@/env.js";
import { type AppRouter } from "@/server/api/root";
import { getUrl, transformer } from "./shared";

export const api = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    // unstable_httpBatchStreamLink
    httpBatchLink({
      url: getUrl(),
      headers() {
        const heads = new Map(headers());
        heads.set("x-trpc-source", "rsc");
        return Object.fromEntries(heads);
      },
    }),
  ],
});
