import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    if (!email || !name || !password) {
      return NextResponse.json(
        { success: false, error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Determine user ID based on role
    let userId = 3; // default to student
    if (email.includes("admin")) userId = 1;
    else if (email.includes("mentor")) userId = 2;

    // Hardcoded demo users
    const users: Record<number, { id: number; name: string; email: string; role: "student" | "instructor" | "admin" }> = {
      1: { id: 1, name: "Admin User", email: "admin@scriptlab.io", role: "admin" },
      2: { id: 2, name: "Sarah Jenkins", email: "mentor@scriptlab.io", role: "instructor" },
      3: { id: 3, name: "Alex Rivera", email: "student@scriptlab.io", role: "student" },
    };

    const user = users[userId] || {
      id: userId,
      name,
      email: email.toLowerCase(),
      role: (role as "student" | "instructor") === "instructor" ? "instructor" : "student",
    };

    const token = "scriptlab_token_" + user.id + "_" + Date.now();

    const response = NextResponse.json({
      success: true,
      data: { user, token },
    });

    response.cookies.set("scriptlab_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Server error" }, { status: 500 });
  }
}
