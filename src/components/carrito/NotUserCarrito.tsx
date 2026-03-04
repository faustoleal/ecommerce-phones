import { ShoppingBag } from "lucide-react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const NotUserCarrito = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-md px-5">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-medium mb-4">
          No tienes accesos al carrito
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Inicia sesión para tener acceso al carrito
        </p>
        <Button
          onClick={() => router.push("/login")}
          className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 gap-1.5 px-2.5"
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};

export default NotUserCarrito;
