import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  GraduationCap,
  Users,
  Award,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Handshake,
  FileCheck2,
  Scale,
  Briefcase,
  Compass,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { CtaSection } from '@/components/shared/cta-section';
import { VinculacionForm } from './vinculacion-form';

export const metadata: Metadata = {
  title: 'Vinculación y Alianzas Solidarias',
  description:
    'Alianzas estratégicas y convenios de colaboración con empresas, instituciones educativas, sector público y organizaciones de la sociedad civil. Formación, certificación oficial y proyectos con impacto social.',
};

/* ═══════════════════════════════════════════════════════════════
   DATOS Y MODELOS DE VINCULACIÓN INSTITUCIONAL
   ISCOBusiness — Lógica cromática Dorado/Ámbar (#d97706)
   ═══════════════════════════════════════════════════════════════ */

// ── 6 SECTORES ESTRATÉGICOS (PATRÓN 2 EJECUTIVO) ──
const sectors = [
  {
    icon: Building2,
    code: 'SECTOR 01',
    name: 'Sector Productivo',
    title: 'Empresas y Centros de Trabajo',
    desc: 'Capacitación in-company a la medida, evaluación y certificación de competencias laborales para personal operativo y mandos medios, y programas de bachillerato para colaboradores.',
    rutas: [
      'Capacitación laboral a la medida',
      'Certificación SEP-CONOCER de personal técnico',
      'Bachillerato modular para colaboradores',
    ],
    borderTop: 'border-t-[#d97706]',
    accentColor: 'text-[#d97706]',
    cta: 'Propuesta para mi empresa',
    href: '#formulario',
  },
  {
    icon: GraduationCap,
    code: 'SECTOR 02',
    name: 'Sector Académico',
    title: 'Instituciones Educativas y Universidades',
    desc: 'Convenios de colaboración académica, educación continua compartida, conferencias magistrales y vinculación para la certificación oficial de estudiantes y egresados.',
    rutas: [
      'Convenios de doble constancia curricular',
      'Certificación de competencias para egresados',
      'Actualización docente y directiva',
    ],
    borderTop: 'border-t-[#0284c7]',
    accentColor: 'text-[#0284c7]',
    cta: 'Construir alianza educativa',
    href: '#formulario',
  },
  {
    icon: Globe2,
    code: 'SECTOR 03',
    name: 'Sector Público',
    title: 'Gobiernos y Dependencias Públicas',
    desc: 'Colaboración institucional para proyectos de impacto social, profesionalización del servicio público, brigadas comunitarias de protección civil e inclusión.',
    rutas: [
      'Profesionalización de servidores públicos',
      'Programas de protección civil y resiliencia',
      'Proyectos de inclusión y economía social',
    ],
    borderTop: 'border-t-[#083665]',
    accentColor: 'text-[#083665]',
    cta: 'Proyecto institucional',
    href: '#formulario',
  },
  {
    icon: HeartHandshake,
    code: 'SECTOR 04',
    name: 'Sociedad Civil',
    title: 'Organizaciones de la Sociedad Civil (OSC)',
    desc: 'Sumamos capacidades técnicas y operativas con fundaciones, asociaciones y colectivos para fortalecer a brigadas comunitarias, promotores de derechos humanos y voluntarios.',
    rutas: [
      'Fortalecimiento técnico de equipos y voluntarios',
      'Talleres de primeros auxilios y apoyo de primer contacto',
      'Proyectos compartidos sin fines de lucro',
    ],
    borderTop: 'border-t-[#7c3aed]',
    accentColor: 'text-[#7c3aed]',
    cta: 'Vincular mi organización',
    href: '#formulario',
  },
  {
    icon: Award,
    code: 'SECTOR 05',
    name: 'Red de Prestadores ECE',
    title: 'Centros de Evaluación y Evaluadores',
    desc: 'Integración a la Red de Prestadores de Servicios bajo la acreditación oficial ECE760-26 para operar procesos de evaluación de competencias con total respaldo normativo.',
    rutas: [
      'Habilitación como sede evaluadora acreditada',
      'Acreditación de evaluadores independientes (EC0076)',
      'Dictámenes de procedencia y emisión de certificados',
    ],
    borderTop: 'border-t-[#0d9488]',
    accentColor: 'text-[#0d9488]',
    cta: 'Conocer modelo de Red ECE',
    href: '#red-prestadores',
  },
  {
    icon: Users,
    code: 'SECTOR 06',
    name: 'Talento Especializado',
    title: 'Especialistas, Docentes e Instructores',
    desc: 'Convocatoria abierta para profesionales técnicos, facilitadores pedagógicos y consultores que deseen aportar su experiencia en comités curriculares y programas formativos.',
    rutas: [
      'Impartición de diplomados y talleres especializados',
      'Participación en comités de gestión por competencias',
      'Diseño instruccional de contenidos aplicados',
    ],
    borderTop: 'border-t-[#e11d48]',
    accentColor: 'text-[#e11d48]',
    cta: 'Colaborar como especialista',
    href: '#formulario',
  },
];

