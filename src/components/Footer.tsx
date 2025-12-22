import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-black">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info de la companía */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5 text-[#6366F1]" />
              <span className="text-lg font-mediun text-white">Cellphones</span>
            </div>
            <p className="text-sm text-white mb-4">
              Tu tienda de confianza para los mejores smartphones del mercado.
            </p>
            <div className="flex gap-3">
              <Link href="/" className="text-white">
                <Facebook />
              </Link>
              <Link href="/" className="text-white">
                <Instagram />
              </Link>
              <Link href="/" className="text-white">
                <Twitter />
              </Link>
            </div>
          </div>
          {/* Enlaces */}
          <div>
            <h3 className="text-white font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          {/* Contacto */}
          <div>
            <h3 className="text-white font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#6366F1] mt-0.5" />
                <span className="text-sm text-white">
                  Av. Principal 123, Ciudad
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#6366F1]" />
                <span className="text-sm text-white">+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#6366F1]" />
                <span className="text-sm text-white">info@cellphones.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t  mt-8 pt-8 text-center">
          <p className="text-sm text-white">
            © 2025 CellPhones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
