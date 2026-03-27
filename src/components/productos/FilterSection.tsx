"use client";

import Label from "../ui/Label";
import Button from "../ui/Button";
import { Brands } from "@/src/types/phones";
import React, { SetStateAction, useState } from "react";
import { Filtros } from "../views/ProductosPage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

interface FilterSectionProps {
  filters: Filtros;
  setFilters: React.Dispatch<SetStateAction<Filtros>>;
}

type FilterKeyBoolean = "has5g" | "extendedMemory" | "fastCharging";

type FilterKeyNumber = "ramCapacity" | "internalMemory";

type FilterKeyCameras = "primaryCameraFront" | "primaryCameraRear";

type Range = { label: string; min: number; max: number };

interface FilterKeyNumberOption {
  key: FilterKeyNumber;
  label: string;
  array: number[];
}

interface FilterKeyCamerasOption {
  key: FilterKeyCameras;
  label: string;
  array: Range[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  setFilters,
}) => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggleOpen = (key: string) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  const extrasFilterLabel: Record<FilterKeyBoolean, string> = {
    has5g: "5G",
    extendedMemory: "Extención de memoria",
    fastCharging: "Carga rápida",
  };

  const filterKeyOptions: FilterKeyNumberOption[] = [
    { key: "ramCapacity", label: "RAM", array: [1, 2, 3, 4, 6, 8, 12, 16] },
    {
      key: "internalMemory",
      label: "Memoria interna",
      array: [16, 32, 64, 128, 256, 512, 1024],
    },
  ];

  const filterCamerasOptions: FilterKeyCamerasOption[] = [
    {
      key: "primaryCameraFront",
      label: "Cámara Frontal",
      array: [
        { label: "Mayor a 2MB < 16MB", min: 2, max: 16 },
        { label: "Mayor a 16MB < 32GB", min: 16, max: 32 },
        { label: "Mayor de 32GB", min: 32, max: 60 },
      ],
    },
    {
      key: "primaryCameraRear",
      label: "Cámara Trasera",
      array: [
        { label: "Mayor a 5MB < 13MB", min: 5, max: 13 },
        { label: "Mayor de 13MB < 50MB", min: 13, max: 50 },
        { label: "Mayor de 50MB", min: 50, max: 200 },
      ],
    },
  ];

  const handleBrandChange = (brand: string, checked: boolean) => {
    setFilters((prev) => {
      const currentBrands = prev.brands || [];
      const newBrands = checked
        ? [...currentBrands, brand]
        : currentBrands.filter((b) => b !== brand);
      return { ...prev, brands: newBrands };
    });
  };

  const handleMaxPriceChange = (newMaxPrice: number) => {
    setFilters((prev) => ({ ...prev, maxPrice: newMaxPrice }));
  };

  const handleRamAndMemoryChange = (key: FilterKeyNumber, value: number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setOpen(null);
  };

  const handleCamerasChange = (
    key: FilterKeyCameras,
    range: Range,
    checked: boolean,
  ) => {
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        [key]: { min: range.min, max: range.max },
      }));
    }
  };

  const handleExtrasChange = (key: FilterKeyBoolean, checked: boolean) => {
    setFilters((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="space-y-6">
      {/* Marcas */}
      <div className="space-y-3">
        <Label className="font-medium">Marca</Label>
        {Object.values(Brands).map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <input
              id={brand}
              type="checkbox"
              checked={filters.brands?.includes(brand) || false}
              onChange={(e) => handleBrandChange(brand, e.target.checked)}
            />
            <Label htmlFor={brand} className="capitalize">
              {brand}
            </Label>
          </div>
        ))}
      </div>

      {/* Precio */}
      <div className="space-y-3">
        <Label htmlFor="price" className="font-medium">
          {`Precio: $0 - $${filters.maxPrice || 3000}`}
        </Label>
        <input
          id="price"
          type="range"
          min={0}
          max={3000}
          step={50}
          value={filters.maxPrice || 3000}
          onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
          className="flex w-full touch-none items-center select-none py-2 bg-black"
        />
      </div>

      {/* RAM  & MEMORIA INTERNA*/}
      {Object.values(filterKeyOptions).map(({ key, label, array }) => (
        <div className="space-y-2" key={key}>
          <Label htmlFor={key}>{label}</Label>
          <Select>
            <SelectTrigger
              className="w-full"
              onClick={() => handleToggleOpen(key)}
            >
              <SelectValue>
                {!filters[key] ? "Seleccionar uno" : `${filters[key]}GB`}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className={open === key ? "w-[140px]" : "hidden"}>
              {array.map((num, i) => (
                <SelectItem key={i}>
                  <span
                    onClick={() => handleRamAndMemoryChange(key, Number(num))}
                  >{`${num}GB`}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      {/* Cámara Frontal & Cámara Trasera */}
      {Object.values(filterCamerasOptions).map(({ key, label, array }) => (
        <div className="space-y-3" key={key}>
          <Label className="font-medium">{label}</Label>
          {array.map((range, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input
                id={range.label}
                type="checkbox"
                checked={
                  filters[key]?.min === range.min &&
                  filters[key]?.max === range.max
                }
                onChange={(e) =>
                  handleCamerasChange(key, range, e.target.checked)
                }
              />
              <Label htmlFor={range.label}>{range.label}</Label>
            </div>
          ))}
        </div>
      ))}

      {/* Extras*/}
      <div className="space-y-3">
        <Label className="font-medium">Extras</Label>
        {Object.values(extrasFilterLabel).map((key) => {
          const typedKey = key as FilterKeyBoolean;
          return (
            <div key={typedKey} className="flex items-center space-x-2">
              <input
                id={typedKey}
                type="checkbox"
                checked={filters[typedKey] || false}
                onChange={(e) => handleExtrasChange(typedKey, e.target.checked)}
              />
              <Label htmlFor={typedKey}>{typedKey}</Label>
            </div>
          );
        })}
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
