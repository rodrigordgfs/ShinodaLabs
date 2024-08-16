// pages/api/corsMiddleware.ts

import { NextRequest, NextResponse } from "next/server";

export function applyCors(req: NextRequest) {
  const allowedOrigins = ["https://shinodalabs.com.br", "http://localhost:3000"];
  const origin = req.headers.get("origin");

  const res = NextResponse.next();

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    res.headers.set("Access-Control-Allow-Origin", "*"); // Or handle as needed
  }

  res.headers.set("Access-Control-Allow-Methods", "GET,HEAD,POST");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request
    return new NextResponse(null, { status: 204 });
  }

  return res;
}
