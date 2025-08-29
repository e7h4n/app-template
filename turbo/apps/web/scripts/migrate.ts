#!/usr/bin/env tsx

import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import drizzleConfig from "../drizzle.config";

config();

async function runMigrations() {
  console.log("🔄 Starting database migrations...");

  if (!drizzleConfig.dbCredentials?.url) {
    throw new Error("DATABASE_URL is not configured");
  }

  const sql = postgres(drizzleConfig.dbCredentials.url, { max: 1 });
  const db = drizzle(sql);

  try {
    console.log(`📁 Running migrations from: ${drizzleConfig.out}`);

    await migrate(db, {
      migrationsFolder: drizzleConfig.out || "./src/db/migrations",
    });

    console.log("✅ Migrations completed successfully!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

runMigrations().catch((error) => {
  console.error("❌ Unexpected error:", error);
  process.exit(1);
});
