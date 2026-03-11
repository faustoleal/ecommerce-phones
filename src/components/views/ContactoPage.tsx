import { Card, CardContent } from "../display/Card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../forms/ContactForm";

const ContactoPage = () => {
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
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#6366F1]/10 rounded-lg">
                    <Phone className="h-6 w-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 234 567 890
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +1 234 567 891
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                    <Mail className="h-6 w-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@cellphones.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      support@cellphones.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#8B5CF6]/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground">
                      Av. Principal 123
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ciudad, País 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#DF3F40]/10 rounded-lg">
                    <Clock className="h-6 w-6 text-[#DF3F40]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horario</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes - Viernes: 9:00 - 18:00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sábado: 10:00 - 14:00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Formulario */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
