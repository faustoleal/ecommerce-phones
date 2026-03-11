import ProductosPage from "@/src/components/views/ProductosPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Ecommerce Phones",
  description:
    "Descubre nuestra amplia selección de smartphones en Ecommerce Phones. Encuentra las últimas marcas y modelos con precios competitivos, especificaciones detalladas y opciones de compra seguras. Explora y elige el teléfono ideal para ti.",
};

export default function Productos() {
  return <ProductosPage />;
}
