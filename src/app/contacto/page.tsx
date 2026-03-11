import ContactoPage from "@/src/components/views/ContactoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Ecommerce Phones",
  description:
    "¿Necesitas ayuda con tu compra de smartphones? En Ecommerce Phones puedes contactarnos fácilmente para soporte, consultas sobre productos y asistencia personalizada. Estamos aquí para responder tus dudas y brindarte la mejor experiencia de compra en teléfonos móviles.",
};

export default function Contacto() {
  return <ContactoPage />;
}
