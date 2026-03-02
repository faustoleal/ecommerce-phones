import { usuarioLogin } from "@/src/controllers/login";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  connectDB();
  const { email, password } = await req.json();
  return usuarioLogin(email, password);
}
