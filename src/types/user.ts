export type UserRole = "admin" | "user";

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: UserRole;
}

export type NewUser = Omit<User, "_id">;
