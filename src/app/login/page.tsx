import LoginPage from "@/src/components/views/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Ecommerce Phones",
  description:
    "Accede a tu cuenta en Ecommerce Phones para gestionar tus pedidos, revisar tu historial de compras y disfrutar de una experiencia personalizada en la compra de smartphones. Inicia sesión de forma rápida y segura.",
};

export default function Login() {
  return <LoginPage />;
}