// ── PROCESO DE VINCULACIÓN EN 5 PASOS ÁGILES ──
const vinculacionSteps = [
  {
    number: '01',
    title: 'Escucha Activa',
    description:
      'Nos reunimos para conocer a tu organización, comprender tus retos operativos o formativos y definir la visión conjunta de impacto.',
  },
  {
    number: '02',
    title: 'Diagnóstico de Necesidades',
    description:
      'Analizamos el perfil de los colaboradores, el alcance geográfico, las metas cuantitativas y los estándares o normativas aplicables.',
  },
  {
    number: '03',
    title: 'Diseño de la Ruta Integral',
    description:
      'Articulamos las áreas de ISCOBusiness (educación continua, bachillerato modular o certificación ECE760-26) en una propuesta formal.',
  },
  {
    number: '04',
    title: 'Formalización y Certeza',
    description:
      'Suscribimos el convenio marco o acuerdo específico con total claridad jurídica, estableciendo cronogramas, alcances y compromisos mutuos.',
  },
  {
    number: '05',
    title: 'Ejecución y Medición',
    description:
      'Implementamos los programas con acompañamiento permanente, evaluamos resultados mediante indicadores y entregamos evidencias verificables.',
  },
];

// ── SOLUCIONES RÁPIDAS PARA ORGANIZACIONES ──
const quickSolutions = [
  {
    quote: '“Necesitamos capacitar a nuestros equipos operativos en competencias digitales, atención al público y liderazgo.”',
    route: 'Educación Continua / Capacitación Corporativa In-Company',
    action: 'Ver propuesta formativa',
    href: '/educacion-continua#empresas',
  },
  {
    quote: '“Queremos certificar oficialmente la experiencia laboral de nuestro personal técnico con validez SEP-CONOCER.”',
    route: 'Certificación Laboral Oficial / ECE760-26',
    action: 'Explorar portal ECE',
    href: 'https://iberica.iscobusiness.edu.mx/',
  },
  {
    quote: '“Buscamos que nuestros colaboradores sin bachillerato terminado concluyan sus estudios con validez oficial.”',
    route: 'Centro de Asesoría / Bachillerato Abierto y Modular',
    action: 'Conocer modelo modular',
    href: '/centro-de-asesoria',
  },
  {
    quote: '“Somos una universidad y queremos ofrecer opciones de doble titulación o certificación laboral a nuestros egresados.”',
    route: 'Convenios de Vinculación Académica e Interinstitucional',
    action: 'Iniciar diálogo académico',
    href: '#formulario',
  },
  {
    quote: '“Somos una organización social y requerimos brigadas de primeros auxilios y apoyo socioemocional ante emergencias.”',
    route: 'Protección Civil y Cuidado Comunitario',
    action: 'Proponer alianza solidaria',
    href: '#formulario',
  },
  {
    quote: '“Contamos con infraestructura y deseamos acreditarnos como Centro de Evaluación integrante de su Red nacional.”',
    route: 'Red de Prestadores de Servicios ECE760-26',
    action: 'Consultar requisitos de Red',
    href: '#red-prestadores',
  },
];

