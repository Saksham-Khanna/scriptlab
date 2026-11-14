import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const dbPath = path.resolve(process.cwd(), "backend/data/db.json");
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: true, data: { user: { id: 3, name: "Alex Rivera", email: "student@scriptlab.io", role: "student" } } });
    }
    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    const users = db.users || [];
    const defaultUser = users[0] || { id: 1, name: "Admin User", email: "admin@scriptlab.io", role: "admin" };

    return NextResponse.json({
      success: true,
      data: {
        user: { id: defaultUser.id, name: defaultUser.name, email: defaultUser.email, role: defaultUser.role },
      },
    });
  } catch {
    return NextResponse.json({ success: true, data: { user: { id: 1, name: "Admin User", email: "admin@scriptlab.io", role: "admin" } } });
  }
}
