import { crearPedido, getPedidos } from "@/src/controllers/pedidos";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  connectDB();
  return getPedidos();
}

export async function POST(req: Request) {
  connectDB();
  const { orderNum, productos, user, status, precio, envio, date } =
    await req.json();

  const nuevoPedido = {
    orderNum,
    productos,
    user,
    status,
    precio,
    envio,
    date,
  };
  return crearPedido(nuevoPedido);
}
