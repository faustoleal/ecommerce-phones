import { NextResponse } from "next/server";
import { NewPedido } from "../types/pedidos";
import { PedidoModel } from "../models/pedidos";

export async function getPedidos() {
  try {
    const pedidos = await PedidoModel.find();
    if (pedidos.length === 0) {
      return NextResponse.json(
        { message: "No hay datos en la base" },
        { status: 400 },
      );
    }
    return NextResponse.json(pedidos, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener pedidos" },
      { status: 500 },
    );
  }
}

export async function crearPedido(pedido: NewPedido) {
  try {
    const newPedido = await PedidoModel.create(pedido);

    return NextResponse.json(newPedido, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 },
    );
  }
}
