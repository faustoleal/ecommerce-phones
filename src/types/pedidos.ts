import { CartItemPopulate, User } from "./user";

export interface PedidoUser {
  userId: User;
}

export type PedidoStatus = "Completado" | "Procesando" | "Pendiente";

export interface Pedido {
  _id: string;
  orderNum: string;
  productos: CartItemPopulate[];
  user: PedidoUser;
  status: PedidoStatus;
  precio: number;
  envio: number;
  date: string;
}

export type NewPedido = Omit<Pedido, "_id" | "orderNum" | "user"> & {
  user: { userId: string };
};
