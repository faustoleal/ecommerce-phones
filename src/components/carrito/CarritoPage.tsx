"use client";

import { useApp } from "@/src/context/UserContext";
import Button from "../Button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const CarritoPage = () => {
  const { currentUser } = useApp();
  const router = useRouter();

  const carrito = currentUser?.carrito ?? [];

  console.log(carrito);

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center max-w-md px-5">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-medium mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Inicia sesión para tener acceso al carrito
          </p>
          <Button
            onClick={() => router.push("/login")}
            className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 gap-1.5 px-2.5"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    );
  }

  if (carrito.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center max-w-md px-5">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-medium mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Agrega productos a tu carrito para comenzar a comprar
          </p>
          <Button
            onClick={() => router.push("/productos")}
            className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 gap-1.5 px-2.5"
          >
            Explorar productos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrito</h1>
    </div>
  );
};

export default CarritoPage;
