import { CartItem, PedidoUser } from "./user";

export type PedidoStatus = "Completado" | "Procesando" | "Pendiente";

export interface Pedido {
  _id: string;
  orderNum: string;
  productos: CartItem[];
  user: PedidoUser;
  status: PedidoStatus;
  date: string;
}
