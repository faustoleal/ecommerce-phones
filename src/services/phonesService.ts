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
    console.log("Error al obtener celuares destacados");
  }

  return res.json();
}

export async function fetchProductos(page: number) {
  const res = await fetch(`api/phones?page=${page}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.log("Error al obtener productos");
  }

  return res.json();
}
