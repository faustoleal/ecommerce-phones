import { ArrowRight } from "lucide-react";
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
                <button className="bg-white text-[#6366F1] hover:bg-white/90 font-medium py-2 px-4 rounded-xl">
                  <Link href="/" className="inline-flex items-center">
                    Ver todos los productos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </button>
                <button className="border-1 border-white text-white hover:bg-white/10 hover:text-white bg-transparent py-2 px-4 rounded-xl">
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
    </div>
  );
}
