
import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Certificación de Competencias',
  description: 'Evaluamos y certificamos tus habilidades y conocimientos con base en estándares nacionales e internacionales, otorgando validez oficial a tu talento.',
  keywords: 'certificación de competencias, CONOCER, validez oficial, estándares de competencia, certificación laboral',
};

const benefits = [
    {
        icon: <Award className="h-6 w-6 text-primary" />,
        title: "Reconocimiento Oficial",
        description: "Obtén un certificado con validez a nivel nacional avalado por el CONOCER y la SEP."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        title: "Mejores Oportunidades",
        description: "Aumenta tu competitividad en el mercado laboral y accede a mejores oportunidades de empleo y desarrollo."
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        title: "Movilidad Laboral",
        description: "Facilita tu movilidad laboral a nivel nacional al contar con un documento que respalda tus capacidades."
    }
];

export default function CertificacionPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'service-certificacion');

  return (
    <div className="bg-background">
      <div className="relative w-full h-60 md:h-80">
        {serviceImage && (
          <Image
            src={serviceImage.imageUrl}
            alt="Certificación de Competencias"
            data-ai-hint={serviceImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-white drop-shadow-md max-w-4xl">
            Certificación de Competencias
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
                <h2 className="text-2xl font-headline font-semibold text-primary">Valida tu Talento, Impulsa tu Futuro</h2>
                <p>
                  En Ibérica, entendemos que el talento y la experiencia son tus activos más valiosos. Nuestro servicio de <strong>Certificación de Competencias</strong> te permite obtener un reconocimiento oficial de tus habilidades, conocimientos, destrezas y actitudes, independientemente de cómo los hayas adquirido.
                </p>
                <p>
                  A través de procesos de evaluación justos y transparentes, basados en <strong>Estándares de Competencia (EC)</strong> inscritos en el Registro Nacional de Estándares de Competencia (RENEC), te ayudamos a obtener un certificado con validez a nivel nacional, emitido por el CONOCER y la SEP.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-headline font-semibold mb-4 text-center text-primary">Beneficios de la Certificación</h3>
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

                <h3 className="text-xl font-headline font-semibold text-primary">¿Cómo es el proceso?</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Diagnóstico:</strong> Realizamos una evaluación inicial sin costo para identificar si eres candidato a la certificación.</li>
                  <li><strong>Alineación (Opcional):</strong> Si es necesario, te ofrecemos cursos de alineación para fortalecer las áreas de oportunidad detectadas.</li>
                  <li><strong>Evaluación:</strong> Demuestras tus competencias a través de una evaluación teórica y/o práctica.</li>
                  <li><strong>Certificación:</strong> Una vez que resultas competente, gestionamos la emisión de tu certificado oficial.</li>
                </ol>

              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-headline mb-4">¿Listo para dar el siguiente paso?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Ponte en contacto con nosotros para recibir una asesoría gratuita y conocer los estándares en los que te puedes certificar.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">Solicitar Información</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
