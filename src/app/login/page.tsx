import Link from "next/link";
import { Phone, LogIn } from "lucide-react";
import Input from "@/src/components/Input";
import Label from "@/src/components/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/Card";
import Button from "@/src/components/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 py-12 px-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Phone className="h-8 w-8 text-[#6366F1]" />
            <span className="text-2xl font-medium">CellPhones</span>
          </Link>
          <h1 className="text-3xl font-medium mb-2">Iniciar sesión</h1>
          <p className="text-muted-foreground">
            Accede a tu cuenta para continuar
          </p>
        </div>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="leading-none font-semibold">
              Credenciales
            </CardTitle>
            <CardDescription>Ingresa tu email y contraseña</CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
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

              <Button
                type="submit"
                className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 px-4 py-2"
              >
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Iniciar sesión
                </>
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm font-medium mb-2">
                Credenciales de prueba:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  <strong>Usuario:</strong> user@example.com / user123
                </p>
                <p>
                  <strong>Admin:</strong> admin@cellphones.com / admin123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/"
            className="text-[#6366F1] hover:text-[#8B5CF6] font-medium"
          >
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
