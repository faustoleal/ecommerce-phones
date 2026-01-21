"use client";

import { UserPlus } from "lucide-react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import React, { useState } from "react";
import { useToast } from "@/src/context/ToastContext";
import { registrarUsuario } from "@/src/services/userService";
import { useRouter } from "next/navigation";

const CreateAccountForm = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (password.length < 6) {
        toast({
          variant: "error",
          title: "Error",
          description: "La contraseña debe tener al menos 6 caracteres.",
        });
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        toast({
          variant: "error",
          title: "Error",
          description: "Las contraseñas no coinciden.",
        });
        setLoading(false);
        return;
      }

      await registrarUsuario({ name, username, email, password, role: "user" });

      toast({
        variant: "success",
        title: "Cuenta creada exitosamente",
        description: "Tu cuenta ha sido creada. Puedes iniciar sesión ahora.",
      });

      router.push("/login");
    } catch (err: unknown) {
      let errMsg = "Ocurrió un error al crear la cuenta";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Error",
        description: errMsg,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          type="text"
          placeholder="Juan Pérez"
          required
          className="border-[#E3E6EA]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nombre de usuario</Label>
        <Input
          id="username"
          type="text"
          placeholder="Juanpe1"
          required
          className="border-[#E3E6EA]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          required
          className="border-[#E3E6EA]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-9 px-4 py-2"
      >
        {loading ? (
          "Creando cuenta..."
        ) : (
          <>
            <UserPlus className="mr-2 h-4 w-4" />
            Crear cuenta
          </>
        )}
      </Button>
    </form>
  );
};

export default CreateAccountForm;
