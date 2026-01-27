import { CartItem } from "../types/user";

export async function agregarAlCarrito(cart: CartItem, id: string) {
  const res = await fetch(`/api/carrito/${id}`, {
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

export async function limpiarCarrito(id: string) {
  const res = await fetch(`/api/carrito/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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

export async function eliminarItemdelCarrito(id: string, productoId: string) {
  const res = await fetch(`/api/carrito/${id}/${productoId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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
