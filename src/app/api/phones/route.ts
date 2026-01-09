import { connectDB } from "@/src/lib/db";
import { listarProductos } from "../../../controllers/phones";

export async function GET(req: Request) {
  connectDB();
  return listarProductos(req);
}
