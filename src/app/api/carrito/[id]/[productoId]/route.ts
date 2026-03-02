import { actualizarCantidad, eliminarItem } from "@/src/controllers/carrito";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
  productoId: string;
};

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<Params> },
): Promise<Response> {
  const { id, productoId } = await context.params;
  //console.log(id);
  const response = await eliminarItem(id, productoId);

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

export async function PUT(
  req: NextRequest,
  context: { params: Promise<Params> },
): Promise<NextResponse> {
  const { id, productoId } = await context.params;
  const { cantidad } = await req.json();

  const response = await actualizarCantidad(id, productoId, cantidad);

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
