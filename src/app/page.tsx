import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const ofertaFormativaCards = [
  {
    title: 'Programas de Educación',
    imageId: 'oferta-educacion',
    href: '/oferta-formativa',
    className: 'lg:col-span-2'
  },
  {
    title: 'Educación Continua y Extensión Universitaria',
    imageId: 'oferta-continua',
    href: '/oferta-formativa',
    className: 'lg:col-span-2'
  },
    {
    title: 'Formación de Capital Humano',
    imageId: 'oferta-capital-humano',
    href: '/oferta-formativa',
    className: 'lg:col-span-2'
  },
    {
    title: 'Programas de Inclusión y Educación Especial',
    imageId: 'oferta-inclusion',
    href: '/oferta-formativa',
    className: 'lg:row-span-2'
  },
  {
    title: 'Programas de Protección Civil y Gestión Integral de Riesgo de Desastre',
    imageId: 'oferta-proteccion-civil',
    href: '/oferta-formativa',
    className: 'lg:col-span-3 lg:row-span-2'
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight drop-shadow-lg">
            Ibérica
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
            <h2 className="text-3xl md:text-4xl font-headline text-primary">Bienvenidos a Ibérica</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Somos una institución de capacitación mexicana con una convicción clara: unir el conocimiento, las habilidades y las destrezas con la virtud ética para transformar la realidad de nuestro país. Formamos profesionales íntegros, críticos y socialmente responsables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featureCards.map((card) => (
              <Link key={card.title} href={card.href} className="block group">
                <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 flex flex-col group-hover:bg-muted/50">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">
              Nuestra <span className="text-primary">Oferta Formativa</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Descubre un universo de posibilidades para tu crecimiento profesional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {ofertaFormativaCards.map(card => {
                const image = PlaceHolderImages.find(img => img.id === card.imageId);
                return (
                  <Link key={card.title} href={card.href} className={cn("group relative block overflow-hidden rounded-xl", card.className)}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={card.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative flex flex-col h-full justify-end p-6 text-white">
                      <h3 className="text-xl lg:text-2xl font-headline font-bold leading-tight drop-shadow-md">
                        {card.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

    </div>
  );
}
