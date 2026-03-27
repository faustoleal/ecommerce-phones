"use client";

import { useEffect, useState } from "react";
import FilterSection from "../productos/FilterSection";
import PhoneSection from "../productos/PhoneSection";
import { Filter } from "lucide-react";
import { fetchProductos } from "@/src/services/phonesService";
import { Phone } from "@/src/types/phones";

export interface ProductosState {
  page: number;
  totalPages: number;
  totalPhones: number;
  totalFilter: number;
  products: Phone[];
}

export interface Filtros {
  brands?: string[];
  maxPrice?: number;
  fastCharging?: boolean;
  ramCapacity?: number;
  primaryCameraRear?: { min: number; max: number };
  primaryCameraFront?: { min: number; max: number };
  extendedMemory?: boolean;
  internalMemory?: number;
  has5g?: boolean;
}

const ProductosPage = () => {
  const [productos, setProductos] = useState<ProductosState>({
    page: 0,
    totalPages: 0,
    totalPhones: 0,
    totalFilter: 0,
    products: [],
  });
  const [filters, setFilters] = useState<Filtros>({});
  const [page, setPage] = useState<number>(1);

  const serializeFilters = (
    filters: Filtros,
    page: number,
  ): URLSearchParams => {
    const params = new URLSearchParams();

    params.set("page", String(page));

    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else if (typeof value === "object") {
        const { min, max } = value as { min: number; max: number };
        params.set(key, `${min},${max}`);
      } else {
        params.set(key, String(value));
      }
    });

    return params;
  };

  useEffect(() => {
    const params = serializeFilters(filters, page);
    const queryString = params.toString();

    window.history.pushState({}, "", `?${queryString}`);

    fetchProductos(page, queryString)
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.log(error));
  }, [page, filters]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-5">
        <div className="mb-8">
          <h1 className="text-4xl font-medium mb-2">Todos los productos</h1>
          <p>Encontramos 00 productos</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filtro */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6 p-6 border rounded-lg">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Filtros</h2>
                <Filter className="h-4 w-4" />
              </div>
              <FilterSection filters={filters} setFilters={setFilters} />
            </div>
          </aside>
          <PhoneSection productos={productos} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
