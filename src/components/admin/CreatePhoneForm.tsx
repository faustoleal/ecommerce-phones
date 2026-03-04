"use client";

import { Brands, NewProduct, Os, Phone, Processor } from "@/src/types/phones";
import React, { SetStateAction, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../display/Card";
import Button from "../ui/Button";
import { ProductosState } from "../views/AdminPage";
import { useToast } from "@/src/context/ToastContext";
import { crearProducto } from "@/src/services/phonesService";

interface CreatePhoneFormProps {
  productos: Phone[];
  setProductos: React.Dispatch<SetStateAction<ProductosState>>;
}

interface PhoneForm {
  model: string;
  brand_name: string;
  price: string;
  stock: string;
  rating: string;
  processor_brand: string;
  processor_speed: string;
  num_cores: string;
  os: string;
  internal_memory: string;
  ram_capacity: string;
  extended_memory_available: string;
  screen_size: string;
  resolution_width: string;
  resolution_height: string;
  battery_capacity: string;
  fast_charging_available: string;
  num_front_cameras: string;
  primary_camera_front: string;
  num_rear_cameras: string;
  primary_camera_rear: string;
  has_5g: string;
  has_nfc: string;
  has_ir_blaster: string;
}

const initialForm: PhoneForm = {
  model: "",
  brand_name: "",
  price: "0",
  stock: "0",
  rating: "0",
  processor_brand: "",
  processor_speed: "0",
  num_cores: "0",
  os: "",
  internal_memory: "0",
  ram_capacity: "0",
  extended_memory_available: "true",
  screen_size: "0",
  resolution_width: "0",
  resolution_height: "0",
  battery_capacity: "0",
  fast_charging_available: "true",
  num_front_cameras: "0",
  primary_camera_front: "0",
  num_rear_cameras: "0",
  primary_camera_rear: "0",
  has_5g: "true",
  has_nfc: "true",
  has_ir_blaster: "true",
};

const CreatePhoneForm: React.FC<CreatePhoneFormProps> = ({
  productos,
  setProductos,
}) => {
  const [form, setForm] = useState<PhoneForm>(initialForm);
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const brands: Brands[] = Object.values(Brands) as Brands[];
  const processors: Processor[] = Object.values(Processor) as Processor[];
  const os: Os[] = Object.values(Os) as Os[];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function mapFormToPhone(form: PhoneForm): NewProduct {
    return {
      model: form.model,
      brand_name: form.brand_name as Brands,
      price: Number(form.price),
      stock: Number(form.stock),
      rating: Number(form.rating),
      processor_brand: form.processor_brand as Processor,
      processor_speed: Number(form.processor_speed),
      num_cores: Number(form.num_cores),
      os: form.os as Os,
      internal_memory: Number(form.internal_memory),
      ram_capacity: Number(form.ram_capacity),
      extended_memory_available: form.extended_memory_available === "true",
      screen_size: Number(form.screen_size),
      resolution_width: Number(form.resolution_width),
      resolution_height: Number(form.resolution_height),
      battery_capacity: Number(form.battery_capacity),
      fast_charging_available: form.fast_charging_available === "true",
      num_front_cameras: Number(form.num_front_cameras),
      primary_camera_front: Number(form.primary_camera_front),
      num_rear_cameras: Number(form.num_rear_cameras),
      primary_camera_rear: Number(form.primary_camera_rear),
      has_5g: form.has_5g === "true",
      has_nfc: form.has_nfc === "true",
      has_ir_blaster: form.has_ir_blaster === "true",
    };
  }

  async function createNewPhone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPhone: NewProduct = mapFormToPhone(form);
    try {
      const user = await crearProducto(newPhone);
      if (user) {
        toast({
          variant: "success",
          title: "Creacion existosa:",
          description: `Agregaste este item ${form.model}`,
        });
      } else {
        toast({
          variant: "error",
          title: "Error:",
          description: "Ocurrió un error al agregar nuevo celular.",
        });
      }
    } catch (err: unknown) {
      let errMsg = "Error al crear nuevo celular, revise los datos.";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Datos inválidos:",
        description: errMsg,
      });

      setForm(initialForm);
    } finally {
      setLoading(false);
    }
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
          <form className="space-y-4" onSubmit={createNewPhone}>
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
                  name="brand_name"
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
                  value={form.stock}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
              {loading ? "...agregando Producto" : "Agregar Producto"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePhoneForm;
