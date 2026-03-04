"use client";

import { useApp } from "@/src/context/UserContext";
import Button from "../ui/Button";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../display/Card";
import { useToast } from "@/src/context/ToastContext";
import NotUserCarrito from "../carrito/NotUserCarrito";
import NotContentCarrito from "../carrito/NotContentCarrito";
import { usePedidos } from "@/src/context/PedidosContext";

const CarritoPage = () => {
  const { currentUser, clearCart, removeItem, editItem } = useApp();
  const { toast } = useToast();
  const { hacerPedido } = usePedidos();
  const router = useRouter();

  function handleRestar(quantity: number, productId: string) {
    if (quantity > 1) {
      editItem(productId, quantity - 1);
    }
  }

  function handleSumar(quantity: number, productId: string) {
    editItem(productId, quantity + 1);
  }

  const carrito = currentUser?.carrito ?? [];

  if (!currentUser) {
    return <NotUserCarrito />;
  }

  if (carrito.length === 0) {
    return <NotContentCarrito />;
  }

  async function handleClearCart() {
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
    }
  }

  async function handleRemoveItem(productId: string) {
    try {
      await removeItem(productId);
      toast({
        variant: "success",
        title: "Éxito:",
        description: "producto eliminado",
      });
    } catch (err: unknown) {
      let errMsg = "No se pudo eliminar el producto";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Error:",
        description: errMsg,
      });
    }
  }

  const subtotal = carrito.reduce(
    (total, item) => total + item.productoId.price * item.cantidad,
    0,
  );
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + shipping;

  async function handleComprar() {
    if (!currentUser) {
      toast({
        variant: "error",
        title: "Error:",
        description: "Debes iniciar sesión para realizar un pedido",
      });
      return;
    }

    try {
      await hacerPedido({
        productos: carrito,
        user: { userId: currentUser._id },
        status: "Procesando",
        envio: shipping,
        subtotal: subtotal,
        total: total,
        date: new Date().toLocaleDateString("es-AR"),
      });
      toast({
        variant: "success",
        title: "Éxito:",
        description: "Tu pedido se ha realizado correctamente.",
      });
    } catch (err: unknown) {
      let errMsg = "No se pudo realizar el pedido";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Error:",
        description: errMsg,
      });
    }
  }

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
                        <Button
                          className="text-muted-foreground hover:text-[#DF3F40] flex-shrink-0"
                          onClick={() => handleRemoveItem(item.productoId._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Eliminar</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            className="px-3"
                            onClick={() =>
                              handleRestar(item.cantidad, item.productoId._id)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-4 font-medium text-sm">
                            {item.cantidad}
                          </span>
                          <Button className="px-3">
                            <Plus
                              className="h-3 w-3"
                              onClick={() =>
                                handleSumar(item.cantidad, item.productoId._id)
                              }
                            />
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

                <Button
                  className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-medium h-9 gap-1.5 px-2.5"
                  onClick={handleComprar}
                >
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
