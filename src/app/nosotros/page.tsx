

import { optimizeContentForSEO, type OptimizeContentForSEOOutput } from '@/backend/ai/flows/optimize-content-for-seo';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import React from 'react';

const originalContent = `Instituto de Capacitación y Certificación Ibérica (Ibérica): Talento con Impacto
Bienvenidos a la Evolución de sus Competencias
Bienvenidos al Instituto de Capacitación y Certificación Ibérica, una institución líder dedicada a la formación profesional y social con alcance nacional e iberoamericano. Operamos como una instancia académica-técnica especializada bajo el amparo del International Supreme Council For Social, Business and Industrial Development, A.C..
Bajo nuestro lema “Talento con evidencia, competencias con impacto”, nuestra misión es clara: transformar la realidad mediante la integración de conocimientos técnicos, habilidades prácticas y una sólida ética profesional. Formamos líderes íntegros, críticos y socialmente responsables, preparados para los desafíos del siglo XXI.

Misión y Visión: Nuestro Norte Estratégico
Nuestra Misión: "Potenciar el talento humano de Iberoamérica mediante programas de capacitación y certificación de competencias pertinentes, inclusivos y de alta calidad, que contribuyan al desarrollo social, educativo, empresarial e industrial." 

Nuestra Visión (2030): "Ser un referente iberoamericano en formación y certificación de competencias, reconocido por su rigor metodológico, su compromiso con la justicia social y su capacidad de generar oportunidades reales de desarrollo profesional y comunitario." 

Modelo Educativo: Innovación, Humanismo y Competencia
En Ibérica, somos una comunidad educativa humanista e innovadora. Nuestro modelo formativo se centra en el desarrollo integral de competencias, sustentado en la metodología de formación basada en estándares.

Articulamos nuestro trabajo en cuatro pilares del saber:
Saber (Conocimiento): Fundamentos teóricos sólidos. 
Saber Hacer (Desempeño): Habilidades prácticas verificables. 
Saber Ser (Actitudes): Ética y responsabilidad profesional. 
Saber Convivir (Relación Social): Enfoque colaborativo e inclusivo. 

Nos apoyamos en metodologías activas y herramientas tecnopedagógicas, promoviendo el uso ético de la tecnología y la inteligencia artificial para asegurar un aprendizaje significativo a lo largo de la vida.

¿Qué Hacemos? Tres Ejes de Acción
Para garantizar el desarrollo profesional de nuestra comunidad, articulamos tres funciones esenciales:

Formación Profesional y Capacitación: Diseñamos e implementamos cursos, talleres y diplomados alineados a estándares de competencia laboral y normatividad oficial.

Certificación con Valor Oficial: Empoderamos a nuestros egresados para evaluar y certificar sus competencias bajo estándares nacionales e internacionales (CONOCER), abriendo puertas a la movilidad laboral y el reconocimiento social.

Vinculación Estratégica: Conectamos el ámbito académico con los sectores social, público y productivo mediante convenios con universidades, empresas y organismos gubernamentales.

¿Por Qué Elegir Ibérica? (Nuestra Propuesta de Valor)
Trabajamos para que cada persona logre desarrollar un perfil profesional sólido, relevante para las demandas laborales actuales en México e Iberoamérica.

Lo que nos distingue:
Enfoque Humanista e Inclusivo: La persona y sus derechos humanos son el centro de todos nuestros procesos. Fomentamos la igualdad de género y la atención a grupos vulnerables.

Resultados Verificables: No solo enseñamos; generamos evidencias de desempeño. Priorizamos productos y prácticas reales sobre la teoría abstracta.

Innovación Tecnopedagógica: Ofrecemos modalidades presenciales, en línea y mixtas, utilizando plataformas de gestión del aprendizaje y aulas virtuales para romper barreras geográficas.

Respaldo y Autoridad (E-E-A-T): Nuestra calidad se sustenta en un equipo de especialistas certificados en múltiples estándares (como EC0076, EC0217.01, EC0307.01) y en alianzas sólidas con instituciones como la Universidad CUGS, CECATI y el Colegio Nacional de Evaluación y Certificación de Competencias.

En el Instituto de Capacitación y Certificación Ibérica, el conocimiento universitario se traduce en soluciones concretas. Únete a una comunidad que transforma el talento en impacto real.
`;

const getOptimizedContent = React.cache(async (): Promise<OptimizeContentForSEOOutput> => {
  try {
    const optimizedData = await optimizeContentForSEO({
      websiteContent: originalContent,
      keywords: 'capacitación, certificación, profesional, educación, México, competencias, iberoamérica, CONOCER',
    });
    return optimizedData;
  } catch (error) {
    console.warn("AI content optimization failed (likely due to missing configuration or API key). Using fallback content.");
    // Return original content as a fallback
    return {
      optimizedContent: `## Bienvenidos a Ibérica
Somos una institución de capacitación mexicana que nace con una convicción clara: unir el conocimiento, las habilidades y las destrezas con la virtud ética para transformar la realidad de nuestro país. Bajo el lema **“Talento con evidencia, competencias con impacto”**, formamos profesionales íntegros, críticos y socialmente responsables, capaces de responder a los desafíos del siglo XXI.
### Nuestra Misión
Somos una comunidad formativa y académica humanista, incluyente e innovadora que articula tres grandes funciones:
- Formación profesional de calidad.
- Educación continua y actualización permanente.
- Extensión y vinculación universitaria con los sectores social, público y productivo.
### Nuestro Modelo Educativo
Nuestro modelo educativo-formativo por competencias integra saberes disciplinares, habilidades cognitivas de alto nivel, competencias digitales y socioemocionales, sustentado en metodologías activas, **neuroeducación** y uso ético de la tecnología y la inteligencia artificial. Creemos en el aprendizaje a lo largo de la vida y en la universidad como espacio de diálogo, diversidad y construcción colectiva de soluciones.`,
      suggestedKeywords: 'capacitación, certificación, profesional, educación, México, competencias, liderazgo, neuroeducación, modelo educativo',
      metaDescription: 'En Ibérica, formamos profesionales con talento y competencias de impacto a través de un modelo educativo innovador y humanista. Conoce nuestra oferta de capacitación y certificación en México.'
    };
  }
});

