"use client";

import { Brands, Os, Phone, Processor } from "@/src/types/phones";
import React, { SetStateAction, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../Card";
import Button from "../Button";
import { ProductosState } from "./AdminPage";

interface CreatePhoneFormProps {
  productos: Phone[];
  setProductos: React.Dispatch<SetStateAction<ProductosState>>;
}

const CreatePhoneForm: React.FC<CreatePhoneFormProps> = ({
  productos,
  setProductos,
}) => {
  const [form, setForm] = useState({
    model: "",
    brand_name: "",
    price: 0,
    rating: 0,
    processor_brand: "",
    processor_speed: 0,
    num_cores: 0,
    os: "",
    internal_memory: 0,
    ram_capacity: 0,
    extended_memory_available: "true",
    screen_size: 0,
    resolution_width: 0,
    resolution_height: 0,
    battery_capacity: 0,
    fast_charging_available: "true",
    num_front_cameras: 0,
    primary_camera_front: 0,
    num_rear_cameras: 0,
    primary_camera_rear: 0,
    has_5g: "true",
    has_nfc: "true",
    has_ir_blaster: "true",
  });

  const brands: Brands[] = Object.values(Brands) as Brands[];
  const processors: Processor[] = Object.values(Processor) as Processor[];
  const os: Os[] = Object.values(Os) as Os[];

  function toBoolean(value: string): boolean {
    return value.toLowerCase() === "true";
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="text-sm flex-1 outline-none">
      <Card className="border border-border max-w-2xl">
        <CardHeader>
          <CardTitle>Agregar Nuevo Producto</CardTitle>
          <CardDescription>
            Completa el formulario para añadir un producto al catálogo
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4">
          <form className="space-y-4">
            {/* Nombre y marca */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Nombre del Producto
                </label>
                <input
                  name="model"
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.model}
                  onChange={handleChange}
                  placeholder="iPhone 15 Pro"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Marca</label>
                <select
                  name="brand-name"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.brand_name}
                  onChange={handleChange}
                >
                  {brands.map((b, i) => (
                    <option key={i} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Precio, rating y stock */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Precio</label>
                <input
                  name="price"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="999"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Stock</label>
                <input
                  name="stock"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Rating</label>
                <input
                  name="rating"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.rating}
                  onChange={handleChange}
                  placeholder="1-100"
                />
              </div>
            </div>

            {/* Procesador */}

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Procesador</label>
                <select
                  name="processor_brand"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.processor_brand}
                  onChange={handleChange}
                >
                  {processors.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Velocidad</label>
                <input
                  name="processor_speed"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.processor_speed}
                  onChange={handleChange}
                  placeholder="3.22"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Cantidad de núcleos
                </label>
                <input
                  name="num_cores"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.num_cores}
                  onChange={handleChange}
                  placeholder="6"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sistema Operativo</label>
                <select
                  name="os"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.os}
                  onChange={handleChange}
                >
                  {os.map((o, i) => (
                    <option key={i} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Memoria */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Almacenamiento</label>
                <input
                  name="internal_memory"
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.internal_memory}
                  onChange={handleChange}
                  placeholder="256GB"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">RAM</label>
                <input
                  name="ram_capacity"
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.ram_capacity}
                  onChange={handleChange}
                  placeholder="8GB"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Extención de memoria
                </label>
                <select
                  name="extended_memory_available"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.extended_memory_available}
                  onChange={handleChange}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>

            {/* Pantalla */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Pantalla</label>
                <input
                  name="screen_size"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.screen_size}
                  onChange={handleChange}
                  placeholder="6.7"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución(Ancho)</label>
                <input
                  name="resolution_width"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.resolution_width}
                  onChange={handleChange}
                  placeholder="1080"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución(Alto)</label>
                <input
                  name="resolution_height"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.resolution_height}
                  onChange={handleChange}
                  placeholder="2400"
                />
              </div>
            </div>

            {/* Bateria */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Capacidad de la Batería
                </label>
                <input
                  name="battery_capacity"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.battery_capacity}
                  onChange={handleChange}
                  placeholder="2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Carga rápida</label>
                <select
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  name="fast_charging_available"
                  value={form.fast_charging_available}
                  onChange={handleChange}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>

            {/* Cámara Frontal */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cámaras Frontales</label>
                <input
                  name="num_front_cameras"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.num_front_cameras}
                  onChange={handleChange}
                  placeholder="2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución</label>
                <input
                  name="primary_camera_front"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.primary_camera_front}
                  placeholder="16"
                />
              </div>
            </div>

            {/* Cámara Traseras */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cámaras Traseras</label>
                <input
                  name="num_rear_cameras"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.num_rear_cameras}
                  onChange={handleChange}
                  placeholder="3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución</label>
                <input
                  name="primary_camera_rear"
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={form.primary_camera_rear}
                  onChange={handleChange}
                  placeholder="50"
                />
              </div>
            </div>

            {/* Extras */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">5G</label>
                <select
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  name="has_5g"
                  value={form.has_5g}
                  onChange={handleChange}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">NFC</label>
                <select
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  name="has_nfc"
                  value={form.has_nfc}
                  onChange={handleChange}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">IR Blaster</label>
                <select
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  name="has_ir_blaster"
                  value={form.has_ir_blaster}
                  onChange={handleChange}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-medium h-8 gap-1.5 px-2.5"
            >
              Agregar Producto
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePhoneForm;
