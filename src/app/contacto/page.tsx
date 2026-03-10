import ContactoPage from "@/src/components/views/ContactoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Contacto() {
  return <ContactoPage />;
}
