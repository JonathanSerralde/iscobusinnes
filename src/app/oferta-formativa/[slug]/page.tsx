import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, GraduationCap, Briefcase, Cpu, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const courseData = {
  'liderazgo-educativo': {
    title: 'Diplomado en Liderazgo Educativo',
    imageId: 'course-1',
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    description: 'Desarrolla las competencias para dirigir e innovar en instituciones educativas del siglo XXI, fomentando una cultura de mejora continua y liderazgo transformacional.',
    seoKeywords: 'liderazgo educativo, dirección de escuelas, innovación educativa, gestión de centros educativos, diplomado liderazgo',
    details: `
      <p>Nuestro <strong>Diplomado en Liderazgo Educativo</strong> está diseñado para directivos, coordinadores y docentes que aspiran a ocupar posiciones de liderazgo. Aprenderás a gestionar equipos de alto rendimiento, implementar proyectos de innovación y a tomar decisiones estratégicas basadas en datos para la mejora de la calidad educativa.</p>
      <p>A lo largo del programa, explorarás temas como la planificación estratégica, el coaching educativo, la evaluación institucional y el uso de tecnologías para la gestión. Fomentamos un enfoque práctico y colaborativo para que puedas aplicar lo aprendido en tu propio contexto institucional.</p>
    `,
    features: [
        'Planificación estratégica en educación',
        'Gestión del talento humano y equipos directivos',
        'Innovación y tecnologías aplicadas a la gestión',
        'Evaluación para la mejora continua'
    ],
    accordion: [
      { title: '¿A quién está dirigido?', content: 'A directores, subdirectores, coordinadores académicos, y docentes con experiencia que buscan asumir roles de liderazgo en instituciones educativas.' },
      { title: 'Modalidad y Duración', content: 'El diplomado se ofrece en modalidad mixta (presencial y en línea) y tiene una duración de 120 horas distribuidas en 6 meses.' },
      { title: 'Requisitos de Admisión', content: 'Contar con título de licenciatura y tener al menos 3 años de experiencia en el sector educativo. Se requiere una entrevista con el coordinador del programa.' },
    ]
  },
  'competencias-digitales': {
    title: 'Certificación en Competencias Digitales',
    imageId: 'course-4',
    icon: <Cpu className="h-10 w-10 text-primary" />,
    description: 'Valida tus habilidades en el uso de herramientas tecnológicas para el entorno profesional y académico, potenciando tu productividad y empleabilidad.',
    seoKeywords: 'competencias digitales, certificación TIC, habilidades digitales, herramientas colaborativas, ciudadanía digital',
    details: `
      <p>En la era digital, dominar las herramientas tecnológicas es fundamental. Nuestra <strong>Certificación en Competencias Digitales</strong> te prepara para enfrentar los desafíos del mundo laboral actual, validando tus conocimientos en áreas clave como la comunicación digital, la creación de contenido, la seguridad y la resolución de problemas en entornos tecnológicos.</p>
      <p>El programa se basa en el Marco Europeo de Competencias Digitales para la Ciudadanía (DigComp) y te permitirá obtener un certificado con reconocimiento oficial que potenciará tu perfil profesional.</p>
    `,
    features: [
        'Comunicación y colaboración en línea',
        'Creación de contenidos digitales (texto, imagen y video)',
        'Seguridad digital y protección de datos',
        'Resolución de problemas técnicos'
    ],
    accordion: [
        { title: '¿Qué aprenderás?', content: 'A utilizar de manera eficiente herramientas de ofimática en la nube, plataformas de comunicación, gestores de contenido y estrategias de seguridad para proteger tu información.' },
        { title: 'Proceso de Certificación', content: 'El proceso consiste en un curso de preparación en línea y un examen práctico final donde deberás resolver casos reales aplicando las competencias adquiridas.' },
        { title: 'Validez del Certificado', content: 'El certificado es emitido por Ibérica y está alineado con estándares nacionales e internacionales, lo que le da validez en diversos sectores profesionales.' },
    ]
  },
  'neuroeducacion-aplicada': {
    title: 'Curso de Neuroeducación Aplicada',
    imageId: 'course-3',
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    description: 'Descubre cómo funciona el cerebro en el proceso de aprendizaje y aplica estrategias basadas en la neurociencia para potenciar la enseñanza en el aula.',
    seoKeywords: 'neuroeducación, neurociencia aplicada, aprendizaje cerebro, estrategias de enseñanza, curso docentes',
    details: `
      <p>El <strong>Curso de Neuroeducación Aplicada</strong> te brinda las bases científicas para comprender cómo la emoción, la atención y la memoria influyen en el aprendizaje. A través de este programa, los docentes y profesionales de la educación podrán diseñar experiencias de aprendizaje más efectivas y motivadoras.</p>
      <p>Transforma tu práctica pedagógica integrando técnicas que respetan los ritmos naturales del cerebro, fomentan la curiosidad y promueven un aprendizaje significativo y duradero. </p>
    `,
    features: [
        'Fundamentos de la neurociencia cognitiva',
        'El papel de las emociones en el aprendizaje',
        'Estrategias para captar y mantener la atención',
        'Memoria, plasticidad cerebral y evaluación'
    ],
    accordion: [
      { title: 'Metodología', content: 'El curso es 100% en línea y combina lecciones en video, lecturas, discusiones en foros y actividades prácticas para diseñar planes de clase neuro-compatibles.' },
      { title: 'Duración', content: 'El curso tiene una duración de 40 horas, que puedes completar a tu propio ritmo en un periodo máximo de 3 meses.' },
      { title: '¿Para quién es?', content: 'Docentes de todos los niveles educativos, psicólogos, pedagogos, y cualquier profesional interesado en mejorar los procesos de enseñanza-aprendizaje.' },
    ]
  },
  'gestion-de-proyectos': {
    title: 'Diplomado en Gestión de Proyectos',
    imageId: 'course-2',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    description: 'Adquiere las herramientas y metodologías ágiles y predictivas para planificar, ejecutar y cerrar proyectos exitosos, alineados a los objetivos estratégicos.',
    seoKeywords: 'gestión de proyectos, project management, metodologías ágiles, Scrum, PMP, diplomado proyectos',
    details: `
      <p>El <strong>Diplomado en Gestión de Proyectos</strong> te capacita para liderar proyectos de cualquier escala, desde la concepción hasta la entrega final. Aprenderás a definir el alcance, gestionar recursos, controlar presupuestos, mitigar riesgos y comunicarte eficazmente con los stakeholders.</p>
      <p>Combinamos los enfoques predictivos del PMI® con las metodologías ágiles más demandadas como Scrum, preparándote para obtener certificaciones internacionales como PMP® o Scrum Master.</p>
    `,
    features: [
        'Ciclo de vida y procesos de la gestión de proyectos',
        'Metodologías predictivas (Waterfall) y ágiles (Scrum, Kanban)',
        'Gestión de alcance, tiempo, costo y calidad',
        'Liderazgo, comunicación y gestión de stakeholders'
    ],
    accordion: [
      { title: '¿Qué incluye?', content: 'Incluye material de estudio, plantillas profesionales, simuladores de examen para certificaciones y el acompañamiento de instructores certificados.' },
      { title: 'Modalidad', content: 'Disponible en modalidad en línea (en vivo) y presencial. Ambas con un fuerte componente práctico basado en estudios de caso.' },
      { title: 'Oportunidades laborales', content: 'La gestión de proyectos es una de las áreas con mayor demanda laboral. Este diplomado te abrirá puertas en sectores de tecnología, construcción, consultoría, y más.' },
    ]
  },
};

