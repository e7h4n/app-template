import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { users } from "@/db/schema/user";

/**
 * Example API route using the service container
 */
export async function GET() {
  try {
    // Get database from container (will be automatically initialized)
    const db = await getDb();
    
    // Example query
    const allUsers = await db.select().from(users);
    
    return NextResponse.json({
      success: true,
      users: allUsers,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: "Database operation failed" },
      { status: 500 }
    );
  }
}