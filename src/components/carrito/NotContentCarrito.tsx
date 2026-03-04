import { ShoppingBag } from "lucide-react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const NotContentCarrito = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-md px-5">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-medium mb-4">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Agrega productos a tu carrito para comenzar a comprar
        </p>
        <Button
          onClick={() => router.push("/productos")}
          className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 gap-1.5 px-2.5"
        >
          Explorar productos
        </Button>
      </div>
    </div>
  );
};

export default NotContentCarrito;
