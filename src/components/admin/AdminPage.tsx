"use client";

import { usePedidos } from "@/src/context/PedidosContext";
import { Card, CardContent } from "../Card";
import { DollarSign, Package, ShoppingCart, TrendingUp, X } from "lucide-react";
import { useState, useEffect } from "react";
import PedidosTable from "./PedidosTable";
import { Phone } from "@/src/types/phones";
import { fetchProductos } from "@/src/services/phonesService";
import ProductosTable from "./ProductosTable";
import CreatePhoneForm from "./CreatePhoneForm";
import { Pedido } from "@/src/types/pedidos";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "../Modal";
import Image from "next/image";

const AdminPage = () => {
  const [selected, setSelected] = useState("pedidos");
  const [productos, setProductos] = useState<Phone[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedOrder, setSelectedOrder] = useState<Pedido | null>(null);
  const { pedidos } = usePedidos();

  useEffect(() => {
    fetchProductos(page)
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-5">
        <div className="mb-8">
          <h1 className="text-4xl font-medium mb-2">Panel de Administración</h1>
          <p className="text-muted-foreground">
            Gestiona pedidos, productos y stock
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Ingresos Totales
                  </p>
                  <p className="text-3xl font-medium text-[#06B6D4]">$2000</p>
                </div>
                <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-[#06B6D4]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Pedidos Pendientes
                  </p>
                  <p className="text-3xl font-medium text-[#6366F1]">2</p>
                </div>
                <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-[#6366F1]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Productos
                  </p>
                  <p className="text-3xl font-medium text-[#8b5cf6]">630</p>
                </div>
                <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                  <Package className="h-6 w-6 text-[#8b5cf6]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Stock</p>
                  <p className="text-3xl font-medium text-[#06B6D4]">1200</p>
                </div>
                <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[#06B6D4]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tablas */}

        <div className="gap-2 flex flex-col">
          <ul className="rounded-lg p-2 h-8 rounded text-muted-foreground inline-flex w-fit items-center justify-center bg-muted cursor-pointer">
            <li
              className="gap-1.5 rounded-md border border-transparent p-3 text-sm font-medium focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground  dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all hover:bg-white hover:shadow aria-selected:bg-white aria-selected:shadow"
              role="tab"
              aria-selected={selected === "pedidos"}
              onClick={() => setSelected("pedidos")}
            >
              Pedidos
            </li>
            <li
              className="gap-1.5 rounded-md border border-transparent p-3 text-sm font-medium  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground  dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all hover:bg-white hover:shadow aria-selected:bg-white aria-selected:shadow"
              role="tab"
              aria-selected={selected === "productos"}
              onClick={() => setSelected("productos")}
            >
              Productos
            </li>
            <li
              className="gap-1.5 rounded-md border border-transparent p-3 text-sm text-foreground font-medium  focus-visible:border-ring focus-visible:ring-ring/50  dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all hover:bg-white hover:shadow aria-selected:bg-white aria-selected:shadow"
              role="tab"
              aria-selected={selected === "agregar"}
              onClick={() => setSelected("agregar")}
            >
              Agregar Producto
            </li>
          </ul>
          {selected === "pedidos" && (
            <PedidosTable
              pedidos={pedidos}
              setSelectedOrder={setSelectedOrder}
            />
          )}
          {selected === "productos" && <ProductosTable productos={productos} />}
          {selected === "agregar" && (
            <CreatePhoneForm
              productos={productos}
              setProductos={setProductos}
            />
          )}
        </div>

        {/* Modal */}

        {selectedOrder !== null && (
          <Modal>
            <ModalContent className="max-w-2xl border border-border p-6 max-h-[85vh] overflow-y-auto">
              <ModalHeader>
                <ModalTitle className="text-xl font-medium flex items-center gap-2">
                  <X
                    className="h-5 w-5"
                    onClick={() => setSelectedOrder(null)}
                  />
                  <Package className="h-5 w-5 text-[#6366F1]" />
                  {selectedOrder.orderNum}
                </ModalTitle>
                <ModalDescription>
                  Detalles del pedido realizado el {selectedOrder.date}
                </ModalDescription>
              </ModalHeader>
              <div className="space-y-6">
                {/* Customer Info */}
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Información del Cliente</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Nombre:</span>{" "}
                      <span className="font-medium">
                        {selectedOrder.user.userId.username}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>{" "}
                      <span className="font-medium">
                        {selectedOrder.user.userId.email}
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch" />

                {/* Products */}
                <div>
                  <h4 className="font-medium mb-3">Productos del Pedido</h4>
                  <div className="space-y-3">
                    {selectedOrder.productos.map((producto, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-background border border-border rounded-lg"
                      >
                        <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden border border-border flex-shrink-0">
                          <Image
                            fill
                            loading="eager"
                            sizes="(max-width:722px) (max-height: 722px)"
                            src="/iphone-15-pro-max-titanium.png"
                            alt={producto.productoId.model}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {producto.productoId.model}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {producto.productoId.model}
                          </p>
                          <p className="text-sm text-muted-foreground">RAM</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-medium text-[#6366F1]">
                            ${producto.productoId.price}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            x{producto.cantidad}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch" />

                {/* Order Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>
                      $
                      {selectedOrder.productos.reduce(
                        (sum, item) =>
                          sum + item.productoId.price * item.cantidad,
                        0,
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envio</span>
                    <span>Gratis</span>
                  </div>

                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span className="text-[#6366F1]">$2500</span>
                  </div>
                </div>

                {/* Status */}
              </div>
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
