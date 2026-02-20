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
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { Eye } from "lucide-react";
import { ProductosState } from "./AdminPage";
import Pagination from "../Pagination";

interface ProductosTableProps {
  productos: ProductosState;
  setPage: React.Dispatch<SetStateAction<number>>;
}

const ProductosTable: React.FC<ProductosTableProps> = ({
  productos,
  setPage,
}) => {
  return (
    <div className="text-sm flex-1 outline-none">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Gestión de Stock</CardTitle>
          <CardDescription>Controla el inventario de productos</CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productos.products.map((producto) => (
                <TableRow
                  key={producto._id}
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0 border border-border">
                        <Image
                          fill
                          loading="eager"
                          sizes="(max-width:722px) (max-height: 722px)"
                          src="/iphone-15-pro-max-titanium.png"
                          alt={producto.model}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{producto.model}</span>
                    </div>
                  </TableCell>
                  <TableCell>{producto.brand_name}</TableCell>
                  <TableCell className="font-medium text-[#6366F1]">
                    ${producto.price}
                  </TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>
                    <span className="bg-[#06B6D4] text-white border-0 inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0">
                      En Stock
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button>
                      <Link href={`/productos/${producto._id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            page={productos.page}
            totalPages={productos.totalPages}
            totalPhones={productos.totalPhones}
            setPage={setPage}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductosTable;
