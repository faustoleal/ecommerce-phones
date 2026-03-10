import CarritoPage from "@/src/components/views/CarritoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi carrito de compras | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Carrito() {
  return <CarritoPage />;
}
