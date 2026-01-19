import { CartItem, DecodeUser, UserRole } from "@/src/types/user";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  carrito: CartItem[];
}

export const decodedToken = (token: string): DecodeUser | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return {
      _id: decoded._id,
      name: decoded.name,
      username: decoded.username,
      email: decoded.email,
      role: decoded.role,
      carrito: decoded.carrito,
    };
  } catch (err) {
    console.error("Error decodificando token:", err);
    return null;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  localStorage.setItem("authToken", data.token);
  return data.token;
};

export const logoutUser = (): void => {
  localStorage.removeItem("authToken");
};
