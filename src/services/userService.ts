import { CartItem, NewUser } from "../types/user";

export async function registrarUsuario(nuevoUsuario: NewUser | null) {
  const res = await fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function agregarAlCarrito(cart: CartItem, id: string) {
  const res = await fetch(`/api/user/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  if (data.newToken) {
    localStorage.setItem("authToken", data.newToken);
  }

  return data;
}
