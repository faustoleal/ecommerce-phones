import Link from "next/link";
import { Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/Card";
import CreateAccountForm from "@/src/components/forms/CreateAccountForm";

const RegisterPage = () => {
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
            <CreateAccountForm />
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

export default RegisterPage;
