import { connectDB } from "@/src/lib/db";
import { listarProductos } from "../../../controllers/phones";

export async function GET() {
  connectDB();
  return listarProductos();
}
