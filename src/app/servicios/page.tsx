import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Briefcase, Users, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce los servicios que ofrecemos, desde certificaciones de competencias hasta capacitación corporativa a la medida.',
};

const services = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Certificación de Competencias',
    slug: 'certificacion',
    description: 'Evaluamos y certificamos tus habilidades y conocimientos con base en estándares nacionales e internacionales, otorgando validez oficial a tu talento.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Capacitación Corporativa',
    slug: 'capacitacion-corporativa',
    description: 'Diseñamos programas de formación a la medida de tu empresa para desarrollar el potencial de tus equipos y alcanzar sus objetivos estratégicos.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Consultoría Educativa',
    slug: 'consultoria-educativa',
    description: 'Ofrecemos asesoría especializada a instituciones educativas para la innovación de sus modelos pedagógicos, curriculares y de gestión.',
  },
];

export default function ServiciosPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'service-2');
  return (
    <div className="bg-background">
      <div className="relative w-full h-60 md:h-80">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt="Nuestros Servicios"
            data-ai-hint={serviceImage.imageHint}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold leading-tight text-white drop-shadow-md max-w-4xl">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Soluciones integrales para el desarrollo del talento humano y la transformación organizacional.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/servicios/${service.slug}`}>
                    Conocer Más <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
