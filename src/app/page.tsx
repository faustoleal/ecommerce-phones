import { ArrowRight, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-5 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-white/20 text-white border-0 py-1 px-3 rounded-xl text-sm mb-6 inline-block">
                Nuevos Lanzamientos 2025
              </span>
              <h1 className="text-4xl md:text-6xl font-medium leading-tight text-balance">
                Los mejores smartphones del mercado
              </h1>
              <p className="text-lg text-white/90 leading-relaxed text-pretty">
                Descubre nuestra colección exclusiva de celulares de las marcas
                más reconocidas. Calidad garantizada y envío gratis.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#6366F1] hover:bg-white/90 font-medium py-2 px-4 rounded-md">
                  <Link href="/" className="inline-flex items-center">
                    Ver todos los productos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </button>
                <button className="border-1 border-white text-white hover:bg-white/10 hover:text-white bg-transparent py-2 px-4 rounded-md">
                  <Link href="/">Contactar</Link>
                </button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <Image
                width="100"
                height="100"
                src="/modern-smartphone-hero-display.jpg"
                alt="Hero smartphones"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#6366F1]/10">
                <Zap className="h-6 w-6 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Última Tecnología</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Los dispositivos más avanzados con las últimas innovaciones
                  del mercado.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#06B6D4]/10">
                <Shield className="h-6 w-6 text-[#06B6D4]" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Garantía Oficial</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Todos nuestros productos incluyen garantía del fabricante.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#8B5CF6]/10">
                <Truck className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Envío Gratuito</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Envío gratis en todas las compras mayores a $500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ver productos section */}
      <section className="py-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-balance">
            ¿Listo para encontrar tu smartphone ideal?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Explora nuestro catálogo completo con las mejores marcas
          </p>
          <button className="bg-white text-[#6366F1] hover:bg-white/90 font-medium px-4 py-2 rounded-md">
            <Link href="/" className="flex items-center">
              Ver todos los productos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
