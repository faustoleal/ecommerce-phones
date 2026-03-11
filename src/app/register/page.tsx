import RegisterPage from "@/src/components/views/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear cuenta | Ecommerce Phones",
  description:
    "Accede a tu cuenta en Ecommerce Phones para gestionar tus pedidos, revisar tu historial de compras y disfrutar de una experiencia personalizada en la compra de smartphones. Inicia sesión de forma rápida y segura.",
};

export default function Register() {
  return <RegisterPage />;
}
