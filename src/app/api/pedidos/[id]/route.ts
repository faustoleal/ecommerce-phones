import { editarPedidoStatus } from "@/src/controllers/pedidos";
import { connectDB } from "@/src/lib/db";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const { status } = await req.json();

  connectDB();

  return editarPedidoStatus(id, status);
}