// ── CERTEZA JURÍDICA Y TIPOS DE CONVENIO (PATRÓN 3) ──
const legalInstruments = [
  {
    icon: Handshake,
    badge: 'Instrumento Rector',
    title: 'Convenio Marco de Colaboración',
    desc: 'Establece las bases generales de cooperación interinstitucional, intercambio de buenas prácticas, facilitación de espacios y coordinación de voluntades.',
    reference: 'Suscrito entre representantes legales debidamente facultados.',
  },
  {
    icon: FileCheck2,
    badge: 'Operación Focalizada',
    title: 'Bases Específicas de Trabajo',
    desc: 'Detallan objetivos concretos, cronograma de actividades, metas de capacitación o evaluación, perfiles de participantes y mecanismos de seguimiento.',
    reference: 'Derivado del Convenio Marco con vigencia y metas delimitadas.',
  },
  {
    icon: ShieldCheck,
    badge: 'Acreditación Oficial',
    title: 'Contrato de Adhesión a la Red ECE760-26',
    desc: 'Formaliza la incorporación de Centros de Evaluación o Evaluadores Independientes bajo las reglas de operación, calidad y ética emitidas por el CONOCER.',
    reference: 'Supervisión y dictamen de portafolios conforme al marco legal.',
  },
];

// ── PREGUNTAS FRECUENTES (FAQ) ──
const faqItems = [
  {
    question: '¿Qué requisitos legales se solicitan para suscribir un convenio con ISCOBusiness?',
    answer:
      'Para formalizar un convenio marco de colaboración requerimos copia del acta constitutiva o decreto de creación de la entidad, poder notarial del representante legal que suscribe, identificación oficial y comprobante de domicilio institucional. Toda la documentación se revisa bajo estrictos principios de confidencialidad y certeza jurídica.',
  },
  {
    question: '¿Los programas de capacitación pueden deducirse o adaptarse a los horarios de nuestra empresa?',
    answer:
      'Sí. Diseñamos planes formativos con total flexibilidad de horarios, tanto en modalidad virtual como presencial en las instalaciones de la empresa. Al concluir, emitimos constancias institucionales con validez curricular y carpetas de evidencia para los registros de capacitación correspondientes.',
  },
  {
    question: '¿Cómo funciona la acreditación como Centro de Evaluación integrante de la Red?',
    answer:
      'Las organizaciones interesadas deben contar con infraestructura física o virtual adecuada, designar personal evaluador certificado en los estándares requeridos y en el EC0076, y superar la visita de verificación técnica. Una vez aprobada, ISCOBusiness emite la acreditación formal y brinda acompañamiento permanente en dictámenes y gestión de certificados.',
  },
  {
    question: '¿Cuánto tiempo toma concretar una alianza desde el primer contacto?',
    answer:
      'Tras recibir la solicitud en la Mesa de Vinculación, nuestro equipo se comunica en un plazo no mayor a 48 horas hábiles para coordinar la primera reunión exploratoria. La firma del convenio y el arranque operativo suelen concretarse entre dos y cuatro semanas, dependiendo de la naturaleza y alcance del proyecto.',
  },
  {
    question: '¿Pueden vincularse organizaciones civiles o colectivos con presupuestos limitados?',
    answer:
      'Absolutamente. Como Organización de la Sociedad Civil sin fines de lucro, uno de nuestros pilares es la solidaridad social. Desarrollamos esquemas de colaboración comunitaria, becas compartidas y talleres solidarios orientados al bienestar de poblaciones en situación de vulnerabilidad.',
  },
  {
    question: '¿Dónde se gestionan los trámites directos de certificación laboral SEP-CONOCER?',
    answer:
      'Todo lo relativo a la convocatoria de estándares de competencia, cédulas de evaluación y trámites de emisión ante el CONOCER se gestiona en nuestro portal especializado ECE760-26 (https://iberica.iscobusiness.edu.mx/). En esta página de vinculación coordinamos los acuerdos institucionales para empresas y grupos.',
  },
];

