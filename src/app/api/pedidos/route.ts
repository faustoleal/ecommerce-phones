import { crearPedido, getPedidos } from "@/src/controllers/pedidos";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  connectDB();
  return getPedidos();
}

export async function POST(req: Request) {
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
  return crearPedido(nuevoPedido);
}
