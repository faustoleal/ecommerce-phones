import LoginPage from "@/src/components/views/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Login() {
  return <LoginPage />;
}
