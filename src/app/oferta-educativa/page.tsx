import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, BookOpen, Clock, Award, Users, GraduationCap, Laptop, ShieldCheck, Headphones, Camera, FileText, CircleDot } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oferta Educativa - Bachillerato Modular',
  description: 'Estudia tu bachillerato oficial a tu propio ritmo con Ibérica. Sin examen de admisión, plan modular de 22 módulos, con validez oficial de la SEP.',
  keywords: 'bachillerato modular, preparatoria abierta, bachillerato oficial, SEP, estudiar bachillerato, Ibérica, certificado oficial',
};

const ventajas = [
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Avance Flexible',
    description: 'No hay tiempos límite. Tú decides cuántos exámenes presentar y cuándo estás listo para hacerlo.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: 'Sin Examen de Admisión',
    description: 'Tu ingreso es directo. Sin trámites complicados ni exámenes eliminatorios.',
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: 'Validez Oficial Garantizada',
    description: 'Tu Certificado de Terminación de Estudios es emitido directamente por la SEP con validez en todo México y el extranjero.',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Asesoría Personalizada',
    description: 'En Ibérica, te asesoramos módulo por módulo. Nuestros expertos te dan las estrategias clave para superarlo.',
  },
];

const areasConocimiento = [
  { nombre: 'Comunicación', descripcion: 'Aprenderás a expresarte, redactar documentos y entender el inglés.' },
  { nombre: 'Matemáticas', descripcion: 'Pero no las aburridas; matemáticas aplicadas a solucionar problemas lógicos.' },
  { nombre: 'Ciencias Experimentales', descripcion: 'Física, Química y Biología, entendiendo el mundo que te rodea.' },
  { nombre: 'Humanidades', descripcion: 'Ética, lógica y valores para la toma de decisiones.' },
  { nombre: 'Ciencias Sociales', descripcion: 'Historia y sociedad, para entender tu entorno.' },
];

const niveles = [
  { nivel: 'Nivel 1 (Base)', descripcion: 'Empezamos con "De la información al conocimiento". Te enseñamos a estudiar y a usar la tecnología.' },
  { nivel: 'Nivel 2 (Herramientas)', descripcion: 'Refuerzas tu lenguaje, inglés básico y matemáticas iniciales.' },
  { nivel: 'Nivel 3 (Entorno)', descripcion: 'Empiezas a ver ciencias y sociedad.' },
  { nivel: 'Nivel 4 y 5 (Especialización)', descripcion: 'Profundizas en temas complejos y terminas con las competencias laborales.' },
];

const beneficiosCertificado = [
  'Continuar tus estudios en cualquier universidad (pública o privada).',
  'Mejorar tu perfil laboral y acceder a mejores puestos.',
];

