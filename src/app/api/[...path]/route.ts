import app from "../../../../backend/dist/server.js";
import serverless from "serverless-http";

const handler = serverless(app);

async function handle(req: Request, context: any) {
  const url = new URL(req.url);
  if (!url.pathname.startsWith("/api")) {
    url.pathname = `/api${url.pathname}`;
  }
  const newReq = new Request(url.toString(), req);
  return handler(newReq, context);
}

export async function GET(req: Request, context: any) { return handle(req, context); }
export async function POST(req: Request, context: any) { return handle(req, context); }
export async function PUT(req: Request, context: any) { return handle(req, context); }
export async function DELETE(req: Request, context: any) { return handle(req, context); }
export async function PATCH(req: Request, context: any) { return handle(req, context); }
