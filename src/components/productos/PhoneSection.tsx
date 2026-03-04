"use client";

import { fetchProductos } from "@/src/services/phonesService";
import { useEffect, useState } from "react";
import PhoneList from "./PhoneList";
import { ProductosState } from "../views/AdminPage";

const PhoneSection = () => {
  const [productos, setProductos] = useState<ProductosState>({
    page: 0,
    totalPages: 0,
    totalPhones: 0,
    products: [],
  });
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchProductos(page)
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <section className="lg:col-span-3 space-y-6">
      {productos.products.length > 0 ? (
        <PhoneList productos={productos} setPage={setPage} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No se encontraron productos
          </p>
          <button className="bg-black text-white border border-border h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none">
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
};

export default PhoneSection;
