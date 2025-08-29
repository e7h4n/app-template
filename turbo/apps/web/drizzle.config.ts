import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: "./.env" });

import { getEnvSchema } from "./src/env";

const env = getEnvSchema();

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: false,
});
