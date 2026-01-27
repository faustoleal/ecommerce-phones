"use client";

import { useApp } from "@/src/context/UserContext";
import Button from "../Button";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../Card";
import { useToast } from "@/src/context/ToastContext";
import { useState } from "react";

const CarritoPage = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser, clearCart } = useApp();
  const { toast } = useToast();
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

  async function handleClearCart() {
    setLoading(true);

    try {
      await clearCart();
      toast({
        variant: "success",
        title: "Éxito:",
        description: "el carrito se vació",
      });
    } catch (err: unknown) {
      let errMsg = "No se pudo vaciar el carrito";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Error:",
        description: errMsg,
      });
    } finally {
      setLoading(false);
    }
  }

  const subtotal = carrito.reduce(
    (total, item) => total + item.productoId.price * item.cantidad,
    0,
  );
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="mb-8">
          <Button onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continuar comprando
          </Button>
          <h1 className="text-4xl font-medium mb-2">Carrito de compras</h1>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Tienes {carrito.length}{" "}
              {carrito.length === 1 ? "producto" : "productos"} en tu carrito
            </p>
            <Button
              className="text-[#DF3F40] border-[#DF3F40] hover:bg-[#DF3F40] hover:text-white border h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem]"
              onClick={handleClearCart}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Vaciar carrito
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {carrito.map((item, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0 border border-border">
                      <Image
                        fill
                        loading="eager"
                        sizes="(max-width:722px) (max-height: 722px)"
                        src="/iphone-15-pro-max-titanium.png"
                        alt={item.productoId.model}
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <Link
                            href={`/productos/${item.productoId._id}`}
                            className="font-medium hover:text-[#6366F1] transition-colors text-balance"
                          >
                            {item.productoId.model}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.productoId.internal_memory}GB •{" "}
                            {item.productoId.ram_capacity}GB
                          </p>
                        </div>
                        <Button className="text-muted-foreground hover:text-[#DF3F40] flex-shrink-0">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Eliminar</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <Button className="px-3">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-4 font-medium text-sm">
                            {item.cantidad}
                          </span>
                          <Button className="px-3">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-medium text-[#6366F1]">
                            ${item.productoId.price * item.cantidad}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ${item.productoId.price} c/u
                          </p>
                        </div>
                      </div>

                      {/* Stock warning
                      {item.quantity >= item.product.stock && (
                        <p className="text-xs text-[#DF3F40] mt-2">
                          Stock máximo alcanzado
                        </p>
                      )} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border border-border">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-medium">Resumen del pedido</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-[#06B6D4]">Gratis</span>
                      ) : (
                        `$${shipping}`
                      )}
                    </span>
                  </div>

                  {subtotal < 500 && (
                    <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      Agrega ${500 - subtotal} más para envío gratis
                    </p>
                  )}

                  <hr className="bg-border shrink-0" />

                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="text-2xl font-medium text-[#6366F1]">
                      ${total}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-medium h-9 gap-1.5 px-2.5">
                  Finalizar compra
                </Button>

                {!currentUser && (
                  <p className="text-xs text-center text-muted-foreground">
                    Debes{" "}
                    <Link
                      href="/login"
                      className="text-[#6366F1] hover:underline"
                    >
                      iniciar sesión
                    </Link>{" "}
                    para continuar
                  </p>
                )}

                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#06B6D4] rounded-full"></span>
                    Envío gratis en compras +$500
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#6366F1] rounded-full"></span>
                    Garantía oficial incluida
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
                    Productos 100% originales
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoPage;
