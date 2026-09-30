import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Users,
  ShieldAlert,
  HeartHandshake,
  Briefcase,
  Layers,
  Laptop,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
  FileCheck,
  Building2,
  Cpu,
  Compass,
  Check,
  Award,
  ChevronRight,
  Clock,
  Shield,
  FileText,
  PhoneCall,
  HelpCircle,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { CtaSection } from '@/components/shared/cta-section';
import { ProgramCatalog } from './program-catalog';

export const metadata: Metadata = {
  title: 'Educación Continua — Cursos, Talleres y Diplomados | ISCOBusiness',
  description:
    'Cursos, talleres, diplomados y capacitación continua con registro oficial SECTEI. Modalidades virtual en línea, presencial y mixta. Formación de capital humano, protección civil, inclusión y desarrollo comunitario.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx/educacion-continua',
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATOS DE EDUCACIÓN CONTINUA — ISCOBUSINESS
   Cursos, Talleres, Diplomados y Capacitación In-Company
   ═══════════════════════════════════════════════════════════════ */

// ── 4 PILARES DEL MODELO FORMATIVO (COMPETENCIAS INTEGRALES) ──
const formativeModel = [
  {
    key: 'SABER',
    title: 'Conocimiento y Fundamentos',
    desc: 'Comprender conceptos clave, principios teóricos, normatividades aplicables y metodologías de vanguardia en cada disciplina.',
    code: 'PILAR 01',
    accentColor: 'text-[#38bdf8]',
  },
  {
    key: 'SABER HACER',
    title: 'Desempeño y Práctica Real',
    desc: 'Transformar el conocimiento en acciones operativas efectivas, procedimientos técnicos, resolución de problemas y productos tangibles.',
    code: 'PILAR 02',
    accentColor: 'text-[#34d399]',
  },
  {
    key: 'SABER SER',
    title: 'Actitudes y Valores Éticos',
    desc: 'Fortalecer la integridad profesional, el sentido de responsabilidad social, el compromiso humanista y la resiliencia en el entorno laboral.',
    code: 'PILAR 03',
    accentColor: 'text-[#fbbf24]',
  },
  {
    key: 'SABER CONVIVIR',
    title: 'Colaboración y Diálogo Empático',
    desc: 'Desarrollar comunicación asertiva, escucha activa, trabajo en equipo interdisciplinario y respeto irrenunciable a la diversidad.',
    code: 'PILAR 04',
    accentColor: 'text-[#c084fc]',
  },
];

// ── 5 LÍNEAS DE OFERTA FORMATIVA ESTRATÉGICA (PATRÓN 2 EJECUTIVO) ──
const fiveLines = [
  {
    icon: BookOpen,
    code: 'LÍNEA 01',
    title: 'Educación Continua y Extensión Académica',
    badge: 'Abierto a todo público',
    desc: 'Diplomados, cursos, talleres y seminarios diseñados para profesionistas, docentes, estudiantes y personas interesadas en su constante actualización y superación personal.',
    borderColor: 'border-t-[#0d9488]', // Verde Esmeralda / Teal
    iconColor: 'text-[#0d9488]',
    accentBg: 'bg-teal-50',
  },
  {
    icon: Users,
    code: 'LÍNEA 02',
    title: 'Formación de Capital Humano e In-Company',
    badge: 'Empresas e Instituciones',
    desc: 'Liderazgo directivo, formación de formadores, competencias digitales, cultura organizacional y servicio de excelencia con programas estructurados a la medida de tu equipo.',
    borderColor: 'border-t-[#075fba]', // Azul Institucional
    iconColor: 'text-[#075fba]',
    accentBg: 'bg-blue-50',
  },
  {
    icon: HeartHandshake,
    code: 'LÍNEA 03',
    title: 'Inclusión, Accesibilidad y Derechos Humanos',
    badge: 'Enfoque Social y DUA',
    desc: 'Diseño Universal para el Aprendizaje (DUA), ajustes razonables, accesibilidad física y cognitiva, y atención digna a grupos prioritarios con perspectiva de equidad e inclusión.',
    borderColor: 'border-t-[#7c3aed]', // Violeta
    iconColor: 'text-[#7c3aed]',
    accentBg: 'bg-purple-50',
  },
  {
    icon: ShieldAlert,
    code: 'LÍNEA 04',
    title: 'Protección Civil y Gestión Integral del Riesgo',
    badge: 'Programas con Registro SECTEI',
    desc: 'Primeros auxilios básicos, coordinación de unidades internas, elaboración de programas internos y especiales de protección civil, y planes de continuidad de operaciones.',
    borderColor: 'border-t-[#e11d48]', // Rojo / Protección Civil
    iconColor: 'text-[#e11d48]',
    accentBg: 'bg-rose-50',
  },
  {
    icon: Briefcase,
    code: 'LÍNEA 05',
    title: 'Educación y Emprendimiento Comunitario',
    badge: 'Economía Popular y Solidaria',
    desc: 'Formación para personas adultas, proyectos productivos sustentables, educación financiera básica y fortalecimiento de oficios para impulsar el bienestar de las familias.',
    borderColor: 'border-t-[#d97706]', // Ámbar / Dorado
    iconColor: 'text-[#d97706]',
    accentBg: 'bg-amber-50',
  },
];

// ── PREGUNTAS FRECUENTES (HUMANIZADAS Y PRECISAS) ──
const faqItems = [
  {
    question: '¿Qué valor tienen las constancias y diplomas de Educación Continua de ISCOBusiness?',
    answer:
      'Todos nuestros programas emiten constancias o diplomas institucionales con valor curricular, especificando el número de horas académicas, los módulos acreditados y el sello de ISCOBusiness (International Supreme Council for Social, Business and Industrial Development, A.C.). Además, los cursos del área de protección civil cuentan con registro oficial avalado por la Secretaría de Educación, Ciencia, Tecnología e Innovación de la Ciudad de México (SECTEI CDMX).',
  },
  {
    question: '¿Cuál es la diferencia entre cursar un diplomado de Educación Continua y una Certificación CONOCER?',
    answer:
      'La Educación Continua se enfoca en el proceso de enseñanza-aprendizaje: adquirir nuevos conocimientos, metodologías y habilidades a través de clases, materiales y asesorías docentes. Por su parte, la Certificación de Competencias ante el CONOCER (mediante nuestra Entidad ECE760-26) es un proceso de evaluación formal donde demuestras que sabes hacer una función específica conforme a un Estándar oficial, obteniendo un Certificado con validez nacional en el Registro RENAC.',
  },
  {
    question: '¿Cómo funciona la modalidad virtual en línea?',
    answer:
      'Nuestros programas virtuales se cursan a través de un aula digital intuitiva y accesible. Combinan recursos multimedia interactivos, lecturas oficiales, actividades prácticas y sesiones síncronas de asesoría docente en vivo (las cuales quedan grabadas para que puedas consultarlas en cualquier momento). Está diseñado específicamente para personas que trabajan y requieren flexibilidad de horarios.',
  },
  {
    question: '¿Puedo solicitar un curso o diplomado a la medida para mi empresa o institución educativa?',
    answer:
      'Sí. Desarrollamos planes de capacitación in-company adaptados a los retos específicos de tu centro de trabajo. Realizamos un Diagnóstico de Necesidades de Capacitación (DNC), adaptamos los contenidos normativos a tus instalaciones y calendarizamos las sesiones en modalidad presencial, virtual o híbrida según tus turnos operativos.',
  },
  {
    question: '¿Qué requisitos necesito para inscribirme a un curso o diplomado?',
    answer:
      'Para la mayoría de los cursos de actualización y talleres prácticos no se exige un grado académico específico, únicamente interés legítimo por aprender, identificación oficial y comprobante de inscripción. Para diplomados de especialización técnica o pedagógica, se recomienda contar con antecedentes afines en el área (laborales o escolares) para aprovechar al máximo las evidencias del programa.',
  },
  {
    question: '¿Los programas de protección civil cuentan con validez ante las autoridades?',
    answer:
      'Nuestros cursos técnicos en protección civil están formulados con estricto apego a los lineamientos normativos de la Ley de Gestión Integral de Riesgos y Protección Civil y cuentan con registros formales ante la SECTEI de la Ciudad de México (claves SECTEI/FC/001/2025 a SECTEI/FC/004/2025), garantizando rigor metodológico y reconocimiento formativo.',
  },
];

export default function EducacionContinuaPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. HERO EDUCACIÓN CONTINUA ──────────────────────── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/fcs-educacion-continua.jpg"
        backgroundOpacity={0.80}
        title="Aprender continuamente transforma lo que puedes hacer."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 01. Propósito */}
            <a
              href="#proposito"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Propósito</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Sentido Humano
              </span>
            </a>

            {/* 02. Modelo Formativo */}
            <a
              href="#modelo"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Modelo Formativo</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Aprender Haciendo
              </span>
            </a>

            {/* 03. Líneas Temáticas */}
            <a
              href="#lineas"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span>Líneas Temáticas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                5 Ejes Formativos
              </span>
            </a>

            {/* 04. Modalidades */}
            <a
              href="#modalidades"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span>Modalidades</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Presencial y Virtual
              </span>
            </a>

            {/* 05. Empresas */}
            <a
              href="#empresas"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>Empresas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Planes a la Medida
              </span>
            </a>

            {/* 06. Catálogo */}
            <a
              href="#catalogo"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span>Catálogo</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Cursos y Diplomados
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

      {/* ── 3. SECCIÓN: EDUCACIÓN PARA SEGUIR AVANZANDO ───────── */}
      <section id="proposito" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
                Formación Pertinente y Humana
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                Tu crecimiento personal y profesional no tiene por qué detenerse
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                El entorno laboral evoluciona velozmente, surgen nuevas normativas y siempre hay competencias valiosas por descubrir. Actualizarte continuamente es una decisión que abre oportunidades reales y fortalece tu seguridad. En ISCOBusiness no creemos en cursos improvisados de teoría abstracta: creamos experiencias participativas orientadas a resolver problemas cotidianos con rigor técnico y calidez docente.
              </p>
              <div className="p-5 bg-teal-50/70 border-l-4 border-l-[#0d9488] rounded-r-2xl text-xs md:text-sm text-slate-800 leading-relaxed italic shadow-2xs">
                "Aprender no significa acumular diplomas en un cajón. Significa ser capaz de resolver retos reales, tomar mejores decisiones y cuidar con conocimiento a las personas que te rodean."
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Actualizar conocimientos',
                  desc: 'Dominar las normativas más recientes y metodologías vigentes de tu campo profesional.',
                },
                {
                  title: 'Nuevas habilidades prácticas',
                  desc: 'Aprender herramientas tecnológicas, técnicas de comunicación y gestión de contingencias.',
                },
                {
                  title: 'Perfil curricular competitivo',
                  desc: 'Respaldar tu trayectoria con constancias institucionales y registros oficiales reconocidos.',
                },
                {
                  title: 'Nuevas responsabilidades',
                  desc: 'Prepararte sólidamente para ascensos laborales, supervisión y liderazgo de brigadas.',
                },
                {
                  title: 'Equipos más preparados',
                  desc: 'Fortalecer el desempeño colectivo y la prevención de riesgos en centros de trabajo.',
                },
                {
                  title: 'Desarrollo humano continuo',
                  desc: 'Satisfacer tu anhelo personal de aprender y servir con eficacia a tu comunidad.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0d9488]" strokeWidth={2} />
                    </div>
                    <h4 className="text-xs font-mono font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SECCIÓN: DATA STRIP MONUMENTAL (PATRÓN 4) ──────── */}
      <section id="indicadores" className="py-12 md:py-16 bg-[#083665] text-white border-y border-slate-800 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {/* Stat 1 */}
            <div className="p-4 md:px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-[#34d399] tracking-tight mb-2 font-sans">
                4
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Registros Oficiales SECTEI
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Claves oficiales avaladas en CDMX
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-2 font-sans">
                120+
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Horas Curriculares
              </div>
              <div className="text-xs text-slate-300 font-sans">
                En diplomados de especialización
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#fbbf24] tracking-tight mb-2 font-sans">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Virtual en Línea y Mixta
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Flexible para personas que trabajan
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2 font-sans">
                4
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Pilares Formativos
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Saber, Saber Hacer, Ser y Convivir
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECCIÓN: MODELO PEDAGÓGICO INTEGRAL ───────────── */}
      <section id="modelo" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
              Modelo Formativo por Competencias
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Conocimiento + Práctica + Actitud + Colaboración
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Adoptamos y profundizamos el enfoque de competencias laborales y humanas: preparamos personas capaces de incidir positivamente en su entorno con destrezas aplicables y valores éticos sólidos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {formativeModel.map((pilar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/90 border-t-4 border-t-[#0d9488] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 font-mono font-bold text-xs shadow-2xs group-hover:bg-teal-50 transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/80">
                      {pilar.key}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-1 block">
                    {pilar.code}
                  </span>
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0d9488] transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0d9488]" />
                  Competencia evaluable en aula
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto shadow-2xs">
            <p className="text-sm md:text-base font-extrabold text-slate-900 italic">
              "Aprender no significa saber de memoria más datos. Significa ser capaz de hacer más, hacerlo con excelencia y ponerlo al servicio de la comunidad."
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN: 5 LÍNEAS DE OFERTA FORMATIVA (PATRÓN 2) ── */}
      <section id="lineas" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
              Campos Estratégicos de Capacitación
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Encuentra una ruta formativa acorde a tus metas
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Nuestra oferta educativa se estructura en 5 campos estratégicos orientados al impacto social, a la seguridad ciudadana y al desarrollo profesional continuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiveLines.map((line, idx) => {
              const Icon = line.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 border-t-4 ${line.borderColor} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors flex-shrink-0">
                        <Icon className={`w-5 h-5 ${line.iconColor}`} strokeWidth={1.75} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                          {line.code}
                        </span>
                        <span className="text-[11px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline-block">
                          {line.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0d9488] transition-colors leading-snug">
                      {line.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                      {line.desc}
                    </p>
                  </div>

                  <a
                    href="#catalogo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d9488] hover:underline pt-4 border-t border-slate-100"
                  >
                    <span>Ver programas disponibles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN: FORMATOS Y MODALIDADES FLEXIBLES ──────── */}
      <section id="modalidades" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Formatos */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
                Diversidad de Formatos
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Programas estructurados que se adaptan a tu agenda
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Diseñamos distintas duraciones e intensidades de aprendizaje para responder tanto a necesidades técnicas inmediatas como a especializaciones curriculares profundas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    code: '01',
                    title: 'Diplomados',
                    desc: 'Programas de alta especialización integrados por módulos progresivos con acompañamiento docente continuo (80 a 140 hrs).',
                  },
                  {
                    code: '02',
                    title: 'Cursos de Actualización',
                    desc: 'Capacitación intensiva y práctica enfocada en normativas vigentes, protocolos técnicos y destrezas específicas (20 a 40 hrs).',
                  },
                  {
                    code: '03',
                    title: 'Talleres de Aplicación',
                    desc: 'Dinámicas inmersivas de "aprender haciendo" centradas en la generación de productos y evidencias tangibles (10 a 24 hrs).',
                  },
                  {
                    code: '04',
                    title: 'Seminarios y Conferencias',
                    desc: 'Encuentros de diálogo, difusión científica y análisis con especialistas de alto nivel en temas emergentes.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        FORMATO {item.code}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[#0d9488] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modalidades y Metodología */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs">
                    <Laptop className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-teal-800 uppercase block">
                      FLEXIBILIDAD
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900">Modalidades de estudio</h4>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                    <strong className="text-slate-900 font-bold block mb-0.5">En línea (Virtual):</strong>
                    Aula digital con acceso las 24 horas, foros de asesoría docente y sesiones síncronas en vivo grabadas para repaso posterior.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                    <strong className="text-slate-900 font-bold block mb-0.5">Presencial:</strong>
                    Interacción directa con instructores especialistas, prácticas de laboratorio y talleres vivenciales en nuestras sedes.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                    <strong className="text-slate-900 font-bold block mb-0.5">Mixta (Híbrida):</strong>
                    Lo mejor de dos mundos: teoría y lecturas a tu propio ritmo en plataforma, complementadas con sesiones prácticas presenciales.
                  </div>
                </div>
              </div>

              <div className="bg-[#083665] text-white p-6 md:p-7 rounded-2xl border border-slate-800 shadow-md">
                <span className="text-[11px] font-mono font-bold text-[#38bdf8] uppercase tracking-wider mb-2 block">
                  METODOLOGÍA ANDRAGÓGICA ACTIVA
                </span>
                <h4 className="text-base md:text-lg font-extrabold text-white mb-2">
                  Aprender haciendo: casos, simulaciones y evidencias reales
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No nos limitamos a la memorización teórica. Cada sesión promueve el análisis de situaciones laborales auténticas, la formulación de planes de respuesta y el desarrollo de evidencias operativas útiles para tu centro de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SECCIÓN: DIFERENCIACIÓN (FORMACIÓN VS. CONOCER) ── */}
      <section id="diferenciacion" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
              Certeza y Claridad Normativa
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Puedes capacitarte, certificarte oficialmente o integrar ambas rutas
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              En ISCOBusiness distinguimos con total transparencia entre aprender una disciplina formativa y evaluarla para obtener un Certificado de Competencia Laboral oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Opción 1: Educación Continua */}
            <div className="p-7 rounded-2xl border border-slate-200/90 border-t-4 border-t-[#0d9488] bg-slate-50/70 shadow-2xs hover:shadow-xs transition-all">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs">
                  <BookOpen className="w-5 h-5 text-[#0d9488]" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-900 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/90">
                  RUTA 01 · EDUCACIÓN CONTINUA
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Aprender y desarrollar competencias
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">
                El propósito es adquirir saberes nuevos, actualizarte ante cambios normativos y perfeccionar habilidades operativas mediante cursos, talleres y diplomados con tutoría docente y retroalimentación continua.
              </p>
              <div className="text-xs font-mono font-semibold text-teal-900 flex items-center gap-1.5 pt-4 border-t border-slate-200/70">
                <Check className="w-4 h-4 text-[#0d9488]" />
                Se emite constancia o diploma con valor curricular institucional
              </div>
            </div>

            {/* Opción 2: Evaluación CONOCER */}
            <div className="p-7 rounded-2xl border border-slate-200/90 border-t-4 border-t-[#7c3aed] bg-slate-50/70 shadow-2xs hover:shadow-xs transition-all">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs">
                  <Award className="w-5 h-5 text-[#7c3aed]" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-mono font-bold text-purple-900 bg-purple-50 px-2.5 py-1 rounded border border-purple-200/90">
                  RUTA 02 · EVALUACIÓN CONOCER
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Demostrar y certificar saberes adquiridos
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">
                Proceso normativo de evaluación formal ante nuestra Entidad de Certificación y Evaluación <strong>ECE760-26</strong> para demostrar que dominas un Estándar de Competencia oficial con validez SEP-CONOCER en toda la República.
              </p>
              <div className="text-xs font-mono font-semibold text-purple-900 flex items-center gap-1.5 pt-4 border-t border-slate-200/70">
                <Check className="w-4 h-4 text-[#7c3aed]" />
                Se expide Certificado de Competencia Laboral oficial en RENAC
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs font-mono text-slate-500 max-w-xl mx-auto">
            * Cursar un programa de educación continua no equivale de forma automática a un certificado de competencia CONOCER, a menos que el participante presente y concluya satisfactoriamente el proceso de evaluación normado correspondiente.
          </div>
        </div>
      </section>

      {/* ── 9. SECCIÓN: CAPACITACIÓN PARA EMPRESAS E INSTITUCIONES ─ */}
      <section id="empresas" className="section-padding bg-[#083665] text-white scroll-mt-28 border-b border-slate-800">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34d399] bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
                Soluciones Corporativas e In-Company
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
                Capacitación diseñada a la medida de tu organización
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
                Desarrollamos planes formativos a la medida para empresas, organismos públicos e instituciones educativas que buscan profesionalizar a su personal, mitigar riesgos operativos y alcanzar metas estratégicas con evidencia medible.
              </p>

              <div className="space-y-3 text-xs text-slate-200 mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Diagnóstico de Necesidades de Capacitación (DNC) sin costo inicial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Diseño curricular y materiales ajustados a los procesos internos de tu centro de trabajo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Flexibilidad de horarios y modalidad: in-company presencial o plataforma virtual dedicada</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Reportes ejecutivos de aprovechamiento, control de asistencia y carpetas de evidencia</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto?servicio=capacitacion-empresarial"
                  className="btn-gold text-xs uppercase tracking-wider font-extrabold py-3 px-6 shadow-md"
                >
                  Solicitar propuesta corporativa
                </Link>
                <Link
                  href="/vinculacion"
                  className="btn-secondary text-xs uppercase tracking-wider font-bold py-3 px-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Mesa de Vinculación Institucional
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl border border-slate-700/80 shadow-md">
              <h3 className="text-lg font-extrabold text-white mb-4 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#fbbf24]" />
                Áreas frecuentes de capacitación empresarial
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <strong className="text-white block mb-1 font-bold text-sm">Mandos Medios</strong>
                  Liderazgo humanista, retroalimentación efectiva, supervisión operativa y manejo constructivo de conflictos.
                </div>
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <strong className="text-white block mb-1 font-bold text-sm">Protección Civil</strong>
                  Primeros auxilios básicos, brigadas de evacuación, simulacros y dictamen de riesgos en el inmueble.
                </div>
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <strong className="text-white block mb-1 font-bold text-sm">Atención y Servicio</strong>
                  Experiencia del usuario, calidad en el trato, comunicación institucional y resolución asertiva de quejas.
                </div>
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80">
                  <strong className="text-white block mb-1 font-bold text-sm">Formadores Internos</strong>
                  Técnicas didácticas andragógicas, diseño de materiales y evaluación para instructores internos de la empresa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. SECCIÓN: CATÁLOGO INTERACTIVO DE PROGRAMAS ────── */}
      <section id="catalogo" className="section-padding bg-slate-50/70 scroll-mt-28 border-b border-slate-200/80">
        <div className="shell">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
              Oferta Formativa Vigente
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Explora nuestros cursos, talleres y diplomados
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Filtra por área temática, modalidad o busca directamente el tema que deseas desarrollar para consultar detalles de temarios, constancias e inscripciones.
            </p>
          </div>

          <ProgramCatalog />
        </div>
      </section>

      {/* ── 11. SECCIÓN: PREGUNTAS FRECUENTES (FAQ) ──────────── */}
      <section id="preguntas" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200/90 inline-block mb-3">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Resolvemos tus dudas sobre Educación Continua
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                Conoce los detalles sobre valor curricular, modalidades de impartición, registros oficiales y esquemas de inscripción antes de iniciar.
              </p>
            </div>
            <div>
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. CIERRE INSTITUCIONAL (CTA SECTION) ───────────── */}
      <CtaSection
        title="El aprendizaje puede acompañarte durante toda la vida."
        subtitle="Cada nueva competencia que desarrollas se convierte en una herramienta tangible para avanzar profesionalmente, resolver nuevos retos y generar impacto en tu comunidad."
        buttons={[
          {
            label: 'Explorar catálogo de programas',
            href: '#catalogo',
            variant: 'gold',
          },
          {
            label: 'Solicitar propuesta empresarial',
            href: '/contacto?servicio=capacitacion-empresarial',
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
