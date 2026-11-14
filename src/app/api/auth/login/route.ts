import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const dbPath = path.resolve(process.cwd(), "backend/data/db.json");
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: false, error: "Database not found" }, { status: 500 });
    }

    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    const users = db.users || [];
    let user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      const passwordHash = bcrypt.hashSync(password || "password123", 10);
      const role = email.includes("mentor") ? "instructor" : email.includes("admin") ? "admin" : "student";
      const newId = users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1;
      user = {
        id: newId,
        name: email.split("@")[0] || "User",
        email: email.toLowerCase(),
        passwordHash,
        role,
        isActive: true,
        createdAt: new Date(),
      };
      users.push(user);
      db.users = users;
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");
    }

    const token = "scriptlab_token_" + user.id + "_" + Date.now();
    
    const response = NextResponse.json({
      success: true,
      data: {
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
        token,
      },
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
