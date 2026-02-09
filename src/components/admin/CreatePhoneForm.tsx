import { Brands, Os, Phone, Processor } from "@/src/types/phones";
import { SetStateAction } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../Card";
import Button from "../Button";

interface CreatePhoneFormProps {
  productos: Phone[];
  setProductos: React.Dispatch<SetStateAction<Phone[]>>;
}

const CreatePhoneForm: React.FC<CreatePhoneFormProps> = ({
  productos,
  setProductos,
}) => {
  const brands: Brands[] = Object.values(Brands) as Brands[];
  const processors: Processor[] = Object.values(Processor) as Processor[];
  const os: Os[] = Object.values(Os) as Os[];

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
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="iPhone 15 Pro"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Marca</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  {brands.map((b, i) => (
                    <option key={i}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Precio, raiting y stock */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Precio</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="999"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Stock</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Raiting</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="1-100"
                />
              </div>
            </div>

            {/* Procesador */}

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Procesador</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  {processors.map((p, i) => (
                    <option key={i}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Velocidad</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="3.22"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Cantidad de núcleos
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="6"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sistema Operativo</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  {os.map((o, i) => (
                    <option key={i}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Memoria */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Almacenamiento</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="256GB"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">RAM</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="8GB"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Extención de memoria
                </label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
            </div>

            {/* Pantalla */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Pantalla</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="6.7"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución(Ancho)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="1080"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución(Alto)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="2400"
                />
              </div>
            </div>

            {/* Cámara Frontal */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cámaras Frontales</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="16"
                />
              </div>
            </div>

            {/* Cámara Traseras */}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cámaras Traseras</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolución</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  placeholder="50"
                />
              </div>
            </div>

            {/* Extras */}

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">5G</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">NFC</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">IR Blaster</label>
                <select className="w-full px-3 py-2 border border-[#E3E6EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>true</option>
                  <option>false</option>
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
