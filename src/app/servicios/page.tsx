import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce los servicios que ofrecemos, desde certificaciones de competencias hasta capacitación corporativa a la medida.',
};

const services = [
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: 'Certificación de Competencias',
    description: 'Evaluamos y certificamos tus habilidades y conocimientos con base en estándares nacionales e internacionales, otorgando validez oficial a tu talento.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Capacitación Corporativa',
    description: 'Diseñamos programas de formación a la medida de tu empresa para desarrollar el potencial de tus equipos y alcanzar sus objetivos estratégicos.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Consultoría Educativa',
    description: 'Ofrecemos asesoría especializada a instituciones educativas para la innovación de sus modelos pedagógicos, curriculares y de gestión.',
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Nuestros Servicios</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Soluciones integrales para el desarrollo del talento humano y la transformación organizacional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <div className="text-center sm:text-left">
                  <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-center sm:text-left text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
