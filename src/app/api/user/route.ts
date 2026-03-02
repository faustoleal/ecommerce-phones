import { crearUsuario, getUsuarios } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  connectDB();
  return getUsuarios();
}

export async function POST(req: NextRequest) {
  connectDB();
  const { name, username, email, password, role } = await req.json();

  const nuevoUsuario = { name, username, email, password, role };
  return crearUsuario(nuevoUsuario);
}
