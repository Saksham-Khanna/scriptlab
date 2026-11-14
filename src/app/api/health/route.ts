import { NextResponse } from "next/server";

export async function GET() {
  try {
    const healthInfo = {
      status: "healthy",
      service: "ScriptLab API",
      environment: process.env.NODE_ENV || "production",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      version: "1.0.0",
    };

    return NextResponse.json({ success: true, data: healthInfo });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Health check failed" },
      { status: 500 }
    );
  }
}
