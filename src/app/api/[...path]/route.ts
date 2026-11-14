import app from "../../../../backend/dist/server.js";
import serverless from "serverless-http";

const handler = serverless(app);

export async function GET(req: Request, context: any) {
  return handler(req, context);
}
export async function POST(req: Request, context: any) {
  return handler(req, context);
}
export async function PUT(req: Request, context: any) {
  return handler(req, context);
}
export async function DELETE(req: Request, context: any) {
  return handler(req, context);
}
export async function PATCH(req: Request, context: any) {
  return handler(req, context);
}
