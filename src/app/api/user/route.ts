import { crearUsuario, getUsuarios } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  connectDB();
  return getUsuarios();
}

export async function POST(req: Request) {
  connectDB();
  const { name, username, email, password } = await req.json();

  const nuevoUsuario = { name, username, email, password };
  return crearUsuario(nuevoUsuario);
}
