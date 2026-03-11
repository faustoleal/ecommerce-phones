import CarritoPage from "@/src/components/views/CarritoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi carrito de compras | Ecommerce Phones",
  description:
    "Revisa tu carrito de compras en Ecommerce Phones. Confirma tus smartphones seleccionados, ajusta cantidades y procede al pago de forma rápida y segura. Disfruta de una experiencia de compra sencilla y confiable.",
};

export default function Carrito() {
  return <CarritoPage />;
}
