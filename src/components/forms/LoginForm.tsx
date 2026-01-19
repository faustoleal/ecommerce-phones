"use client";

import { LogIn } from "lucide-react";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import React, { useState } from "react";
import { useApp } from "@/src/context/UserContext";
import { useToast } from "@/src/context/ToastContext";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { login } = useApp();
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await login({ email, password });
      if (user) {
        toast({
          variant: "success",
          title: "Inicio de sesión exitoso",
          description: `Bienvenido, ${user.name}`,
        });
      } else {
        toast({
          variant: "error",
          title: "Error de autenticación",
          description: "Credenciales incorrectas. Por favor, intenta de nuevo.",
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: "error",
        title: "Error",
        description: "Ocurrió un error al iniciar sesión.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          required
          className="border-[#E3E6EA]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 px-4 py-2"
      >
        <>
          {loading ? (
            "Iniciando sesión..."
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              Iniciar sesión
            </>
          )}
        </>
      </Button>
    </form>
  );
};

export default LoginForm;
