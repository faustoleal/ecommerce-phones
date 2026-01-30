import { NewPedido } from "../types/pedidos";

export async function obtenerPedidos() {
  const res = await fetch("/api/pedidos", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Error al obtener pedidos");
  }

  return res.json();
}

export async function realizarPedidos(pedido: NewPedido) {
  const res = await fetch("/api/pedidos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido),
  });

  if (!res.ok) {
    throw new Error("Error al obtener pedidos");
  }

  return res.json();
}
