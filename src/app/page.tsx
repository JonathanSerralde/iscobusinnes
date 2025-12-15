import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const featureCards = [
  {
    title: "Nosotros",
    description: "Conoce nuestra historia, misión y los valores que nos guían.",
    href: "/nosotros",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
  },
  {
    title: "Oferta Formativa",
    description: "Explora nuestros diplomados, cursos y certificaciones.",
    href: "/oferta-formativa",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: "Servicios",
    description: "Descubre cómo podemos ayudarte a alcanzar tus metas.",
    href: "/servicios",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight drop-shadow-md">
            Instituto de Capacitación y <br/> Certificación Ibérica
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-sm">
            Talento con evidencia, competencias con impacto.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/oferta-formativa">
              Explorar Cursos <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">Bienvenidos a ICCI Ibérica</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Somos una institución de capacitación mexicana con una convicción clara: unir el conocimiento, las habilidades y las destrezas con la virtud ética para transformar la realidad de nuestro país. Formamos profesionales íntegros, críticos y socialmente responsables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featureCards.map((card) => (
              <Card key={card.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
