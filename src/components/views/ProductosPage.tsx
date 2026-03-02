import FilterSection from "@/src/components/productos/FilterSection";
import PhoneSection from "@/src/components/productos/PhoneSection";
import { Filter } from "lucide-react";

const ProductosPage = () => {
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
              <FilterSection />
            </div>
          </aside>
          <PhoneSection />
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
