import Card from "@/src/components/Card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Contacto;
