import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Compass,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Sparkles,
  HelpCircle,
  Layers,
  Award,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronRight,
  UserCheck,
  Briefcase,
  Users,
  FileText,
  HeartHandshake,
  Calendar,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { CtaSection } from '@/components/shared/cta-section';
import { PreRegistrationForm } from './pre-registration-form';

export const metadata: Metadata = {
  title: 'Centro de Asesoría — Instituto Ibérica | Bachillerato Modular',
  description:
    'Acompañamiento académico, tutoría docente y asesoría para bachillerato modular. Conoce el Centro de Asesoría de Instituto Ibérica, el plan oficial de 22 módulos y la preparación para el Acuerdo 286 de la SEP.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx/centro-de-asesoria',
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATOS DEL CENTRO DE ASESORÍA — INSTITUTO IBÉRICA
   Plan Modular de 22 Módulos Oficiales y Preparación Acuerdo 286
   ═══════════════════════════════════════════════════════════════ */

// ── 6 ÁREAS FORMATIVAS DEL PLAN MODULAR (PATRÓN 2 EJECUTIVO) ──
const modularAreas = [
  {
    icon: BookOpen,
    code: 'ÁREA 01',
    name: 'Comunicación',
    modules: 4,
    description:
      'Lenguaje oral y escrito, redacción clara, comprensión lectora crítica, idioma inglés básico y tecnologías de la información aplicadas.',
    borderColor: 'border-t-[#0284c7]', // Sky / Cian Centro de Asesoría
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200/90',
    iconColor: 'text-[#0284c7]',
  },
  {
    icon: Compass,
    code: 'ÁREA 02',
    name: 'Matemáticas',
    modules: 5,
    description:
      'Aritmética práctica, álgebra, geometría, trigonometría, probabilidad y razonamiento lógico-cuantitativo para resolver retos cotidianos.',
    borderColor: 'border-t-[#0d9488]', // Teal / Esmeralda
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200/90',
    iconColor: 'text-[#0d9488]',
  },
  {
    icon: Sparkles,
    code: 'ÁREA 03',
    name: 'Ciencias Experimentales',
    modules: 4,
    description:
      'Fundamentos de física, química elemental, biología y aplicación del método científico para comprender los fenómenos de nuestro entorno.',
    borderColor: 'border-t-[#06b6d4]', // Cyan vibrante
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200/90',
    iconColor: 'text-[#06b6d4]',
  },
  {
    icon: GraduationCap,
    code: 'ÁREA 04',
    name: 'Humanidades',
    modules: 3,
    description:
      'Ética para la convivencia ciudadana, filosofía formativa, apreciación artística y fortalecimiento del pensamiento crítico independiente.',
    borderColor: 'border-t-[#7c3aed]', // Violeta formativo
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200/90',
    iconColor: 'text-[#7c3aed]',
  },
  {
    icon: Users,
    code: 'ÁREA 05',
    name: 'Ciencias Sociales',
    modules: 5,
    description:
      'Historia de México contemporánea, estructura socioeconómica nacional, civismo, derechos humanos y metodología de investigación social.',
    borderColor: 'border-t-[#d97706]', // Ámbar / Dorado
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/90',
    iconColor: 'text-[#d97706]',
  },
  {
    icon: Briefcase,
    code: 'ÁREA 06',
    name: 'Componente Profesional (Informática)',
    modules: 1,
    description:
      'Módulo práctico enfocado en computación laboral, herramientas ofimáticas digitales y competencias tecnológicas para el trabajo digno.',
    borderColor: 'border-t-[#e11d48]', // Rose / Profesional
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200/90',
    iconColor: 'text-[#e11d48]',
  },
];

// ── 6 ETAPAS METODOLÓGICAS (PROCESS STEPS) ──
const studySteps = [
  {
    number: '01',
    title: 'Orientación y Diagnóstico',
    description:
      'Analizamos con calidez tus antecedentes escolares, escuchamos tus horarios y te recomendamos la ruta de estudio más conveniente para ti.',
  },
  {
    number: '02',
    title: 'Estudio Independiente',
    description:
      'Recibes guías oficiales, lecturas seleccionadas y materiales digitales para avanzar a tu propio paso en los horarios que decidas.',
  },
  {
    number: '03',
    title: 'Asesoría Pedagógica Cercana',
    description:
      'Nuestros docentes resuelven tus dudas con paciencia, te explican los temas con ejemplos cotidianos y dan seguimiento a tu esfuerzo.',
  },
  {
    number: '04',
    title: 'Preparación y Ensayos',
    description:
      'Practicas con simuladores y reactivos muestra para consolidar lo aprendido y acudir a tus evaluaciones con plena serenidad.',
  },
  {
    number: '05',
    title: 'Evaluación Parcial Programada',
    description:
      'Presentas la evaluación oficial correspondiente a tu módulo en las fechas calendarizadas por la autoridad educativa.',
  },
  {
    number: '06',
    title: 'Acreditación y Certificado Oficial',
    description:
      'Acreditas módulo por módulo hasta concluir los 22 requeridos para tramitar tu certificado de bachillerato con validez nacional.',
  },
];

// ── PREGUNTAS FRECUENTES (HUMANIZADAS Y PRECISAS) ──
const faqItems = [
  {
    question: '¿Qué es el Centro de Asesoría de Instituto Ibérica?',
    answer:
      'Es un espacio académico y pedagógico presencial y virtual que brinda tutoría, acompañamiento docente y orientación metodológica a jóvenes y personas adultas que desean acreditar su bachillerato modular de 22 módulos de la SEP o prepararse para evaluaciones bajo el Acuerdo 286, respetando sus tiempos familiares y laborales.',
  },
  {
    question: '¿Cómo funciona el plan de 22 módulos y en qué se diferencia de una preparatoria tradicional?',
    answer:
      'A diferencia del bachillerato escolarizado tradicional organizado por semestres y materias rígidas simultáneas, el modelo modular te permite avanzar cursando y acreditando un módulo a la vez. No repruebas un semestre completo ni pierdes un año: si un módulo requiere más tiempo de estudio, recibes asesoría pedagógica y presentas la evaluación cuando estés debidamente preparado.',
  },
  {
    question: '¿Tengo que asistir diariamente a clases en un horario fijo?',
    answer:
      'No. Este modelo es de modalidad no escolarizada, pensado para personas que trabajan o tienen responsabilidades familiares en casa. Tú decides cuántas horas a la semana dedicar al estudio de tus guías y libros oficiales, y programas tus sesiones de asesoría docente en Instituto Ibérica para resolver dudas específicas.',
  },
  {
    question: '¿Existe algún límite de edad para recibir asesoría y cursar el bachillerato?',
    answer:
      'En la educación no existe edad límite. En el Centro de Asesoría de Instituto Ibérica recibimos con respeto tanto a jóvenes que requieren flexibilidad horaria como a personas adultas que decidieron con orgullo retomar su meta formativa y obtener su certificado oficial de bachillerato.',
  },
  {
    question: '¿Qué es el Acuerdo 286 de la SEP y en qué se diferencia del Plan Modular?',
    answer:
      'El Acuerdo 286 es un procedimiento normativo oficial de la SEP que permite reconocer y validar conocimientos equivalentes al bachillerato a personas que aprendieron mediante la experiencia laboral o de forma autodidacta, a través de una evaluación global aplicada por Instituciones Evaluadoras autorizadas. En Instituto Ibérica brindamos el curso de preparación y alineación pedagógica para presentar dicha evaluación con éxito.',
  },
  {
    question: 'Si inicié la preparatoria en otra escuela pero quedó trunca, ¿pierdo mis materias?',
    answer:
      'No las pierdes. Si cuentas con certificado parcial o boletas oficiales emitidas por instituciones como CCH, ENP, CECyT, CETIS, CBTIS, Colegio de Bachilleres o preparatorias incorporadas, te asesoramos paso a paso para tramitar la equivalencia de estudios oficial ante la autoridad educativa correspondiente, evitando que repitas materias ya cursadas y aprobadas.',
  },
  {
    question: '¿El certificado de bachillerato tiene validez oficial para ingresar a la universidad?',
    answer:
      'Sí, cuenta con validez oficial plena en toda la República Mexicana. Al acreditar la totalidad de los módulos conforme a los lineamientos normativos de la Secretaría de Educación Pública, el certificado oficial emitido te permite continuar tus estudios en cualquier universidad pública o privada del país, o presentar tu documento para ascensos laborales.',
  },
];

export default function CentroDeAsesoriaPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. HERO CENTRO DE ASESORÍA ──────────────────────── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/fcs-educacion-prepa.jpg"
        backgroundOpacity={0.80}
        title="Tu educación puede continuar. A tu ritmo y con asesoría experta."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 01. Flexibilidad */}
            <a
              href="#flexibilidad"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Flexibilidad</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                A tu Propio Ritmo
              </span>
            </a>

            {/* 02. Plan Modular */}
            <a
              href="#plan-modular"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span>Plan Modular</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                22 Módulos SEP
              </span>
            </a>

            {/* 03. Metodología */}
            <a
              href="#metodologia"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Metodología</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Acompañamiento
              </span>
            </a>

            {/* 04. Para Quién Es */}
            <a
              href="#perfiles"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span>Para Quién Es</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Jóvenes y Adultos
              </span>
            </a>

            {/* 05. Dos Rutas */}
            <a
              href="#rutas"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Dos Rutas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Modular y Ac. 286
              </span>
            </a>

            {/* 06. Pre-registro */}
            <a
              href="#registro"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span>Pre-registro</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Asesoría Gratuita
              </span>
            </a>

            {/* 07. Preguntas */}
            <a
              href="#preguntas"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-slate-50/80 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300/80 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
                <span>Preguntas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Dudas Frecuentes
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. SECCIÓN: ALTERNATIVA FLEXIBLE ─────────────────── */}
      <section id="flexibilidad" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Educación Media Superior sin Barreras
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
              Estudiar también debe adaptarse a tu vida y a tu trabajo
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Nadie debería tener que elegir entre trabajar para sostener a su familia o superarse académicamente. El Centro de Asesoría de Instituto Ibérica te brinda acompañamiento tutorial no escolarizado, diseñado para que avances con autonomía, certidumbre y respeto a tus tiempos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#075fba] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                    <Clock className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                    SIN ATADURAS
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#075fba] transition-colors">
                  Sin horarios fijos ni asistencia diaria
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Decides en qué días y en qué horarios estudiar cada semana. El Centro de Asesoría te orienta para organizar tus horas libres de estudio independiente sin descuidar tu empleo ni tus compromisos familiares.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#075fba]" />
                Flexibilidad total para personas trabajadoras
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#0284c7] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                    <Layers className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                    PASO A PASO
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors">
                  Avanzas módulo por módulo
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No estás condicionado a calendarios rígidos de semestres. Preparas un módulo con el respaldo pedagógico de tus asesores y presentas la evaluación oficial cuando te sientas con plena seguridad y dominio del tema.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#0284c7]" />
                Acreditación progresiva sin presión de reprobación
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#d97706] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                    VALIDEZ SEP
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#d97706] transition-colors">
                  Validez oficial garantizada
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  El bachillerato modular cuenta con validez plena en toda la República Mexicana. Al acreditar tus 22 módulos, tu certificado oficial emitido por la autoridad te permite ingresar a universidades públicas o privadas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#d97706]" />
                Certificado oficial con validez nacional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SECCIÓN: INDICADORES CLAVE (PATRÓN 4 DATA STRIP) ── */}
      <section id="indicadores" className="py-12 md:py-16 bg-[#083665] text-white border-y border-slate-800 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {/* Stat 1 */}
            <div className="p-4 md:px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-2 font-sans">
                22
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Módulos en Total
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Mapa curricular integral oficial
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#fbbf24] tracking-tight mb-2 font-sans">
                21 + 1
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Campos Formativos
              </div>
              <div className="text-xs text-slate-300 font-sans">
                21 básicos + 1 capacitación laboral
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#34d399] tracking-tight mb-2 font-sans">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Flexible y a tu Ritmo
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Sin pérdida de semestres ni bajas
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2 font-sans">
                0 Límite
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                De Edad o Antecedentes
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Jóvenes y adultos con vocación de superarse
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECCIÓN: PLAN DE ESTUDIOS MODULAR (22 MÓDULOS) ── */}
      <section id="plan-modular" className="section-padding bg-slate-50/70 scroll-mt-28 border-b border-slate-200/80">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Mapa Curricular Oficial
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              22 módulos formativos para desarrollar competencias reales
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              El plan modular de bachillerato se estructura en campos de formación clave que te preparan para la vida ciudadana, el trabajo productivo y el ingreso seguro a la educación superior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {modularAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 border-t-4 ${area.borderColor} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                        <Icon className={`w-5 h-5 ${area.iconColor}`} strokeWidth={1.75} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                          {area.code}
                        </span>
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${area.badgeColor}`}>
                          {area.modules} {area.modules === 1 ? 'módulo' : 'módulos'}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0284c7] transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0284c7]" />
                    Asesoría y acompañamiento por módulo
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner de Consulta Curricular */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#0284c7] uppercase tracking-wider block mb-1">
                Orientación Curricular Gratuita
              </span>
              <h4 className="text-base md:text-lg font-extrabold text-slate-900 mb-1">
                ¿Deseas consultar el desglose temático de cada uno de los 22 módulos oficiales?
              </h4>
              <p className="text-sm text-slate-600">
                Solicita la guía informativa del mapa curricular y agenda tu primera sesión diagnóstica en el Centro de Asesoría.
              </p>
            </div>
            <a href="#registro" className="btn-primary shrink-0 text-sm">
              Solicitar orientación curricular
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN: METODOLOGÍA DE APRENDIZAJE ─────────────── */}
      <section id="metodologia" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Ruta Pedagógica Integral
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
              Una modalidad diseñada para el aprendizaje independiente y guiado
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              El Centro de Asesoría de Instituto Ibérica permite que las y los estudiantes desarrollen su preparación mediante estudio independiente, respaldados en todo momento por la orientación pedagógica y humana de asesores docentes dedicados.
            </p>
          </div>

          <ProcessSteps steps={studySteps} columns={3} accentColor="border-t-[#0284c7]" />
        </div>
      </section>

      {/* ── 7. SECCIÓN: ACOMPAÑAMIENTO HUMANO E INSTITUCIONAL ─── */}
      <section id="acompanamiento" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Sentido Humano y Empatía
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                No solo acceso: acompañamiento humano durante toda tu trayectoria
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                El mayor obstáculo al estudiar por cuenta propia no es la complejidad de los libros, sino la sensación de soledad frente a las dudas. En Instituto Ibérica concebimos el Centro de Asesoría como una comunidad de apoyo donde te escuchamos, explicamos con paciencia y celebramos contigo cada módulo acreditado.
              </p>
              <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 block mb-1 font-bold text-sm">
                  Nuestro compromiso pedagógico:
                </strong>
                Diseñamos estrategias de estudio individualizadas para que tu preparación sea sólida, útil para tu trabajo diario y orientada al éxito académico en cada examen oficial.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Orientación sin tecnicismos',
                  desc: 'Te explicamos con total transparencia cómo funciona cada módulo, los calendarios y el avance a tu propio ritmo sin enredos.',
                },
                {
                  title: 'Plan de estudio a tu medida',
                  desc: 'Organizamos contigo un calendario realista que respeta tus turnos de trabajo, descansos y tiempo en familia.',
                },
                {
                  title: 'Tutorías y asesoría cercana',
                  desc: 'Docentes capacitados para explicarte temas difíciles con paciencia y ejemplos prácticos de la vida real.',
                },
                {
                  title: 'Acompañamiento continuo',
                  desc: 'Damos seguimiento periódico a tu avance para motivarte a mantener el entusiasmo módulo tras módulo.',
                },
                {
                  title: 'Pruebas muestra y simuladores',
                  desc: 'Ejercicios de ensayo previo para que reconozcas el formato de reactivos y presentes tus exámenes con total tranquilidad.',
                },
                {
                  title: 'Guía para trámites oficiales',
                  desc: 'Te orientamos paso a paso para reunir tus documentos y gestionar tus trámites ante la autoridad con certeza legal.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 font-mono font-bold text-xs flex items-center justify-center mb-3 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1 group-hover:text-[#0284c7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SECCIÓN: ¿PARA QUIÉN ES EL CENTRO DE ASESORÍA? ─── */}
      <section id="perfiles" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Perfiles Reales de Estudiantes
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Una alternativa pensada para la vida real y sus circunstancias
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Cada persona llega al Centro de Asesoría con una historia distinta, pero con el mismo anhelo legítimo de superación. Aquí no hay juicios ni etiquetas: hay un camino de crecimiento abierto para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Briefcase,
                code: 'PERFIL 01',
                title: 'Personas que trabajan',
                desc: 'Trabajadores, comerciantes y jefes de familia que necesitan estudiar sin descuidar sus jornadas laborales ni el sustento del hogar.',
                borderColor: 'border-t-[#075fba]',
                iconColor: 'text-[#075fba]',
              },
              {
                icon: UserCheck,
                code: 'PERFIL 02',
                title: 'Personas adultas',
                desc: 'Hombres y mujeres que pausaron sus estudios en el pasado y hoy deciden con valentía cerrar ese ciclo con su certificado oficial.',
                borderColor: 'border-t-[#0284c7]',
                iconColor: 'text-[#0284c7]',
              },
              {
                icon: GraduationCap,
                code: 'PERFIL 03',
                title: 'Jóvenes con autonomía',
                desc: 'Jóvenes que aprenden mejor a su propio ritmo o que compaginan sus estudios con proyectos personales, artísticos o deportivos.',
                borderColor: 'border-t-[#7c3aed]',
                iconColor: 'text-[#7c3aed]',
              },
              {
                icon: Layers,
                code: 'PERFIL 04',
                title: 'Con estudios truncos',
                desc: 'Si cursaste semestres en otra preparatoria, tu esfuerzo anterior vale: te asesoramos para tramitar la equivalencia de materias correspondiente.',
                borderColor: 'border-t-[#d97706]',
                iconColor: 'text-[#d97706]',
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border border-slate-200/90 border-t-4 ${p.borderColor} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                        <Icon className={`w-5 h-5 ${p.iconColor}`} strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                        {p.code}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#0284c7] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#0284c7]" />
                    Orientación personalizada
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. SECCIÓN: DOS CAMINOS FORMATIVOS (MODULAR VS 286) ── */}
      <section id="rutas" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Rutas Formativas y Normativas
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
              Dos caminos formativos en el Centro de Asesoría
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Dependiendo de tu experiencia previa y tu tiempo disponible, podrás optar por el acompañamiento modular continuo o por el curso de alineación para la evaluación global.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Camino 1: Plan Modular */}
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200/90 border-t-4 border-t-[#0284c7] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#0284c7]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-md border border-slate-200/70">
                    RUTA 01 · MODULAR CONTINUO
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0284c7] transition-colors">
                  Bachillerato Modular — Centro de Asesoría
                </h3>
                <p className="text-xs font-mono font-bold text-[#0284c7] uppercase tracking-wider mb-4">
                  Avanza módulo por módulo · 22 módulos oficiales
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Ideal para quienes desean estudiar paso a paso, asistiendo a asesorías pedagógicas y acreditando evaluaciones parciales de forma continua. Permite organizar tu tiempo sin la presión de jugarse todo en un examen único.
                </p>
                <ul className="space-y-3 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>22 módulos en total (21 básicos + 1 componente profesional)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>Evaluaciones parciales calendarizadas por módulo</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>Estudio independiente con acompañamiento docente en Instituto Ibérica</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>Compatible con equivalencia de materias oficiales previas</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-300">
                  ESTADO: EN DESARROLLO
                </span>
                <a
                  href="#registro"
                  className="text-xs font-bold text-[#0284c7] flex items-center gap-1 hover:underline"
                >
                  Registrarme a esta vía <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Camino 2: Acuerdo 286 */}
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200/90 border-t-4 border-t-[#7c3aed] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                    <Award className="w-5 h-5 text-[#7c3aed]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-md border border-slate-200/70">
                    RUTA 02 · ACREDITACIÓN DE SABERES
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-[#7c3aed] transition-colors">
                  Acreditación de Conocimientos — Acuerdo 286
                </h3>
                <p className="text-xs font-mono font-bold text-[#7c3aed] uppercase tracking-wider mb-4">
                  Reconocimiento de saberes adquiridos · Examen global
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Dirigido a personas mayores de edad con conocimientos adquiridos de forma autodidacta o en la práctica laboral, que desean recibir un curso intensivo de alineación para presentar evaluaciones globales ante Instituciones Evaluadoras autorizadas.
                </p>
                <ul className="space-y-3 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                    <span>Evaluación global aplicada por Institución Evaluadora autorizada</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                    <span>Para mayores de edad con conocimientos formativos consolidados</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                    <span>Instituto Ibérica imparte el curso de alineación y asesoría</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0" />
                    <span>Simuladores de reactivos con enfoque analítico oficial</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-300">
                  ESTADO: EN GESTIÓN DE VINCULACIÓN
                </span>
                <a
                  href="#registro"
                  className="text-xs font-bold text-[#7c3aed] flex items-center gap-1 hover:underline"
                >
                  Consultar sobre esta vía <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tabla Comparativa */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs">
            <div className="p-6 bg-slate-50/80 border-b border-slate-200/80">
              <h4 className="text-base md:text-lg font-extrabold text-slate-900">
                Comparativo: Bachillerato Modular vs. Acuerdo 286
              </h4>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Dos modalidades normativas oficiales para perfiles, tiempos y objetivos diferentes.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/40">
                    <th className="p-4 font-extrabold text-slate-900 w-1/4">Criterio</th>
                    <th className="p-4 font-extrabold text-[#0284c7] w-3/8">
                      Bachillerato Modular (Centro de Asesoría)
                    </th>
                    <th className="p-4 font-extrabold text-[#7c3aed] w-3/8">
                      Acuerdo 286 (Acreditación)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Enfoque principal</td>
                    <td className="p-4">Trayectoria formativa modular progresiva paso a paso</td>
                    <td className="p-4">Acreditación integral de conocimientos ya adquiridos</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Estructura del modelo</td>
                    <td className="p-4">22 módulos por áreas de conocimiento con asesorías docentes</td>
                    <td className="p-4">Procedimiento de evaluación global normado</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Forma de avance</td>
                    <td className="p-4">Evaluaciones parciales calendarizadas por módulo</td>
                    <td className="p-4">Examen o proceso aplicado por Institución Evaluadora</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Ideal para</td>
                    <td className="p-4">Quien desea avanzar de forma continua, segura y guiada</td>
                    <td className="p-4">Quien posee sólida experiencia laboral previa o saberes autodidactas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Rol de Instituto Ibérica</td>
                    <td className="p-4">Centro de Asesoría y acompañamiento pedagógico docente</td>
                    <td className="p-4">Curso de alineación, preparación y vinculación institucional</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Estado en ISCOBusiness</td>
                    <td className="p-4 font-mono font-bold text-amber-900">
                      Proyecto en desarrollo · Convocatoria próxima
                    </td>
                    <td className="p-4 font-mono font-bold text-purple-900">
                      Proyecto de vinculación y sede en gestión
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. SECCIÓN: ESTUDIOS PREVIOS Y CERTEZA JURÍDICA ──── */}
      <section id="equivalencias" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Reconocimiento a tu Esfuerzo Previo
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                Tus estudios anteriores pueden ser reconocidos
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Si cursaste semestres en CCH, ENP, CECyT, CETIS, CBTIS, Colegio de Bachilleres u otras instituciones públicas o incorporadas, no tienes que empezar desde cero. Las personas que cuentan con certificado parcial oficial o boletas de calificaciones de nivel medio superior pueden solicitar la equivalencia correspondiente ante la autoridad educativa competente.
              </p>

              <div className="p-5 bg-amber-50/90 rounded-2xl border border-amber-300 text-xs text-amber-950 leading-relaxed mb-6 shadow-2xs">
                <strong className="block mb-1 font-bold text-sm text-amber-900">
                  Claridad y honestidad institucional:
                </strong>
                No prometemos "revalidaciones automáticas" ni trámites mágicos. La resolución de equivalencia o revalidación es una facultad exclusiva de las autoridades educativas competentes conforme a la ley. En el Centro de Asesoría de Instituto Ibérica te orientamos con probidad sobre cómo integrar tu expediente correctamente para que ninguna materia acreditada se pierda.
              </div>

              <a href="#registro" className="btn-secondary text-sm">
                Solicitar orientación sobre mis documentos
              </a>
            </div>

            {/* Tarjeta de Certeza Jurídica (Patrón 3) */}
            <div className="bg-[#083665] text-white p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-40 h-40 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 shadow-2xs mb-5">
                <ShieldCheck className="w-6 h-6 text-[#38bdf8]" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#38bdf8] uppercase tracking-wider block mb-2">
                Acompañamiento con Certeza Jurídica
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
                Estricto apego a la normatividad educativa oficial
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                Instituto Ibérica opera bajo principios irrenunciables de transparencia, ética y legalidad. Guiamos a las y los estudiantes para que su trayectoria concluya con un certificado emitido formalmente por la autoridad educativa, garantizando validez para ingresar a cualquier universidad del país.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Check className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Validez en toda la República</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Check className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Aceptado en universidades</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Check className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Asesoría pedagógica cercana</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Check className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>Sin intermediarios irregulares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. SECCIÓN: FORMULARIO DE REGISTRO DE ASESORÍA ──── */}
      <section id="registro" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Atención Personalizada Gratuita
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Centro de Asesoría — Instituto Ibérica
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Completa este breve formulario para formar parte de la lista informativa de apertura, resolver tus dudas sobre equivalencias y recibir orientación personalizada sobre tu bachillerato.
            </p>
          </div>

          <PreRegistrationForm />
        </div>
      </section>

      {/* ── 12. SECCIÓN: PREGUNTAS FRECUENTES (FAQ) ─────────── */}
      <section id="preguntas" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Resolvemos tus dudas sobre el Centro de Asesoría
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                Conoce con claridad todos los detalles sobre el modelo modular, las asesorías y la acreditación oficial antes de iniciar.
              </p>
            </div>
            <div>
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. CIERRE INSTITUCIONAL (CTA SECTION) ───────────── */}
      <CtaSection
        title="Tu historia educativa puede continuar hoy."
        subtitle="No importa si dejaste de estudiar hace algunos meses o varios años. Concluir tu bachillerato abre nuevas oportunidades personales, familiares y laborales. En el Centro de Asesoría de Instituto Ibérica queremos acompañarte paso a paso con respeto y calidez."
        buttons={[
          {
            label: 'Registrarme para recibir asesoría',
            href: '#registro',
            variant: 'gold',
          },
          {
            label: 'Contactar a un asesor',
            href: '/contacto',
            variant: 'secondary',
          },
        ]}
        backgroundImage="/img/cta-conversacion.jpg"
        backgroundOpacity={0.50}
        variant="light"
      />
    </div>
  );
}
