import { postPedido, getPedidos } from "@/src/controllers/pedidos";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

export async function GET() {
  connectDB();
  return getPedidos();
}

export async function POST(req: NextRequest) {
  connectDB();
  const { orderNum, productos, user, status, envio, subtotal, total, date } =
    await req.json();

  const nuevoPedido = {
    orderNum,
    productos,
    user,
    status,
    envio,
    subtotal,
    total,
    date,
  };
  return postPedido(nuevoPedido);
}
