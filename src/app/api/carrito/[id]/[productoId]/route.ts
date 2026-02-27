import { actualizarCantidad, eliminarItem } from "@/src/controllers/carrito";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string; productoId: string } },
): Promise<NextResponse> {
  const { id, productoId } = context.params;
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
  request: NextRequest,
  context: { params: { id: string; productoId: string } },
): Promise<NextResponse> {
  const { id, productoId } = context.params;
  const { cantidad } = await request.json();

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
