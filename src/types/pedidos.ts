import { CartItemPopulate, User } from "./user";

export interface PedidoUser {
  userId: User;
}

export type PedidoStatus =
  | "Completado"
  | "Procesando"
  | "Pendiente"
  | "Cancelado";

export interface Pedido {
  _id: string;
  orderNum: string;
  productos: CartItemPopulate[];
  user: PedidoUser;
  status: PedidoStatus;
  envio: number;
  subtotal: number;
  total: number;
  date: string;
}

export type NewPedido = Omit<Pedido, "_id" | "orderNum" | "user"> & {
  user: { userId: string };
};
