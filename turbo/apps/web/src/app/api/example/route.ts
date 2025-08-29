import { NextResponse } from "next/server";
import { initServices } from "../../../lib/init-services";
import { users } from "../../../db/schema/user";

/**
 * Example API route
 * Always call initServices() at the entry point
 */
export async function GET() {
  // Initialize services at serverless function entry
  initServices();
  
  try {
    // No ! needed - getter ensures services exists
    const allUsers = await globalThis.services.db.select().from(users);
    
    return NextResponse.json({
      success: true,
      users: allUsers,
      // Debug info in development
      debug: globalThis.services.env.NODE_ENV === "development" ? {
        isVercel: !!process.env.VERCEL,
        nodeEnv: globalThis.services.env.NODE_ENV,
      } : undefined,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: "Database operation failed" },
      { status: 500 }
    );
  }
}