export async function generateMetadata(): Promise<Metadata> {
  const { metaDescription } = await getOptimizedContent();
  return {
    title: 'Nosotros',
    description: metaDescription,
  };
}

// Normalize content that may have literal escape sequences from AI responses
const normalizeContent = (content: string): string => {
  // Replace literal \n\n and \n with actual newlines
  let normalized = content
    .replace(/\\n\\n/g, '\n\n')
    .replace(/\\n/g, '\n');
  
  // Also handle cases where markdown headers are escaped or malformed
  // Remove any leading/trailing whitespace from headers
  normalized = normalized.replace(/^(#{2,4})\s*/gm, '$1 ');
  
  return normalized;
};

const MarkdownContent = ({ content }: { content: string }) => {
  // Normalize the content first
  const normalizedContent = normalizeContent(content);
  
  const parseLine = (line: string) => {
    // Split by **bold** text, keeping the delimiters
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = normalizedContent.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${elements.length}`} className="mb-4 list-disc pl-5 space-y-2">{listItems}</ul>);
      listItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('- ')) {
      listItems.push(<li key={index}>{parseLine(trimmedLine.substring(2))}</li>);
    } else {
      flushList();
      if (trimmedLine.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-3xl font-headline font-bold mt-8 mb-4 text-primary">{parseLine(trimmedLine.substring(3))}</h2>);
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-2xl font-headline font-semibold mt-6 mb-3 text-foreground/90">{parseLine(trimmedLine.substring(4))}</h3>);
      } else if (trimmedLine) {
        elements.push(<p key={index} className="mb-4 leading-relaxed">{parseLine(trimmedLine)}</p>);
      }
    }
  });

  flushList(); // Ensure any remaining list items are rendered

  return <>{elements}</>;
};

const DirectorMessage = () => {
  const directorImage = PlaceHolderImages.find(img => img.id === 'director');

  return (
    <div className="bg-muted/50 rounded-lg p-8 my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-center md:col-span-1">
          {directorImage && (
            <Image
              src={directorImage.imageUrl}
              alt="Mtro. Alvaro Serralde Ramos"
              data-ai-hint={directorImage.imageHint}
              width={180}
              height={180}
              className="rounded-full object-cover mb-4 border-4 border-white shadow-lg"
            />
          )}
          <h3 className="font-headline font-bold text-xl text-foreground">Mtro. Alvaro Serralde Ramos</h3>
          <p className="text-muted-foreground">Director general</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-headline font-bold mb-4 text-primary">
            Mensaje del Director General
          </h2>
          <div className="space-y-4 text-foreground/90 text-base">
            <p>Como Director general de ICCI, es para mí un honor darles la más cordial bienvenida a esta comunidad académica y formativa que nace con una convicción muy clara:</p>
            <p className="font-semibold text-lg text-center my-4 text-foreground italic px-4 py-2 border-l-4 border-primary bg-primary/5">Unir el conocimiento con la ética, la ciencia con la humanidad, la formación profesional con el compromiso social.</p>
            <p>Vivimos en un México y en un mundo que enfrentan desafíos complejos: desigualdad, violencia, crisis ambiental, transformaciones tecnológicas aceleradas y cambios profundos en el mundo del trabajo. Ante este contexto, en ICCI asumimos que la educación y formación continua no puede limitarse a transmitir información; su misión es formar personas capaces de pensar críticamente, sentir con empatía y actuar con responsabilidad.</p>
            <p>Bajo el lema "Talento con evidencia, competencias con impacto", trabajamos para que cada persona:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Desarrolle competencias profesionales sólidas y pertinentes al siglo XXI.</li>
              <li>Fortalezca sus habilidades cognitivas, digitales y socioemocionales.</li>
              <li>Construya un proyecto de vida ético y comprometido con su comunidad.</li>
              <li>Encuentre en nuestra institución un espacio de diálogo, inclusión y respeto a la diversidad.</li>
            </ul>
            <p>En ICCI articulamos educación continua como un ecosistema de aprendizaje a lo largo de la vida. Nuestro modelo educativo-formativo se sustenta en el enfoque por competencias, la innovación tecnopedagógica y una profunda vocación de servicio a la sociedad.</p>
            <p>Te invito a conocer nuestra oferta formativa, nuestros valores y proyectos. Si decides formarte con nosotros, no solo ingresarás a una institución; te integrarás a una comunidad que cree en tu talento, apuesta por tu desarrollo y confía en tu capacidad para transformar tu realidad y la de los demás.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default async function NosotrosPage() {
  const { optimizedContent } = await getOptimizedContent();
  const aboutUsImage = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-lg border-none">
          {aboutUsImage && (
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src={aboutUsImage.imageUrl} 
                alt={aboutUsImage.description} 
                data-ai-hint={aboutUsImage.imageHint} 
                fill 
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
               <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h1 className="text-4xl md:text-5xl font-headline text-white drop-shadow-lg">Sobre Nosotros</h1>
               </div>
            </div>
          )}
          <CardContent className="p-6 md:p-10 bg-card">
            <div className="text-base md:text-lg text-foreground/90 prose prose-neutral dark:prose-invert max-w-none">
              <MarkdownContent content={optimizedContent} />
            </div>

            <DirectorMessage />

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
