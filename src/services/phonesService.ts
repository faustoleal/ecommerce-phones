import { NewProduct, Phone } from "../types/phones";

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

export async function fetchProductos(page: number, queryString: string) {
  const res = await fetch(`api/phones?page=${page}&${queryString}`, {
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

export async function fetchProductosRelacionados(marca: string) {
  const res = await fetch(`/api/phones/relacionados/${marca}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Error al obtener productos relacionados");
  }

  return res.json();
}

export async function crearProducto(nuevoProducto: NewProduct) {
  const res = await fetch(`/api/phones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoProducto),
  });

  if (!res.ok) {
    throw new Error("Error al crear producto");
  }

  return res.json();
}
