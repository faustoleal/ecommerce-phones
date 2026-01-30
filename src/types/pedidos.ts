import { CartItem } from "./user";

export type PedidoStatus = "Completado" | "Procesando" | "Pendiente";

export interface Pedido {
  _id: string;
  orderNum: string;
  productos: CartItem[];
  user: string;
  status: PedidoStatus;
  precio: number;
  envio: number;
  date: string;
}

export type NewPedido = Omit<Pedido, "_id">;