type CourseData = typeof courseData;
type CourseSlug = keyof CourseData;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug as CourseSlug;
  const course = courseData[slug];

  if (!course) {
    return {
      title: 'Curso no encontrado',
    };
  }

  return {
    title: course.title,
    description: course.description,
    keywords: course.seoKeywords,
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as CourseSlug;
  const course = courseData[slug];

  if (!course) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === course.imageId);

  return (
    <div className="bg-background">
      <div className="relative w-full h-60 md:h-80">
        {image && (
          <Image
            src={image.imageUrl}
            alt={course.title}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            {course.icon}
          </div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-white drop-shadow-md max-w-4xl">
            {course.title}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/oferta-formativa" className="text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a Oferta Formativa
                </Link>
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-2xl font-headline font-semibold mb-4 text-primary">Descripción General</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-4" dangerouslySetInnerHTML={{ __html: course.details }} />

              <div className="my-10">
                <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">¿Qué Aprenderás?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {course.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">Preguntas Frecuentes</h3>
                <Accordion type="single" collapsible className="w-full">
                    {course.accordion.map((item) => (
                        <AccordionItem value={item.title} key={item.title}>
                            <AccordionTrigger className="text-left font-semibold text-lg">{item.title}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                            {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
              </div>
              
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-headline mb-4">¿Interesado en este curso?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Ponte en contacto con nosotros para obtener más información sobre inscripciones, precios y próximas fechas.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contacto">Contactar Ahora</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}