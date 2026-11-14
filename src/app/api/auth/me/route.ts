import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    
    if (!token) {
      return NextResponse.json({ success: false, error: "Not authenticated" }, { status: 401 });
    }

    // Extract user ID from token (format: scriptlab_token_<id>_<timestamp>)
    const match = token.match(/scriptlab_token_(\d+)_/);
    const userId = match ? parseInt(match[1]) : null;

    if (!userId) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }

    // Hardcoded demo users
    const users: Record<number, { id: number; name: string; email: string; role: "student" | "instructor" | "admin" }> = {
      1: { id: 1, name: "Admin User", email: "admin@scriptlab.io", role: "admin" },
      2: { id: 2, name: "Sarah Jenkins", email: "mentor@scriptlab.io", role: "instructor" },
      3: { id: 3, name: "Alex Rivera", email: "student@scriptlab.io", role: "student" },
    };

    const user = users[userId];
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: { user } });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}
