import { acutalizarCarrito, vaciarCarrito } from "@/src/controllers/carrito";
import { connectDB } from "@/src/lib/db";
import jwt from "jsonwebtoken";

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const { cantidad, productoId } = await request.json();
  const cart = { productoId, cantidad };
  const { id } = await params;
  const response = await acutalizarCarrito(cart, id);

  // Si la respuesta es exitosa, generar un nuevo token
  if (response.status === 200) {
    const data = await response.json();
    const newToken = jwt.sign(
      {
        _id: data._id,
        name: data.name,
        username: data.username,
        email: data.email,
        role: data.role,
        carrito: data.carrito,
      },
      process.env.SECRET as string,
    );

    return Response.json({ ...data, newToken }, { status: 200 });
  }

  return response;
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  console.log(id);
  const response = await vaciarCarrito(id);

  if (response.status === 200) {
    const data = await response.json();
    const newToken = jwt.sign(
      {
        _id: data._id,
        name: data.name,
        username: data.username,
        email: data.email,
        role: data.role,
        carrito: data.carrito,
      },
      process.env.SECRET as string,
    );

    return Response.json({ ...data, newToken }, { status: 200 });
  }

  return response;
}
