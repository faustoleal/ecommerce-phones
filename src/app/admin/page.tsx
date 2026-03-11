import AdminPage from "@/src/components/views/AdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de administrador | Ecommerce Phones",
  description:
    "Accede al panel de administración de Ecommerce Phones. Gestiona productos, controla inventario, revisa pedidos y administra usuarios con herramientas seguras y eficientes para mantener tu tienda online siempre actualizada.",
};

export default function Admin() {
  return <AdminPage />;
}
