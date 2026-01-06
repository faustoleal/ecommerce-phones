import { getUsuarios } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  connectDB();
  return getUsuarios();
}
