import { Phones } from "../types/phones";

export async function fecthDestacados(): Promise<Phones[]> {
  const res = await fetch("api/phones/destacados", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.log("Error al obtener celuares destacados");
  }

  return res.json();
}
