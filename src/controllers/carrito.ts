import { NextResponse } from "next/server";
import { CartItem } from "../types/user";
import { UserModel } from "../models/user";

export async function acutalizarCarrito(cart: CartItem, id: string) {
  try {
    const { productoId, cantidad } = cart;

    if (!productoId || !cantidad || cantidad < 1) {
      return NextResponse.json({ message: "Datos inválidos" }, { status: 400 });
    }

    const user = await UserModel.findById(id);

    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 },
      );
    }

    const existingItem = user.carrito.find(
      (item: CartItem) => item.productoId.toString() === productoId,
    );

    if (existingItem) {
      existingItem.cantidad += cantidad;
    } else {
      user.carrito.push({ productoId, cantidad });
    }

    await user.save();

    const populateUser = await UserModel.findById(id).populate({
      path: "carrito.productoId",
      select: "brand_name price model internal_memory ram_capacity",
    });

    return NextResponse.json(populateUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al actualizar el carrito" },
      { status: 500 },
    );
  }
}

export async function vaciarCarrito(id: string) {
  try {
    const user = await UserModel.findByIdAndUpdate(id, {
      $set: { carrito: [] },
    });

    await user.save();

    const updatedUser = await UserModel.findById(id);

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al actualizar el carrito" },
      { status: 500 },
    );
  }
}

export async function eliminarItem(id: string, productoId: string) {
  try {
    if (!productoId) {
      return NextResponse.json({ message: "Datos inválidos" }, { status: 400 });
    }

    const user = await UserModel.findByIdAndUpdate(id, {
      $pull: { carrito: { productoId } },
    });

    await user.save();

    const populateUser = await UserModel.findById(id).populate({
      path: "carrito.productoId",
      select: "brand_name price model internal_memory ram_capacity",
    });

    return NextResponse.json(populateUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al actualizar el carrito" },
      { status: 500 },
    );
  }
}
