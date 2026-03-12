"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../display/Card";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Textaerea from "../ui/Textarea";
import Button from "../ui/Button";
import { Send } from "lucide-react";
import { useToast } from "@/src/context/ToastContext";
import { enviarConsulta } from "@/src/services/contactoService";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  async function handleSendEmail(e: React.SubmitEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const sendEmail = await enviarConsulta({ name, email, phone, body });

      if (sendEmail) {
        toast({
          variant: "success",
          title: "Mail enviado",
          description: `${name}, será contactado en la brevedad.`,
        });
      }
    } catch (err: unknown) {
      let errMsg = "Ocurrió un error al enviar su email.";

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
      setName("");
      setEmail("");
      setPhone("");
      setBody("");
    }
  }

  return (
    <div className="lg:col-span-2">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>Envíanos un mensaje</CardTitle>
        </CardHeader>
        <CardContent className="px-6">
          <form className="space-y-6" onSubmit={handleSendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium">
                  Nombre completo:
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email:
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono" className="font-medium">
                Teléfono:
              </Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+54 9 011-12345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensaje" className="font-medium">
                Mensaje
              </Label>
              <Textaerea
                id="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white h-10 rounded-md px-6"
            >
              <Send className="mr-2 h-5 w-5" />
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Te responderemos dentro de las próximas 24 horas
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
