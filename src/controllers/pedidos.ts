import { NextResponse } from "next/server";
import { NewPedido } from "../types/pedidos";
import { PedidoModel } from "../models";
import { transporter } from "../lib/mailer";

export async function getPedidos() {
  try {
    const pedidos = await PedidoModel.find()
      .populate({
        path: "productos.productoId",
        select: "price model internal_memory ram_capacity",
      })
      .populate({
        path: "user.userId",
        select: "name username email",
      });

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

    const newPedidoPopultate = await PedidoModel.findById(newPedido._id)
      .populate({
        path: "productos.productoId",
        select: "price model internal_memory ram_capacity",
      })
      .populate({
        path: "user.userId",
        select: "name username email",
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: newPedidoPopultate.user.userId.email,
      subject: `Confirmación de pedido #${newPedidoPopultate.orderNum}`,
      html: `
      <h1>Gracias por tu compra</h1>
      <p>Tu pedido con número <strong>${newPedidoPopultate.orderNum}</strong> está en proceso.</p>
      <p>Te avisaremos cuando esté listo para envío.</p>
    `,
    });

    return NextResponse.json(newPedido, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 },
    );
  }
}

export async function editarPedidoStatus(pedidoId: string, status: string) {
  try {
    if (!pedidoId) {
      return NextResponse.json({ message: "Datos inválidos" }, { status: 400 });
    }

    const pedido = await PedidoModel.findByIdAndUpdate(
      { _id: pedidoId },
      { $set: { status: status } },
      { new: true },
    );

    return NextResponse.json(pedido, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error al actualizar el pedido" },
      { status: 500 },
    );
  }
}
