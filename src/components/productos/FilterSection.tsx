import { Search } from "lucide-react";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";

const FilterSection = () => {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search" className="font-medium">
          Buscar
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Buscar productos..."
            className="pl-9"
          />
        </div>
      </div>
      {/* Marcas */}
      <div className="space-y-3">
        <Label className="font-medium">Marca</Label>
        <div className="flex items-center space-x-2">
          <input id="apple" type="checkbox" />
          <Label htmlFor="apple">Apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input id="samsung" type="checkbox" />
          <Label htmlFor="samsung">Samsung</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input id="vivo" type="checkbox" className=" py-1 px-3" />
          <Label htmlFor="vivo">Vivo</Label>
        </div>
      </div>
      {/* Precio */}
      <div className="space-y-3">
        <Label htmlFor="price" className="font-medium">
          Precio: $0 - $3000
        </Label>
        <input
          id="price"
          type="range"
          min={0}
          max={3000}
          step={50}
          className="flex w-full touch-none items-center select-none py-2 bg-black"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-transparent h-9 px-4 py-2 border border-border"
      >
        Limpiar filtros
      </Button>
    </div>
  );
};

export default FilterSection;
