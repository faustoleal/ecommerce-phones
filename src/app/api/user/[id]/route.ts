import { acutalizarCarrito, getUserById } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  console.log(id);

  connectDB();
  return getUserById(id);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const { cantidad, productoId } = await request.json();
  const cart = { productoId, cantidad };
  const { id } = await params;
  return acutalizarCarrito(cart, id);
}
