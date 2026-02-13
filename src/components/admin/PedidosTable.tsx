"use client";

import { Pedido, PedidoStatus } from "@/src/types/pedidos";
import React, { SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";

interface PedidosTableProps {
  pedidos: Pedido[];
  setSelectedOrder: React.Dispatch<SetStateAction<Pedido | null>>;
}

const PedidosTable: React.FC<PedidosTableProps> = ({
  pedidos,
  setSelectedOrder,
}) => {
  const getPedidoStatusColor = (status: PedidoStatus) => {
    switch (status) {
      case "Completado":
        return "bg-[#06B6D4] text-white";
      case "Procesando":
        return "bg-[#8B5CF6] text-white";
      case "Pendiente":
        return "bg-[#6366F1] text-white";
      case "Cancelado":
        return "bg-[#DF3F40] text-white";
    }
  };

  return (
    <div className="text-sm flex-1 outline-none">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Gestión de Pedidos</CardTitle>
          <CardDescription>Administra el estado de los pedidos</CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Productos</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow
                  key={pedido._id}
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setSelectedOrder(pedido)}
                >
                  <TableCell className="font-medium">
                    {pedido.orderNum}
                  </TableCell>
                  <TableCell>{pedido.user.userId.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {pedido.user.userId.email}
                  </TableCell>
                  <TableCell>{pedido.productos[0].cantidad}</TableCell>
                  <TableCell className="font-medium text-[#6366f1]">
                    ${pedido.productos[0].productoId.price}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {pedido.date}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit shrink-0 overflow-hidden ${getPedidoStatusColor(pedido.status)}`}
                    >
                      {pedido.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PedidosTable;
