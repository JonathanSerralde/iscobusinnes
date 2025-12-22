
import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Briefcase, Lightbulb, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Capacitación Corporativa',
  description: 'Diseñamos programas de formación a la medida de tu empresa para desarrollar el potencial de tus equipos y alcanzar sus objetivos estratégicos.',
  keywords: 'capacitación corporativa, formación para empresas, desarrollo de equipos, liderazgo, DNC',
};

const benefits = [
    {
        icon: <Target className="h-6 w-6 text-primary" />,
        title: "Programas a la Medida",
        description: "Diseñamos soluciones formativas a partir de un Diagnóstico de Necesidades de Capacitación (DNC) para atender tus retos específicos."
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Resultados Medibles",
        description: "Enfocamos nuestros programas en el desarrollo de competencias que tienen un impacto directo en la productividad y los KPIs de tu negocio."
    },
    {
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
        title: "Metodologías Innovadoras",
        description: "Utilizamos aprendizaje basado en proyectos, gamificación y estudios de caso para garantizar una experiencia atractiva y efectiva."
    }
];

export default function CapacitacionCorporativaPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'service-capacitacion');

  return (
    <div className="bg-background">
      <div className="relative w-full h-60 md:h-80">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt="Capacitación Corporativa"
            data-ai-hint={serviceImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Briefcase className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-white drop-shadow-md max-w-4xl">
            Capacitación Corporativa
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/servicios" className="text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a Servicios
                </Link>
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-6">
                <h2 className="text-2xl font-headline font-semibold text-primary">Impulsa el Talento de tu Organización</h2>
                <p>
                  En un mercado cada vez más competitivo, el desarrollo del capital humano es la clave para el éxito sostenible. Nuestro servicio de <strong>Capacitación Corporativa</strong> está diseñado para potenciar las habilidades de tus equipos, alinear su desempeño con los objetivos estratégicos de la empresa y fomentar una cultura de aprendizaje continuo.
                </p>
                <p>
                  Vamos más allá de los cursos genéricos. Colaboramos estrechamente contigo para crear programas de formación totalmente personalizados que respondan a las necesidades y desafíos únicos de tu organización, asegurando un retorno de inversión tangible.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-headline font-semibold mb-4 text-center text-primary">Nuestra Propuesta de Valor</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="text-center flex flex-col items-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-3">
                                    {benefit.icon}
                                </div>
                                <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-xl font-headline font-semibold text-primary">Áreas de Especialización</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Liderazgo y desarrollo de habilidades gerenciales.</li>
                  <li>Trabajo en equipo, comunicación y resolución de conflictos.</li>
                  <li>Ventas, servicio al cliente y habilidades comerciales.</li>
                  <li>Gestión de proyectos y metodologías ágiles.</li>
                  <li>Competencias digitales y transformación tecnológica.</li>
                  <li>Normatividad y cumplimiento (NOM-035, etc.).</li>
                </ul>

              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-headline mb-4">¿Quieres transformar a tu equipo?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Conversemos sobre tus objetivos. Contáctanos para un diagnóstico sin costo y descubre cómo podemos diseñar el programa perfecto para tu empresa.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">Diseñar un Plan</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
