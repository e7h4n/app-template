import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: "./.env" });

import { env } from "./src/env";

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  verbose: true,
  strict: false,
});