export default function VinculacionPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. HERO INSTITUCIONAL VINCULACIÓN (LIGHT VARIANT) ── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/fcs-vinculacion-alianzas.jpg"
        backgroundOpacity={0.80}
        title="Conectamos personas, instituciones y capacidades para crear oportunidades."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 01. Propósito */}
            <a
              href="#proposito"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Propósito</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Alianzas con Sentido
              </span>
            </a>

            {/* 02. Sectores */}
            <a
              href="#sectores"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>Sectores</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Empresas, Gob. y OSC
              </span>
            </a>

            {/* 03. Red ECE */}
            <a
              href="#red-prestadores"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Red ECE</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Red SEP-CONOCER
              </span>
            </a>

            {/* 04. Metodología */}
            <a
              href="#metodologia"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Metodología</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Acompañamiento
              </span>
            </a>

            {/* 05. Certeza Jurídica */}
            <a
              href="#certeza-juridica"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-slate-50/80 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300/80 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Certeza Jurídica</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Convenios Oficiales
              </span>
            </a>

            {/* 06. Mesa de Enlace */}
            <a
              href="#formulario"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <span>Mesa de Enlace</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Proponer Alianza
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

      {/* ── 3. SECCIÓN: PROPÓSITO DE ALIANZAS CON SENTIDO HUMANO ── */}
      <section id="proposito" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
                Alianzas con Sentido Humano
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                De una alianza institucional nacen oportunidades reales para las personas
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                En ISCOBusiness entendemos la vinculación no como un acto burocrático de acumulación de firmas, sino como el puente indispensable que articula la voluntad de empresas, escuelas, dependencias de gobierno y comunidades para resolver problemas concretos.
              </p>
              <div className="p-5 bg-amber-50/70 border-l-4 border-l-[#d97706] rounded-r-2xl text-xs md:text-sm text-slate-800 leading-relaxed italic shadow-2xs mb-6">
                "No buscamos acumular convenios en papel ni firmas diplomáticas vacías. Buscamos articular voluntades para que una trabajadora certifique su oficio, un joven complete su bachillerato y un equipo laboral opere con dignidad y seguridad."
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Cada convenio se traduce en acciones verificables: becas compartidas, sedes de evaluación acreditadas, diplomados con validez oficial y programas formativos diseñados para elevar la productividad y el bienestar colectivo.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: '01',
                  title: 'Proyectos con Propósito',
                  desc: 'Iniciativas diseñadas para generar impacto económico sustentable y movilidad social real.',
                },
                {
                  num: '02',
                  title: 'Capacitación a la Medida',
                  desc: 'Programas formativos ajustados a los turnos, necesidades y dinámicas de tus equipos.',
                },
                {
                  num: '03',
                  title: 'Certificación Oficial',
                  desc: 'Acreditación formal de competencias laborales con validez nacional SEP-CONOCER.',
                },
                {
                  num: '04',
                  title: 'Desarrollo del Talento',
                  desc: 'Crecimiento profesional que mejora la retención, la lealtad y el clima organizacional.',
                },
                {
                  num: '05',
                  title: 'Impacto Comunitario',
                  desc: 'Inclusión social, cultura de protección civil y fortalecimiento de derechos humanos.',
                },
                {
                  num: '06',
                  title: 'Acompañamiento Continuo',
                  desc: 'Asesoría pedagógica, técnica y administrativa en cada etapa de la colaboración.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-slate-900 font-mono font-bold text-xs flex items-center justify-center group-hover:bg-amber-50 group-hover:text-[#d97706] group-hover:border-amber-200 transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">ISCOBusiness</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[#d97706] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SECCIÓN: DATA STRIP MONUMENTAL (PATRÓN 4 EN NAVY) ── */}
      <section id="cifras" className="py-12 md:py-16 bg-[#083665] text-white border-y border-slate-800 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {/* Stat 1 */}
            <div className="p-4 md:px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-[#fbbf24] tracking-tight mb-2 font-sans">
                6
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Sectores Estratégicos
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Empresas, escuelas, gobierno, OSC, prestadores y docentes
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-2 font-sans">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Certeza Jurídica
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Convenios formales, cláusulas claras y sin fines de lucro
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#34d399] tracking-tight mb-2 font-sans">
                5
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Pasos de Metodología
              </div>
              <div className="text-xs text-slate-300 font-sans">
                De la escucha activa a la medición de resultados concretos
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2 font-sans">
                ECE760-26
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Acreditación Federal
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Entidad autorizada para habilitar Centros y Evaluadores
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECCIÓN: 6 SECTORES ESTRATÉGICOS (PATRÓN 2) ── */}
      <section id="sectores" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
              Ecosistema de Colaboración
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              6 Sectores Estratégicos para Construir Soluciones Colectivas
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Diseñamos esquemas de trabajo específicos respetando la naturaleza, el marco legal y las prioridades humanas de cada tipo de organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 border-t-4 ${sec.borderTop} shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Placa Opción A */}
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                          {sec.code}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline-block">
                          {sec.name}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">
                      {sec.desc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {sec.rutas.map((r, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={sec.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#d97706] pt-4 border-t border-slate-100 transition-colors"
                  >
                    <span>{sec.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN: RED DE PRESTADORES DE SERVICIOS ECE760-26 ── */}
      <section id="red-prestadores" className="section-padding bg-white scroll-mt-28 border-b border-slate-200/80">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-mono font-bold uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Red Oficial ECE760-26
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                Red de Centros de Evaluación y Evaluadores Independientes
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Como Entidad de Certificación y Evaluación acreditada por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER), ISCOBusiness faculta la incorporación de instituciones, cámaras empresariales, colegios profesionales y especialistas independientes para evaluar competencias con respaldo federal.
              </p>

              <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs text-amber-900 leading-relaxed mb-6 shadow-2xs">
                <strong className="block mb-1 font-bold">Certeza y apego normativo:</strong>
                La integración a nuestra Red de Prestadores de Servicios se rige por lineamientos técnicos estrictos de infraestructura, idoneidad ética y acreditación vigente de evaluadores en el estándar de su especialidad y en el EC0076.
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://iberica.iscobusiness.edu.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-xs"
                >
                  <span>Visitar portal especializado ECE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#formulario"
                  className="btn-secondary inline-flex items-center gap-2 text-xs"
                >
                  <span>Solicitar acreditación de sede</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card Centro */}
              <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/90 border-t-4 border-t-[#075fba] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                      <Building2 className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                      MODELO 01
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#075fba] transition-colors">
                    Centro de Evaluación
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    Dirigido a empresas, universidades, cámaras y organizaciones con infraestructura física o virtual interesadas en operar como sedes evaluadoras acreditadas.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075fba] shrink-0" />
                      <span>Cédula de acreditación oficial ante la ECE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075fba] shrink-0" />
                      <span>Respaldo en auditorías y dictámenes técnicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075fba] shrink-0" />
                      <span>Acceso a plataformas y gestión de trámites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#075fba] shrink-0" />
                      <span>Capacitación continua para sus evaluadores</span>
                    </li>
                  </ul>
                </div>
                <a href="#formulario" className="btn-primary text-xs py-2.5 text-center">
                  Solicitar informe para Centro
                </a>
              </div>

              {/* Card Evaluador */}
              <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/90 border-t-4 border-t-[#4f46e5] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                      <Award className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                      MODELO 02
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#4f46e5] transition-colors">
                    Evaluador Independiente
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    Dirigido a profesionistas con sólida experiencia técnica que cuenten con certificación en los Estándares de su ramo y en el EC0076.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span>Habilitación oficial como evaluador autorizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span>Dictamen oportuno de portafolios de evidencia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span>Gestión integral de certificados federales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4f46e5] shrink-0" />
                      <span>Comunidad de práctica y actualización técnica</span>
                    </li>
                  </ul>
                </div>
                <a href="#formulario" className="btn-secondary text-xs py-2.5 text-center">
                  Ruta para Evaluadores
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN: PROCESO DE VINCULACIÓN EN 5 PASOS ── */}
      <section id="metodologia" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
              Ruta de Colaboración
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Cómo construimos una alianza en 5 pasos claros
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Un acompañamiento transparente, estructurado y empático para pasar de la primera conversación a la entrega de resultados tangibles para las personas.
            </p>
          </div>

          <ProcessSteps steps={vinculacionSteps} columns={5} accentColor="border-t-[#d97706]" />
        </div>
      </section>

      {/* ── 8. SECCIÓN: SOLUCIONES A LA MEDIDA PARA ORGANIZACIONES ── */}
      <section id="soluciones" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
              Respuestas Concretas
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Un solo punto de encuentro para diversas necesidades organizacionales
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              No importa cuál sea el reto inicial de tu equipo; en ISCOBusiness articulamos la respuesta académica, técnica o de certificación más adecuada.
            </p>
          </div>

          <div className="space-y-3.5">
            {quickSolutions.map((sol, i) => (
              <div
                key={i}
                className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-amber-400 hover:shadow-xs transition-all group"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 mb-1.5 italic">
                    {sol.quote}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#d97706]">
                    <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                    Solución articulada: {sol.route}
                  </span>
                </div>
                {sol.href.startsWith('http') ? (
                  <a
                    href={sol.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 shrink-0 flex items-center gap-1.5"
                  >
                    <span>{sol.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={sol.href}
                    className="btn-secondary text-xs py-2 px-4 shrink-0 flex items-center gap-1.5"
                  >
                    <span>{sol.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. SECCIÓN: CERTEZA JURÍDICA Y TIPOS DE CONVENIO (PATRÓN 3) ── */}
      <section id="certeza-juridica" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
              Gobernanza y Certeza Institucional
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Instrumentos Jurídicos Transparentes y de Buena Fe
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Cada alianza formal se sustenta en instrumentos jurídicos rigurosos que delimitan con claridad facultades, compromisos académicos y mecanismos de evaluación sin fines de lucro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {legalInstruments.map((inst, i) => {
              const Icon = inst.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                        <Icon className="w-5 h-5 text-slate-800" />
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {inst.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
                      {inst.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {inst.desc}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
                    {inst.reference}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#d97706] shrink-0" />
              <span>
                Para consultar nuestros estatutos sociales, políticas de privacidad y mecanismos de transparencia activa, visita el repositorio institucional.
              </span>
            </div>
            <Link
              href="/transparencia"
              className="font-bold text-[#d97706] hover:underline shrink-0 inline-flex items-center gap-1"
            >
              <span>Ir a Transparencia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. SECCIÓN: MESA DE VINCULACIÓN INSTITUCIONAL ── */}
      <section id="formulario" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
              Punto de Contacto Directo
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Mesa de Vinculación y Alianzas Solidarias
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comparte con nosotros los requerimientos o la visión de tu organización para iniciar el diálogo institucional y estructurar una ruta de trabajo conjunta.
            </p>
          </div>

          <VinculacionForm />
        </div>
      </section>

      {/* ── 11. SECCIÓN: PREGUNTAS FRECUENTES (FAQ) ── */}
      <section id="preguntas" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/90 inline-block mb-3">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Resolvemos tus dudas sobre Vinculación y Convenios
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                Conoce los detalles sobre tiempos de formalización, requisitos técnicos para la Red ECE, esquemas de capacitación empresarial y alcances de colaboración.
              </p>
            </div>
            <div>
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. CIERRE INSTITUCIONAL (CTA SECTION) ── */}
      <CtaSection
        title="Las grandes transformaciones nacen conectando voluntades y capacidades."
        subtitle="Suma a tu empresa, universidad, colectivo o dependencia a un ecosistema comprometido con la dignidad de las personas trabajadoras y el desarrollo educativo del país."
        buttons={[
          {
            label: 'Presentar propuesta de vinculación',
            href: '#formulario',
            variant: 'gold',
          },
          {
            label: 'Solicitar reunión directa',
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
