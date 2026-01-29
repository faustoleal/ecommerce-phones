export type UserRole = "admin" | "user";

export interface CartItem {
  productoId: string;
  cantidad: number;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  carrito: CartItem[];
}

export type DecodeUser = Omit<User, "password">;

export type NewUser = Omit<User, "_id" | "carrito">;

export type PedidoUser = Omit<User, "carrito" | "password" | "role">;
