"use client";

import Link from "next/link";
import { Phone, Moon, ShoppingCart, User, LogOut } from "lucide-react";
import { useApp } from "../context/UserContext";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { useRouter } from "next/navigation";
import { MobileMenu, MobileMenuContent, MobileMenuTrigger } from "./MobileMenu";

const Navbar = () => {
  const { currentUser, setCurrentUser, logout, isAdmin } = useApp();

  const router = useRouter();

  function handleLogout() {
    logout();
    setCurrentUser(null);
    router.push("/login");
  }

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/contacto", label: "Contacto" },
  ];

  const cartItemsCount = currentUser?.carrito.reduce(
    (count, item) => count + item.cantidad,
    0,
  );

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
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-normal"
              >
                {link.label}
              </Link>
            ))}

            {isAdmin() && (
              <Link
                href="/contacto"
                className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors font-medium"
              >
                Admin Panel
              </Link>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button className="h-9 w-9 hover:bg-gray-100">
              <Moon className="h-5 w-5" />
            </Button>
            <Button
              className="h-9 w-9 hover:bg-gray-100 relative"
              onClick={() => router.push("/carrito")}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount !== undefined && cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-[#6366F1] text-white text-xs flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="h-9 w-9">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {currentUser.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4 inline-flex" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex bg-[#6366F1] hover:bg-[#8B5CF6] text-white py-1 px-3 rounded-sm">
                <Link href="/login">Iniciar sesión</Link>
              </div>
            )}
            {/* Mobile Menu */}

            <MobileMenu>
              <MobileMenuTrigger className="md:hidden" />
              <MobileMenuContent>
                <div className="flex flex-col gap-4 mt-6 bg-white">
                  {navLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition-colors font-normal pl-2"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {isAdmin() && (
                    <Link
                      href="/contacto"
                      className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors font-medium pl-2"
                    >
                      Admin Panel
                    </Link>
                  )}
                  {!currentUser && (
                    <Button
                      onClick={() => router.push("/login")}
                      className="py-3 px-28 mt-4 mx-auto bg-[#6366F1] hover:bg-[#8B5CF6] text-white"
                    >
                      Iniciar sesión
                    </Button>
                  )}
                </div>
              </MobileMenuContent>
            </MobileMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
