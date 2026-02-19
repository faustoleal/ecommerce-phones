import { Schema, model, models } from "mongoose";
import { Pedido } from "../types/pedidos";

const counterSchema = new Schema({
  name: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

export const CounterModel = models.Counter || model("Counter", counterSchema);

const pedidoSchema = new Schema<Pedido>({
  orderNum: {
    type: String,
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
    enum: ["Completado", "Procesando", "Pendiente", "Cancelado"],
    default: "Procesando",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

pedidoSchema.pre("save", async function () {
  if (!this.isNew) return;

  const counter = await CounterModel.findOneAndUpdate(
    { name: "pedido" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
  );

  this.orderNum = `ORD-${String(counter.seq).padStart(4, "0")}`;
});

export const PedidoModel =
  models.Pedido || model<Pedido>("Pedido", pedidoSchema);
