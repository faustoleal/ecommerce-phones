import { acutalizarCarrito, vaciarCarrito } from "@/src/controllers/carrito";
import { connectDB } from "@/src/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  context: { params: { id: string } },
): Promise<NextResponse> {
  connectDB();
  const { cantidad, productoId } = await request.json();
  const cart = { productoId, cantidad };
  const { id } = context.params;
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

    return NextResponse.json({ ...data, newToken }, { status: 200 });
  }

  return response;
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } },
): Promise<NextResponse> {
  const { id } = context.params;
  //console.log(id);
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

    return NextResponse.json({ ...data, newToken }, { status: 200 });
  }

  return response;
}
