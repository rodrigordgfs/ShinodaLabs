import { NextRequest, NextResponse } from "next/server";

export async function applyCors(req: NextRequest, res: NextResponse, next: Function) {
  const allowedOrigins = ["https://shinodalabs.com.br", "http://localhost:3000"];
  const origin = req.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  }

  res.headers.set("Access-Control-Allow-Methods", "GET,HEAD,POST");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: null, status: 204 });
  }

  return next();
}
