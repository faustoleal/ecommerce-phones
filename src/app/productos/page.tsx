import ProductosPage from "@/src/components/views/ProductosPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Productos() {
  return <ProductosPage />;
}
