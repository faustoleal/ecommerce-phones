import { usuarioLogin } from "@/src/controllers/login";
import { connectDB } from "@/src/lib/db";

export async function POST(req: Request) {
  connectDB();
  const { email, password } = await req.json();
  return usuarioLogin(email, password);
}
