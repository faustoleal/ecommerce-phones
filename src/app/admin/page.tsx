import AdminPage from "@/src/components/views/AdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de administrador | Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Admin() {
  return <AdminPage />;
}
