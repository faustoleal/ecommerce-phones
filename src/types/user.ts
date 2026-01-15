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
  role: UserRole;
  carrito: CartItem[];
}

export type NewUser = Omit<User, "_id">;
