import Link from "next/link";
import { Phone, Moon, ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-[#6366F1]" />
            <span className="text-xl font-medium text-foreground">
              CellPhones
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors font-normal"
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="text-foreground/80 hover:text-foreground transition-colors font-normal"
            >
              Productos
            </Link>
            <Link
              href="/contacto"
              className="text-foreground/80 hover:text-foreground transition-colors font-normal"
            >
              Contacto
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <Moon className="h-5 w-5" />
            </div>
            <div>
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div className="hidden md:flex bg-[#6366F1] hover:bg-[#8B5CF6] text-white py-1 px-3 rounded-sm">
              <Link href="/login">Iniciar sesión</Link>
            </div>
            <div className="md:hidden">
              <Menu className="h5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
