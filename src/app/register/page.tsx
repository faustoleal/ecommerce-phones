import RegisterPage from "@/src/components/views/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear cuenta | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Register() {
  return <RegisterPage />;
}
