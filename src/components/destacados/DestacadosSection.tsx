import { Phones } from "@/src/types/phones";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestacadosSection = ({
  titulo,
  subtitulo,
  productos,
  img,
}: {
  titulo: string;
  subtitulo: string;
  productos: Phones[];
  img: string;
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-medium mb-2">{titulo}</h2>
            <p className="text-muted-foreground">{subtitulo}</p>
          </div>
          <button className="text-[#6366F1] hover:text-[#8B5CF6]">
            <Link href="" className="flex items-center">
              Ver más <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <Link href="/" key={producto._id}>
              <div className=" group flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden border border-border hover:border-[#6366F1] transition-colors">
                <div className="p-0">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <Image
                      fill
                      sizes="{max-width:481px} {max-height: 481px}"
                      src={img}
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
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-medium text-[#6366F1]">
                        ${producto.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestacadosSection;
