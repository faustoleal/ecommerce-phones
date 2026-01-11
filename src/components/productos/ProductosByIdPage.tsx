"use client";

import { fetchProductosByID } from "@/src/services/phonesService";
import { Phone } from "@/src/types/phones";
import { ArrowLeft, Check, Shield, ShoppingCart, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductosByIdPage = ({ id }: { id: string }) => {
  const [producto, setProducto] = useState<Phone | undefined>(undefined);

  useEffect(() => {
    fetchProductosByID(id)
      .then(setProducto)
      .catch((error) => console.log(error));
  }, [id]);

  console.log(id, producto);

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Producto no encontrado</h1>
          <Link href="/productos">
            <button className="bg-black text-white border border-border h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none">
              Volver a productos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-5">
        <Link href="/productos">
          <button className="bg-black text-white border border-border h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none mb-6">
            <ArrowLeft className="mr-4 h-4 w-4" />
            Volver
          </button>
        </Link>
        {/* Detalles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden border border-border">
            <Image
              fill
              sizes="(max-width:722px) (max-height: 722px)"
              src="/iphone-15-pro-max-titanium.png"
              alt={producto.model}
              className="object-cover"
            />
          </div>
          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs mb-6 font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden">
                {producto.brand_name}
              </span>
              <h1 className="text-4xl font-medium mb-4 text-balance">
                {producto.model}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gama media premium con excelente cámara y batería de larga
                duración.
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-medium text-[#6366F1]">
                ${producto.price}
              </span>
            </div>

            <hr className="bg-border" />
            {/* Especificaciones */}

            <div className="space-y-3">
              <h3 className="font-medium">Especificaciones</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Almacenamiento
                  </p>
                  <p className="font-medium">{producto.internal_memory}GB</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">RAM</p>
                  <p className="font-medium">{producto.ram_capacity}RAM</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Pantalla</p>
                  <p className="font-medium">{producto.screen_size} `&quot;`</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Batería</p>
                  <p className="font-medium">{producto.battery_capacity}mAh</p>
                </div>
              </div>
            </div>

            {/* Caracteristicas */}
            <div className="space-y-3">
              <h3 className="font-medium">Características</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#06B6D4]" />
                  <span className="text-sm">
                    Processador: {producto.processor_brand}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#06B6D4]" />
                  <span className="text-sm">
                    Cámara Frontal: {producto.num_front_cameras} de{" "}
                    {producto.primary_camera_front}MB
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#06B6D4]" />
                  <span className="text-sm">
                    Cámara Trasera: {producto.num_rear_cameras} de{" "}
                    {producto.primary_camera_rear}MB
                  </span>
                </li>
                {producto.has_5g && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#06B6D4]" />
                    <span className="text-sm">5G</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Stock */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm">
                <span className="font-medium">Stock disponible:</span> 12
                unidades
              </p>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button className="h-8 px-4 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium outline-none">
                    -
                  </button>
                  <span className="px-6 font-medium">0</span>
                  <button className="h-8 px-4 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium outline-none">
                    +
                  </button>
                </div>
                <button className="flex-1 bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-medium text-white border border-border h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al carrito
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#06B6D4]/10">
                  <Truck className="h-5 w-5 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Envío gratis</p>
                  <p className="text-xs text-muted-foreground">
                    En compras +$500
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#6366F1]/10">
                  <Shield className="h-5 w-5 text-[#6366F1]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Garantía oficial</p>
                  <p className="text-xs text-muted-foreground">12 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosByIdPage;
