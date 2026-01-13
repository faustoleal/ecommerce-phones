import Link from "next/link";
import { Phone, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/Card";
import Label from "@/src/components/Label";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 py-12 px-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Phone className="h-8 w-8 text-[#6366F1]" />
            <span className="text-2xl font-medium">CellPhones</span>
          </Link>
          <h1 className="text-3xl font-medium mb-2">Crear cuenta</h1>
          <p className="text-muted-foreground">
            Regístrate para comenzar a comprar
          </p>
        </div>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Registro</CardTitle>
            <CardDescription>
              Completa los datos para crear tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  className="border-[#E3E6EA]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="border-[#E3E6EA]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="border-[#E3E6EA]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="border-[#E3E6EA]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 px-4 py-2"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Crear cuenta
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                Al crear una cuenta, aceptas nuestros términos y condiciones de
                servicio.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="text-[#6366F1] hover:text-[#8B5CF6] font-medium"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
