import Link from "next/link";
import { Phone, Moon, ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b  bg-black">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-[#6366F1]" />
            <span className="text-xl font-medium  text-white">CellPhones</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href={"/"} className="text-white font-normal">
              Inicio
            </Link>
            <Link href={"/"} className="text-white font-normal">
              Productos
            </Link>
            <Link href={"/"} className="text-white font-normal">
              Contacto
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <Moon className="h-5 w-5 text-white" />
            </div>
            <div>
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:flex bg-[#6366F1] hover:bg-[#8B5CF6] text-white py-1 px-3 rounded-sm">
              Iniciar sesión
            </div>
            <div className="md:hidden">
              <Menu className="h5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
