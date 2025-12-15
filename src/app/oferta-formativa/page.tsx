import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oferta Formativa',
  description: 'Descubre nuestra oferta formativa en diplomados, cursos y certificaciones para potenciar tu desarrollo profesional.',
};

const courses = [
    {
      title: 'Diplomado en Liderazgo Educativo',
      description: 'Desarrolla las competencias para dirigir e innovar en instituciones educativas del siglo XXI.',
      imageId: 'course-1',
      icon: <GraduationCap className="h-7 w-7 text-primary" />,
    },
    {
      title: 'Certificación en Competencias Digitales',
      description: 'Valida tus habilidades en el uso de herramientas tecnológicas para el entorno profesional y académico.',
      imageId: 'course-4',
      icon: <Cpu className="h-7 w-7 text-primary" />,
    },
    {
      title: 'Curso de Neuroeducación Aplicada',
      description: 'Aprende a aplicar los principios de la neurociencia para potenciar el aprendizaje en el aula.',
      imageId: 'course-3',
      icon: <BookOpen className="h-7 w-7 text-primary" />,
    },
    {
      title: 'Diplomado en Gestión de Proyectos',
      description: 'Adquiere las herramientas y metodologías para planificar, ejecutar y cerrar proyectos exitosamente.',
      imageId: 'course-2',
      icon: <Briefcase className="h-7 w-7 text-primary" />,
    },
];

export default function OfertaFormativaPage() {
  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Oferta Formativa</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Programas diseñados para impulsar tu carrera y generar un impacto positivo en tu entorno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => {
            const image = PlaceHolderImages.find(img => img.id === course.imageId);
            return (
              <Card key={course.title} className="flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full md:w-5/12 h-56 md:h-auto">
                    {image && (
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-between p-6 w-full md:w-7/12">
                    <div>
                        <div className="flex items-start gap-4 mb-3">
                           <div className="bg-primary/10 p-3 rounded-full mt-1">
                            {course.icon}
                           </div>
                           <CardTitle className="font-headline text-2xl leading-snug">{course.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base pl-[64px]">{course.description}</CardDescription>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                           <Link href="#">Más Información</Link>
                        </Button>
                    </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
