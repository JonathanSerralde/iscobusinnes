import { ContactForm } from '@/components/contacto/contact-form';
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con Ibérica. Visítanos en Puebla, Córdoba o Ciudad de México. Estamos para ayudarte con capacitación y certificación.',
};

const sedes = [
  {
    ciudad: 'Puebla',
    direccion: 'Avenida Orión Sur 733-2 Esquina Calle Mira, Colonia Villa Floresta C.P. 72825, San Andrés Cholula, Pué.',
    mapSrc: 'https://maps.google.com/maps?q=19.027601%2C-98.2551329&z=17&hl=es&output=embed',
    mapLink: 'https://maps.google.com/maps?q=19.027601%2C-98.2551329&z=17&hl=es',
  },
  {
    ciudad: 'Córdoba',
    direccion: 'Avenida 15 Num 1307 entre Calles 13 y 15, Fraccionamiento Guadalupe, C.P. 94590, Córdoba, Ver.',
    mapSrc: 'https://maps.google.com/maps?q=18.8866638%2C-96.9348421&z=17&hl=es&output=embed',
    mapLink: 'https://maps.google.com/maps?q=18.8866638%2C-96.9348421&z=17&hl=es',
  },
  {
    ciudad: 'Ciudad de México',
    direccion: 'José María Mestre 186, Tlalpan, 14260 Ciudad de México, CDMX',
    mapSrc: 'https://maps.google.com/maps?q=Jos%C3%A9+Mar%C3%ADa+Mestre+186%2C+Tlalpan%2C+14260+Ciudad+de+M%C3%A9xico&z=17&hl=es&output=embed',
    mapLink: 'https://www.google.com.mx/maps/place/CONAEC+NeuroIntegra/data=!4m2!3m1!1s0x0:0x5787cd3b9a8fc6fa?sa=X&ved=1t:2428&ictx=111',
  },
];

const telefonos = [
  { display: '222 105 0550', href: 'tel:+522221050550' },
  { display: '222 999 9497', href: 'tel:+522229999497' },
];

export default function ContactoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Contacto</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Estamos listos para escucharte. Visítanos en cualquiera de nuestras sedes o envíanos un mensaje.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Formulario */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-headline mb-6 text-primary">Envíanos un Mensaje</h2>
            <ContactForm />
          </div>

          {/* Info de contacto */}
          <div className="space-y-6">
            {/* Teléfonos y Email */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-headline mb-6 text-primary">Información de Contacto</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Teléfonos</h4>
                      <div className="space-y-1">
                        {telefonos.map(tel => (
                          <a key={tel.display} href={tel.href} className="block text-muted-foreground hover:text-primary transition-colors">
                            {tel.display}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a href="mailto:contacto@iberica.mx" className="text-muted-foreground hover:text-primary transition-colors">
                        contacto@iberica.mx
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Horario de Atención</h4>
                      <p className="text-muted-foreground">Lunes a viernes: 8:00 – 18:00 hrs</p>
                      <p className="text-muted-foreground">Sábados: 8:00 – 14:00 hrs</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sedes */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-primary mb-10">Nuestras Sedes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sedes.map(sede => (
              <Card key={sede.ciudad} className="shadow-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <iframe
                    src={sede.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de sede ${sede.ciudad}`}
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-headline font-bold text-lg text-primary">{sede.ciudad}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{sede.direccion}</p>
                      <a
                        href={sede.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                      >
                        Ver en Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

