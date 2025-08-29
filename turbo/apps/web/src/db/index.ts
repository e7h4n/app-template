import { getContainer } from "../lib/container";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { schema } from "./db";

/**
 * Get database instance from container
 * The database will be automatically initialized on first use
 */
export async function getDb(): Promise<NodePgDatabase<typeof schema>> {
  const container = getContainer();
  return container.get("db");
}

/**
 * Close database connection
 */
export async function closeDb(): Promise<void> {
  const container = getContainer();
  await container.close();
}

export type Database = NodePgDatabase<typeof schema>;
