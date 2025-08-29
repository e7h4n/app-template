import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { getContainer } from "./lib/container";
import { schema } from "./db/db";
import { env } from "./env";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const container = getContainer();

    // Register config service
    container.register("config", () => ({
      databaseUrl: env.DATABASE_URL,
      nodeEnv: (process.env.NODE_ENV || "development") as "development" | "production" | "test",
    }));

    // Register database pool
    container.register("pool", async () => {
      const config = await container.get("config");
      return new Pool({ connectionString: config.databaseUrl });
    });

    // Register database service
    container.register("db", async () => {
      const pool = await container.get("pool");
      return drizzle(pool, { schema });
    });

    console.log("Service container initialized");
  }
}