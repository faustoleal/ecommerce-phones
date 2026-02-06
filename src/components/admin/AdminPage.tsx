"use client";

import { usePedidos } from "@/src/context/PedidosContext";
import { Card, CardContent } from "../Card";
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { useState } from "react";
import PedidosTable from "./PedidosTable";

const AdminPage = () => {
  const [selected, setSelected] = useState("pedidos");
  const { pedidos } = usePedidos();

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
          {selected === "pedidos" && <PedidosTable pedidos={pedidos} />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