export default function OfertaEducativaPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Bachillerato Modular con Validez Oficial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
              Oferta <span className="text-primary">Educativa</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground font-medium">
              Ibérica
            </p>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
              &ldquo;Bachillerato flexible, estratégico y con validez oficial para un crecimiento profesional sin pausas.&rdquo;
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">Inscríbete Ahora</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#como-funciona">Conoce Más</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="como-funciona" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
              <span className="text-primary italic">Tu bachillerato oficial, a tu propio ritmo</span>
              <br />
              <span className="text-foreground/70 text-xl md:text-2xl font-normal">y sin las ataduras de un salón de clases</span>
            </h2>
            <div className="mt-8 space-y-4 text-foreground/90 text-base md:text-lg text-justify leading-relaxed">
              <p>
                La Preparatoria Abierta es un servicio educativo oficial de la Secretaría de Educación Pública (SEP) en la modalidad no escolarizada. Esto significa que es un sistema diseñado para personas que, por trabajo, ubicación o preferencias personales, no pueden asistir a una escuela tradicional con horarios fijos.
              </p>
            </div>

            <Card className="mt-10 border-primary/20 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-headline font-bold text-foreground mb-4">¿Cómo funciona?</h3>
                <p className="text-foreground/80 mb-6">A diferencia del bachillerato tradicional, aquí tú tienes el control:</p>
                <div className="space-y-5">
                  {ventajas.slice(0, 3).map((ventaja) => (
                    <div key={ventaja.title} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                        {ventaja.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{ventaja.title}</h4>
                        <p className="text-foreground/70 mt-1">{ventaja.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Validez Oficial */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">Validez Oficial Garantizada</h2>
                <p className="mt-2 text-foreground/80 text-justify">
                  Al concluir los 22 módulos, recibes tu Certificado de Terminación de Estudios emitido directamente por la SEP. Este documento tiene validez oficial en todo México y el extranjero, permitiéndote:
                </p>
              </div>
            </div>
            <ul className="ml-16 space-y-3">
              {beneficiosCertificado.map((beneficio) => (
                <li key={beneficio} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plan de Estudios Modular */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4 text-primary italic">
              Olvídate de cargar con 10 materias al mismo tiempo.
              <br />
              <span className="text-foreground/70 text-xl md:text-2xl font-normal not-italic">Aquí, tu enfoque es láser</span>
            </h2>

            <div className="mt-8 space-y-4 text-foreground/90 text-justify">
              <p className="font-semibold">Hola, futuro graduado</p>
              <p>
                Sabemos que la preparatoria tradicional puede ser agobiante: horarios fijos, semestres interminables y un montón de materias mezcladas que a veces no parecen tener sentido.
              </p>
              <p>
                El Plan de Estudios Modular de la SEP (que es el que usamos en Ibérica) es diferente. Está diseñado para la vida real.
              </p>
            </div>

            {/* ¿Qué es un Módulo? */}
            <Card className="mt-10 border-primary/20 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-headline font-bold text-foreground mb-3">¿Qué es un &ldquo;Módulo&rdquo;?</h3>
                <p className="text-foreground/80 text-justify">
                  Imagínalo como un bloque de construcción. Un módulo no es solo una materia aislada (como &ldquo;Historia&rdquo; o &ldquo;Matemáticas&rdquo;); es una unidad de aprendizaje que integra conocimientos para resolver problemas reales.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Total de Módulos:</strong> Son solo 22.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Tu Misión:</strong> Acreditar uno por uno.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-700 dark:text-amber-400 font-semibold">La Ventaja: Al terminar un módulo, ¡ese conocimiento ya es tuyo y pasas al siguiente! No arrastras materias reprobadas.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Áreas de Conocimiento */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-2">
              ¿Qué vas a aprender? (Las 5 Áreas de Poder)
            </h2>
            <p className="text-foreground/80 mb-8">
              Estos 22 módulos cubren 5 campos disciplinares fundamentales para tu vida y trabajo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areasConocimiento.map((area) => (
                <Card key={area.nombre} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-primary text-lg">{area.nombre}</h4>
                    <p className="text-foreground/70 mt-1">{area.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ruta de Ascenso */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4 text-primary italic">
              Tu Ruta de Ascenso (Nivel por Nivel)
            </h2>
            <p className="text-center text-foreground/80 mb-10">
              El plan está estructurado para que avances con paso firme. No te lanzaremos a cálculo integral el primer día.
            </p>

            <div className="space-y-6">
              {niveles.map((item, index) => (
                <div key={item.nivel} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {niveles.length - index}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{item.nivel}</h4>
                    <p className="text-foreground/70 mt-1">{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Ibérica? */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-6">
              ¿Por qué te conviene este plan con Ibérica?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ventajas.map((ventaja) => (
                <Card key={ventaja.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      {ventaja.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{ventaja.title}</h4>
                      <p className="text-foreground/70 mt-1 text-sm">{ventaja.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema Digital */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4 text-primary">
              Nuestro Ecosistema Educativo Digital
            </h2>
            <p className="text-center text-foreground/80 mb-10 max-w-2xl mx-auto">
              En Ibérica, no solo te damos clases; ponemos en tus manos las mejores herramientas tecnológicas para que estudies dónde y cuándo quieras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Laptop className="h-6 w-6 text-primary" />
                    <h3 className="font-headline font-bold text-lg">Plataforma LMS</h3>
                  </div>
                  <p className="text-foreground/80 text-sm text-justify">
                    Campus Ibérica es tu centro de estudio principal: aquí encuentras tus cursos estructurados por módulos, libros y guías digitales, actividades, seguimiento de tu avance y, en general, todo lo necesario para aprender con orden y continuidad.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="font-headline font-bold text-lg">Comunidad de Aprendizaje Virtual (CAV)</h3>
                  </div>
                  <p className="text-foreground/80 text-sm text-justify">
                    Tu Aula Sin Fronteras es la experiencia viva de la comunidad: con Google Classroom y Meet organizas la comunicación, recibes avisos, entregas y te conectas a clases, asesorías y webinars desde cualquier dispositivo.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 shadow-md">
              <CardContent className="p-6">
                <p className="text-foreground/80 text-justify">
                  Y para potenciar tu desempeño, integramos IA al estudio: con Gemini y NotebookLM tienes un tutor 24/7 que te ayuda a comprender, escribir mejor y convertir lecturas en resúmenes y guías de repaso.
                </p>
                <p className="mt-4 text-foreground/80 text-justify">
                  En conjunto, nuestro campus Ibérica te estructura y la Comunidad Virtual te conecta y te impulsa: estudias con método, aprendes acompañado y demuestras resultados con evidencia real.
                </p>
                <p className="mt-4 text-center font-semibold text-primary italic text-lg">
                  &ldquo;Aprende, Conéctate, Demuestra, Avanza&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plataformas Educativas */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4 text-primary">
              Campus Ibérica
            </h2>
            <p className="text-center text-xl text-foreground/70 mb-2">LMS — Plataforma de Estudiantes</p>
            <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
              Organizamos tu aprendizaje en las plataformas más robustas del mercado educativo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Plataformas */}
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  {/* Google Meet */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#00897B"/>
                        <path d="M15.5 8.5l2.5-2v11l-2.5-2v-7z" fill="white"/>
                        <rect x="6" y="8" width="9.5" height="8" rx="1.5" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-xs text-foreground/70 text-center font-medium">Google Meet</span>
                  </div>
                  {/* NotebookLM */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#7B1FA2"/>
                        <path d="M8 6h8a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V7a1 1 0 011-1z" fill="white"/>
                        <path d="M9.5 9h5M9.5 11.5h5M9.5 14h3" stroke="#7B1FA2" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-xs text-foreground/70 text-center font-medium">NotebookLM</span>
                  </div>
                  {/* Google Classroom */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#0F9D58"/>
                        <circle cx="12" cy="10" r="2.5" fill="white"/>
                        <path d="M8 16c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="white" strokeWidth="1.5" fill="none"/>
                        <circle cx="17" cy="11" r="1.5" fill="white" opacity="0.7"/>
                        <circle cx="7" cy="11" r="1.5" fill="white" opacity="0.7"/>
                      </svg>
                    </div>
                    <span className="text-xs text-foreground/70 text-center font-medium">Google Classroom</span>
                  </div>
                  {/* Google Drive */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M8.01 2.89L2.63 12.55l2.72 4.74h5.38L16 8.63 13.28 3.89H8.01z" fill="#0066DA"/>
                        <path d="M16 8.63l-5.27 8.66h5.38l5.38-8.66H16z" fill="#00AC47"/>
                        <path d="M7.99 2.89l5.29 8.66-2.72 4.74L5.35 7.63l2.64-4.74z" fill="#EA4335"/>
                        <path d="M10.56 17.29H5.35l-2.72 4.74h10.65l2.72-4.74h-5.44z" fill="#00832D"/>
                        <path d="M16 8.63h5.49l-2.72-4.74H13.28L16 8.63z" fill="#2684FC"/>
                        <path d="M13.28 3.89L8.01 2.89l5.27 8.66 2.72-4.74-2.72-2.92z" fill="#FFBA00"/>
                      </svg>
                    </div>
                    <span className="text-xs text-foreground/70 text-center font-medium">Google Drive</span>
                  </div>
                </div>
              </div>

              {/* Soporte Institucional */}
              <Card className="shadow-md border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="h-6 w-6 text-primary" />
                    <h3 className="font-headline font-bold text-lg text-primary">Soporte Institucional</h3>
                  </div>
                  <p className="text-foreground/80 text-sm text-justify mb-4">
                    Si presentas dificultades para acceder a las plataformas o requieres asistencia técnica, puedes comunicarte con el equipo de soporte institucional.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2 underline">Horario de atención</h4>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      <li>Lunes a viernes, de 8:00 a 18:00 hrs.</li>
                      <li>Sábados, de 8:00 a 14:00 hrs.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos de Inscripción */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10 text-foreground">
              Requisitos de Inscripción
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Requisitos */}
              <div>
                <p className="text-foreground/80 text-justify mb-6">
                  Las y los interesados pueden realizar la inscripción cualquier día hábil del año ya que no se maneja ningún tipo de convocatoria, el trámite es gratuito, se requiere que presenten en original:
                </p>
                <ol className="space-y-3 list-decimal list-inside text-foreground/80">
                  <li>Acta de nacimiento (por ambos lados de ser el caso).</li>
                  <li>Clave Única de Registro de Población (CURP) vigente.</li>
                  <li>Certificado de educación secundaria (por ambos lados en su caso).</li>
                  <li>INE (mayor de edad, en caso de menores copia de la credencial del padre, madre o persona tutora legal).</li>
                  <li>
                    Carta de conocimiento y Reglamento Interno para la Convivencia Armónica del Estudiantado en el Centro de asesoría Ibérica:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-foreground/70">
                      <li>Carta de Consentimiento</li>
                      <li>Reglamento Interno Ibérica</li>
                    </ul>
                  </li>
                  <li>Equivalencia o Revalidación de Estudios y Certificado parcial, en caso de tener estudios de bachillerato inconclusos.</li>
                  <li>
                    Fotografía con las siguientes características:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-foreground/70">
                      <li>Formato: JPG (preferentemente) o PNG</li>
                      <li>Tamaño: 25 mm (ancho) x 32 mm (alto)</li>
                      <li>Resolución: 300 DPI</li>
                      <li>Tamaño del archivo: entre 100 y 200 KB</li>
                      <li>A color, reciente, de frente y con fondo claro</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-4 text-sm text-foreground/60 italic">
                  Es importante que la imagen sea clara y nítida para garantizar su correcta visualización en la credencial electrónica.
                </p>
              </div>

              {/* CTA de contacto */}
              <div>
                <Card className="shadow-lg border-primary/20 sticky top-24">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-headline font-bold text-primary mb-2">Más Información</h3>
                    <p className="text-foreground/70 mb-6">
                      ¿Tienes dudas sobre el proceso de inscripción? Contáctanos y te guiaremos paso a paso.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Inscripción gratuita</p>
                          <p className="text-foreground/60 text-sm">Cualquier día hábil del año, sin convocatoria.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Camera className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Documentos en original</p>
                          <p className="text-foreground/60 text-sm">Ten listos tus documentos para agilizar el proceso.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CircleDot className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm">Inicio inmediato</p>
                          <p className="text-foreground/60 text-sm">Una vez inscrito, puedes comenzar de inmediato.</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contacto">Solicitar Información</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary italic mb-4">
            Es tu carrera, es tu ritmo. ¡¡Vamos por ese primer módulo!!
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto mb-8">
            Da el primer paso hacia tu bachillerato oficial. Contáctanos y te guiaremos en todo el proceso.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
