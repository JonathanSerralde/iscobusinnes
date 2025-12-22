
import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, BrainCircuit, BookCheck, Goal } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultoría Educativa',
  description: 'Asesoría especializada a instituciones para la innovación de sus modelos pedagógicos, curriculares y de gestión, impulsando la calidad y la pertinencia educativa.',
  keywords: 'consultoría educativa, innovación pedagógica, diseño curricular, gestión educativa, calidad educativa',
};

const benefits = [
    {
        icon: <BookCheck className="h-6 w-6 text-primary" />,
        title: "Diseño Curricular",
        description: "Desarrollamos y actualizamos planes y programas de estudio por competencias, alineados a las necesidades del mercado y la normatividad vigente."
    },
    {
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        title: "Innovación de Modelos",
        description: "Te acompañamos en la transición hacia modelos educativos innovadores, integrando metodologías activas y tecnología de forma efectiva."
    },
    {
        icon: <Goal className="h-6 w-6 text-primary" />,
        title: "Gestión Estratégica",
        description: "Ofrecemos asesoría para la planeación estratégica, la evaluación institucional y la optimización de procesos para mejorar la calidad académica."
    }
];

export default function ConsultoriaEducativaPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'service-consultoria');

  return (
    <div className="bg-background">
      <div className="relative w-full h-60 md:h-80">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt="Consultoría Educativa"
            data-ai-hint={serviceImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Users className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-white drop-shadow-md max-w-4xl">
            Consultoría Educativa
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
                <h2 className="text-2xl font-headline font-semibold text-primary">Transformamos la Educación, Juntos</h2>
                <p>
                  El futuro de la educación requiere visión, innovación y una gestión estratégica. Nuestro servicio de <strong>Consultoría Educativa</strong> ofrece asesoría especializada a instituciones de todos los niveles para ayudarlas a navegar los complejos desafíos del panorama actual y a construir ecosistemas de aprendizaje de alta calidad.
                </p>
                <p>
                  Nuestro equipo de expertos colabora con directivos, académicos y administrativos para diagnosticar áreas de oportunidad, diseñar soluciones a la medida e implementar estrategias que impulsen la excelencia y la pertinencia educativa.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-headline font-semibold mb-4 text-center text-primary">Nuestras Áreas de Expertise</h3>
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

                <h3 className="text-xl font-headline font-semibold text-primary">Servicios Clave</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Diagnóstico y evaluación institucional.</li>
                  <li>Diseño y rediseño curricular basado en competencias.</li>
                  <li>Implementación de modelos de educación en línea e híbrida.</li>
                  <li>Formación y desarrollo del personal docente.</li>
                  <li>Estrategias de internacionalización y vinculación.</li>
                  <li>Aseguramiento de la calidad y procesos de acreditación.</li>
                </ul>

              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-headline mb-4">¿Listo para innovar?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Conversemos sobre las metas de tu institución. Contáctanos para una consulta inicial y descubre cómo podemos ayudarte a construir el futuro de la educación.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">Agendar una Consulta</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
