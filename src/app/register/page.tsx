import RegisterPage from "@/src/components/views/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear cuenta | Ecommerce Phones",
  description:
    "Crea tu cuenta en Ecommerce Phones y disfruta de una experiencia de compra personalizada. Regístrate fácilmente para gestionar pedidos, guardar tus smartphones favoritos y acceder a ofertas exclusivas de manera segura.",
};

export default function Register() {
  return <RegisterPage />;
}
