import { type Config } from "drizzle-kit";

import { env } from "@/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/out",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["discord-gpt_*"],
} satisfies Config;
