import { putPedidoStatus } from "@/src/controllers/pedidos";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

type Params = {
  id: string;
};

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { id } = await params;
  const { status } = await req.json();

  connectDB();

  return putPedidoStatus(id, status);
}
