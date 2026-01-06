import Card from "@/src/components/Card";
import Input from "@/src/components/Input";
import Label from "@/src/components/Label";
import Textaerea from "@/src/components/Textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const Contacto = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-5">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-medium mb-4">Contáctanos</h1>
          <p className="text-lg  max-w-2xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta o consulta? Estamos aquí para ayudarte
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contacto Info */}
          <section className="space-y-6">
            <Card
              icon={<Phone className="h-6 w-6 text-[#6366F1]" />}
              title="Teléfono"
              info={["+1 234 567 890", "+1 234 567 891"]}
            />
            <Card
              icon={<Mail className="h-6 w-6 text-[#06B6D4]" />}
              title="Email"
              info={["info@cellphones.com", "support@cellphones.com"]}
            />
            <Card
              icon={<MapPin className="h-6 w-6 text-[#8B5CF6]" />}
              title="Dirreción"
              info={["Av. Principal 123", "Ciudad, País 12345"]}
            />
            <Card
              icon={<Clock className="h-6 w-6 text-[#DF3F40]" />}
              title="Horario"
              info={[
                "Lunes - Viernes: 9:00 - 18:00",
                "Sábado: 10:00 - 14:00",
                "Domingo: Cerrado",
              ]}
            />
          </section>
          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6 border p-6 rounded-xl shadow-sm">
              <h2 className="py-2 font-semibold">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">
                      Nombre completo:
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
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
                    rows={6}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex align-center py-2 items-center justify-center w-full bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-sm rounded-md"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Te responderemos dentro de las próximas 24 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
