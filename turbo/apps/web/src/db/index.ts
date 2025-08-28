import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { schema } from "./db";
import { env } from "../env";

const connectionString = env.DATABASE_URL;

let db: ReturnType<typeof drizzle<typeof schema>> | null = null;
let pool: Pool | null = null;

export function getDb() {
  if (!db) {
    pool = new Pool({ connectionString });
    db = drizzle(pool, { schema });
  }

  return db;
}

export async function closeDb() {
  if (pool) {
    await pool.end();
    pool = null;
    db = null;
  }
}

export type Database = ReturnType<typeof getDb>;
