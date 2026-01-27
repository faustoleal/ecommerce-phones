import { eliminarItem } from "@/src/controllers/carrito";
import jwt from "jsonwebtoken";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; productoId: string } },
) {
  const { id, productoId } = await params;
  console.log(id);
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

    return Response.json({ ...data, newToken }, { status: 200 });
  }

  return response;
}
