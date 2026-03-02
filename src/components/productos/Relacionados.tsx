"use client";

import { fetchProductosRelacionados } from "@/src/services/phonesService";
import { Phone } from "@/src/types/phones";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../Card";
import Image from "next/image";

const Relacionados = ({ marca }: { marca: string }) => {
  const [productosRelacionados, setProductosRelacionados] = useState<
    Phone[] | undefined
  >(undefined);

  useEffect(() => {
    fetchProductosRelacionados(marca)
      .then(setProductosRelacionados)
      .catch((error) => console.log(error));
  }, [marca]);

  return (
    <>
      {productosRelacionados !== undefined && (
        <div>
          <h2 className="text-3xl font-medium mb-8">Productos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productosRelacionados.map((producto) => (
              <Link key={producto._id} href={`/productos/${producto._id}`}>
                <Card className="group overflow-hidden border border-border hover:border-[#6366F1] transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      <Image
                        fill
                        sizes="(max-width:481px) (max-height: 481px)"
                        src="/iphone-15-pro-max-titanium.png"
                        alt={producto.model}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium mb-1 text-balance">
                        {producto.model}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {producto.internal_memory}GB • {producto.ram_capacity}GB
                      </p>
                      <span className="text-2xl font-medium text-[#6366F1]">
                        ${producto.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Relacionados;
