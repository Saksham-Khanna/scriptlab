import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const role = email.includes("mentor") ? "instructor" : email.includes("admin") ? "admin" : "student";
    const user = {
      id: role === "admin" ? 1 : role === "instructor" ? 2 : 3,
      name: email.split("@")[0] || "User",
      email: email.toLowerCase(),
      role,
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
