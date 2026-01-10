import { Phone } from "../types/phones";

export async function fecthDestacados(): Promise<{
  apple: Phone[];
  samsung: Phone[];
  xiaomi: Phone[];
}> {
  const res = await fetch("api/phones/destacados", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Error al obtener celuares destacados");
  }

  return res.json();
}

export async function fetchProductos(page: number) {
  const res = await fetch(`api/phones?page=${page}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Error al obtener productos");
  }

  return res.json();
}

export async function fetchProductosByID(id: string) {
  const res = await fetch(`/api/phones/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Error al obtener el producto");
  }

  return res.json();
}
