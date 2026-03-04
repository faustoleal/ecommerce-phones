import Link from "next/link";
import { Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../display/Card";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
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
            <LoginForm />
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
            href="/register"
            className="text-[#6366F1] hover:text-[#8B5CF6] font-medium"
          >
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
