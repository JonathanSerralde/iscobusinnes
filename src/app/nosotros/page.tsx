
import { optimizeContentForSEO, type OptimizeContentForSEOOutput } from '@/ai/flows/optimize-content-for-seo';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import React from 'react';

const originalContent = `Bienvenidos a Ibérica
Somos una institución de capacitación mexicana que nace con una convicción clara: unir el conocimiento, las habilidades y las destrezas con la virtud ética para transformar la realidad de nuestro país. Bajo el lema “Talento con evidencia, competencias con impacto”, formamos profesionales íntegros, críticos y socialmente responsables, capaces de responder a los desafíos del siglo XXI.
 
Somos una comunidad formativa y académica humanista, incluyente e innovadora que articula tres grandes funciones:
- Formación profesional de calidad,
- Educación continua y actualización permanente,
- Extensión y vinculación universitaria con los sectores social, público y productivo.

Nuestro modelo educativo-formativo por competencias integra saberes disciplinares, habilidades cognitivas de alto nivel, competencias digitales y socioemocionales, sustentado en metodologías activas, neuroeducación y uso ético de la tecnología y la inteligencia artificial. Creemos en el aprendizaje a lo largo de la vida y en la universidad como espacio de diálogo, diversidad y construcción colectiva de soluciones.
 
Nuestra razón de ser
En Ibérica trabajamos para que cada persona:
- Desarrolle un perfil profesional sólido y pertinente a las demandas actuales del mundo laboral.
- Construya un proyecto de vida ético, responsable y comprometido con su comunidad.
- Viva experiencias formativas en modalidades presenciales, mixtas y en línea, con acompañamiento cercano de docentes, tutores e instructores.
- Participe en proyectos de investigación, intervención social y emprendimiento que generen impacto real en su entorno.

Lo que nos distingue
- Enfoque humanista y socialmente responsable: la persona está al centro de todos nuestros procesos.
- Calidad académica y mejora continua: programas de formación actualizados, evaluación permanente y alineación con los estándares nacionales e internacionales de competencias.
- Inclusión y equidad: reconocemos y atendemos la diversidad de trayectorias, contextos y necesidades de aprendizaje.
- Innovación tecnopedagógica: integrando plataformas digitales, recursos abiertos e IA de manera ética y formativa.
- Vinculación con el entorno: convenios y proyectos con instituciones, empresas, organizaciones civiles y comunidades para que el conocimiento universitario se traduzca en soluciones concretas.
`;

const getOptimizedContent = React.cache(async (): Promise<OptimizeContentForSEOOutput> => {
  try {
    const optimizedData = await optimizeContentForSEO({
      websiteContent: originalContent,
      keywords: 'capacitación, certificación, profesional, educación, México, competencias',
    });
    return optimizedData;
  } catch (error) {
    console.error("Error optimizing content:", error);
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

const MarkdownContent = ({ content }: { content: string }) => {
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

  const lines = content.split('\n');
  const elements = [];
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
        elements.push(<h2 key={index} className="text-2xl md:text-3xl font-headline font-bold mt-8 mb-4 text-foreground/90">{parseLine(trimmedLine.substring(3))}</h2>);
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl md:text-2xl font-headline font-semibold mt-6 mb-3 text-foreground/80">{parseLine(trimmedLine.substring(4))}</h3>);
      } else if (trimmedLine) {
        elements.push(<p key={index} className="mb-4 leading-relaxed">{parseLine(trimmedLine)}</p>);
      }
    }
  });

  flushList(); // Ensure any remaining list items are rendered

  return <>{elements}</>;
};


export default async function NosotrosPage() {
  const { optimizedContent, suggestedKeywords } = await getOptimizedContent();
  const aboutUsImage = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
          {aboutUsImage && (
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src={aboutUsImage.imageUrl} 
                alt={aboutUsImage.description} 
                data-ai-hint={aboutUsImage.imageHint} 
                fill 
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
               <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h1 className="text-4xl md:text-5xl font-headline text-white drop-shadow-lg">Sobre Nosotros</h1>
               </div>
            </div>
          )}
          <CardContent className="p-6 md:p-10">
            <div className="text-base md:text-lg text-foreground/90 prose prose-neutral dark:prose-invert max-w-none">
              <MarkdownContent content={optimizedContent} />
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 p-6 md:p-8 flex flex-col items-start gap-2 border-t">
            <h3 className="text-xl font-headline text-primary">Palabras Clave Sugeridas (IA)</h3>
            <p className="text-muted-foreground">{suggestedKeywords}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

    
