import { postCarrito, clearCarrito } from "@/src/controllers/carrito";
import { connectDB } from "@/src/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function POST(
  req: NextRequest,
  context: { params: Promise<Params> },
): Promise<NextResponse> {
  connectDB();
  const { cantidad, productoId } = await req.json();
  const cart = { productoId, cantidad };
  const { id } = await context.params;
  const response = await postCarrito(cart, id);

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
  req: NextRequest,
  context: {
    params: Promise<Params>;
  },
): Promise<NextResponse> {
  const { id } = await context.params;
  //console.log(id);
  const response = await clearCarrito(id);

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
