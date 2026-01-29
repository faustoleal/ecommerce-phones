import { Schema, model, models } from "mongoose";
import { Pedido } from "../types/pedidos";

const pedidoSchema = new Schema<Pedido>({
  orderNum: {
    type: String,
    required: true,
  },
  productos: [
    {
      productoId: { type: Schema.Types.ObjectId, ref: "Phone", required: true },
      cantidad: { type: Number, required: true, min: 1 },
    },
  ],
  user: {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  status: {
    type: String,
    default: "Procesando",
  },
  date: {
    type: String,
    required: true,
  },
});

export const PedidoModel =
  models.Pedido || model<Pedido>("Pedido", pedidoSchema);
