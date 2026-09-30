import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/shared/hero-section';
import { SectionHeading } from '@/components/shared/section-heading';
import { TrustBar } from '@/components/shared/trust-bar';
import { ImpactModel } from '@/components/shared/impact-model';
import { CtaSection } from '@/components/shared/cta-section';
import {
  BookOpen,
  Award,
  GraduationCap,
  Handshake,
  Lightbulb,
  Globe,
  Target,
  Building2,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Layers,
  HeartHandshake,
  ShieldCheck,
  ShieldAlert,
  Compass,
  Lock,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros e Institución | Misión, Qué Hacemos y Ecosistema',
  description:
    'Conoce ISCOBusiness: quiénes somos, nuestras líneas sustantivas y los 6 ejes de acción, y el ecosistema de unidades especializadas en educación, certificación y vinculación.',
};

/* ═══════════════════════════════════════════════════════════════
   PÁGINA UNIFICADA: NOSOTROS, QUÉ HACEMOS Y ECOSISTEMA
   Estructura 100% alineada con agent.md:
   - Patrón 1: Bloques Editoriales Protagónicos con Fotografía
   - Patrón 2: Tarjetas Ejecutivas con Borde Superior de Acento (border-t-4) y Placa Opción A
   - Patrón 3: Tarjetas de Certeza Jurídica y Transparencia
   - Patrón 4: Franja de Métricas e Indicadores Monumentales (Data Strip)
   - Lógica cromática por área, alternancia rítmica de fondos y humanización total.
   ═══════════════════════════════════════════════════════════════ */

// ── 6 EJES ESTRATÉGICOS DE ACCIÓN SUSTANTIVA (PATRÓN 2) ──
const seisEjes = [
  {
    num: '01',
    code: 'EJE 01 · EDUCACIÓN FLEXIBLE',
    icon: GraduationCap,
    titulo: 'Educación y Capacidades',
    descripcion:
      'Concluye tu bachillerato sin pausar tu empleo ni descuidar a tu familia. A través del Centro de Asesoría del Instituto Ibérica, recibes tutorías modulares paso a paso en 22 asignaturas, con docentes que te orientan con paciencia, empatía y respeto.',
    rutas: ['Plan oficial modular de 22 módulos', 'Tutoría pedagógica personalizada', 'Horarios adaptados a tu vida laboral'],
    enlace: '/centro-de-asesoria',
    cta: 'Conocer el Centro de Asesoría',
    borderColor: 'border-t-[#0284c7]', // Cian / Sky
    accentColor: 'text-[#0284c7]',
  },
  {
    num: '02',
    code: 'EJE 02 · RECONOCIMIENTO OFICIAL',
    icon: Award,
    titulo: 'Certificación Laboral (SEP-CONOCER)',
    descripcion:
      'Lo que has aprendido trabajando con tus manos y tu esfuerzo diario merece validez oficial. Como Entidad de Certificación y Evaluación acreditada ECE760-26, evaluamos tus competencias laborales para otorgarte un certificado con respaldo federal en todo el país.',
    rutas: ['Acreditación oficial ECE760-26', 'Evaluación práctica de saberes reales', 'Validez nacional ante SEP-CONOCER'],
    enlace: 'https://iberica.iscobusiness.edu.mx/',
    cta: 'Ir a la Entidad ECE',
    borderColor: 'border-t-[#4f46e5]', // Violeta / Índigo
    accentColor: 'text-[#4f46e5]',
  },
  {
    num: '03',
    code: 'EJE 03 · ACTUALIZACIÓN PROFESIONAL',
    icon: BookOpen,
    titulo: 'Educación Continua y Actualización',
    descripcion:
      'Cursos, talleres y diplomados diseñados para abrirte puertas laborales inmediatas. Contamos con programas activos respaldados por acuerdos oficiales de SECTEI, especializados en competencias docentes, directivas y habilidades cognitivas.',
    rutas: ['Diplomados con acuerdos oficiales SECTEI', 'Didáctica y diseño instruccional', 'Formación y capacitación a empresas'],
    enlace: '/educacion-continua',
    cta: 'Explorar Educación Continua',
    borderColor: 'border-t-[#0d9488]', // Verde Esmeralda / Teal
    accentColor: 'text-[#0d9488]',
  },
  {
    num: '04',
    code: 'EJE 04 · IGUALDAD Y DIGNIDAD',
    icon: HeartHandshake,
    titulo: 'Inclusión, Equidad y Derechos Humanos',
    descripcion:
      'La superación debe ser un derecho para todas las personas. Implementamos diseño universal para el aprendizaje (DUA), eliminamos barreras de acceso para personas con discapacidad y garantizamos un trato cálido, digno y libre de cualquier discriminación.',
    rutas: ['Diseño universal para el aprendizaje (DUA)', 'Accesibilidad física y cognitiva', 'Enfoque de derechos humanos'],
    enlace: '#principios',
    cta: 'Ver compromisos de inclusión',
    borderColor: 'border-t-[#075fba]', // Azul Institucional Primario
    accentColor: 'text-[#075fba]',
  },
  {
    num: '05',
    code: 'EJE 05 · BIENESTAR Y COMUNIDAD',
    icon: ShieldAlert,
    titulo: 'Protección Civil y Cuidado Comunitario',
    descripcion:
      'Cuidar de quienes nos rodean es una tarea solidaria. Preparamos a familias, docentes y brigadas vecinales en apoyo socioemocional de primer contacto ante emergencias, primeros auxilios básicos y protocolos escolares para mitigar riesgos ante siniestros.',
    rutas: ['Apoyo socioemocional de primer contacto', 'Planes familiares de protección civil', 'Prevención y primeros auxilios en escuelas'],
    enlace: '/educacion-continua',
    cta: 'Ver cursos de protección civil',
    borderColor: 'border-t-[#e11d48]', // Rose / Rojo Protección Civil
    accentColor: 'text-[#e11d48]',
  },
  {
    num: '06',
    code: 'EJE 06 · COLABORACIÓN SOLIDARIA',
    icon: Handshake,
    titulo: 'Vinculación y Alianzas Solidarias',
    descripcion:
      'Ninguna meta se alcanza en solitario. Construimos puentes entre empresas, instituciones educativas, dependencias gubernamentales y colectivos comunitarios para coordinar becas, sedes de evaluación y programas formativos en beneficio colectivo.',
    rutas: ['Convenios de colaboración intersectorial', 'Capacitación in situ para empresas', 'Proyectos con impacto comunitario'],
    enlace: '/vinculacion',
    cta: 'Ir a Mesa de Vinculación',
    borderColor: 'border-t-[#d97706]', // Dorado / Ámbar
    accentColor: 'text-[#d97706]',
  },
];

// ── 5 UNIDADES DEL ECOSISTEMA INSTITUCIONAL (PATRÓN 1: FEATURE BLOCKS) ──
const unidadesEcosistema = [
  {
    id: 'centro-de-asesoria',
    image: '/img/fcs-educacion-prepa.jpg',
    badge: 'UNIDAD 01 · EDUCACIÓN MEDIA SUPERIOR · INSTITUTO IBÉRICA',
    title: 'Concluye tu bachillerato sin pausar tu vida ni tu trabajo',
    subtitle: 'Centro de Asesoría y Acompañamiento Académico',
    description:
      'Centro de asesoría académica que acompaña tu avance en el plan oficial modular de 22 módulos de la SEP. Diseñado especialmente para personas adultas y jóvenes que trabajan o tienen responsabilidades familiares, combinando el estudio independiente con el respaldo constante de asesores comprometidos que te explican con paciencia y respeto.',
    points: [
      { title: 'Plan Oficial de 22 Módulos', desc: 'Acompañamiento docente paso a paso con equivalencia federal' },
      { title: 'Horarios a tu Medida', desc: 'Asesorías presenciales y virtuales adaptadas a tu vida laboral' },
    ],
    cta: 'Conocer el Centro de Asesoría',
    href: '/centro-de-asesoria',
    secondaryCta: 'Hablar con un asesor',
    secondaryHref: '/centro-de-asesoria#registro',
  },
  {
    id: 'certificacion',
    image: '/img/fcs-certificacion-conocer.jpg',
    badge: 'UNIDAD 02 · ESTÁNDARES SEP-CONOCER · ECE760-26',
    title: 'Lo que aprendiste trabajando día a día merece validez oficial',
    subtitle: 'Instituto de Capacitación y Certificación Ibérica',
    description:
      'Entidad de Certificación y Evaluación acreditada en el Sistema Nacional de Competencias (CONOCER). Brinda certeza jurídica y validez oficial en toda la República Mexicana a las habilidades técnicas y saberes laborales que has perfeccionado a lo largo de años de experiencia práctica.',
    points: [
      { title: 'Acreditación Oficial ECE760-26', desc: 'Red nacional autorizada por la SEP y CONOCER' },
      { title: 'Validez Federal Permanente', desc: 'Certificado oficial sin fecha de caducidad para tu empleo' },
    ],
    cta: 'Portal Oficial de la Entidad ECE',
    href: 'https://iberica.iscobusiness.edu.mx/',
    externalCta: true,
    secondaryCta: 'Contactar a la Entidad',
    secondaryHref: '/contacto?servicio=certificacion-conocer',
  },
  {
    id: 'continua',
    image: '/img/fcs-educacion-continua.jpg',
    badge: 'UNIDAD 03 · ACTUALIZACIÓN Y ESPECIALIZACIÓN · SECTEI',
    title: 'Aprende habilidades prácticas para enriquecer tu vocación y entorno',
    subtitle: 'Ibérica Educación Continua',
    description:
      'Programas activos orientados a docentes, directivos escolares, brigadas y equipos laborales, respaldados con acuerdos oficiales de SECTEI y un enfoque centrado en competencias prácticas, apoyo socioemocional, resiliencia comunitaria y didáctica contemporánea.',
    points: [
      { title: 'Diplomados con Acuerdos SECTEI', desc: 'Valor curricular oficial y registro verificado' },
      { title: 'Modalidades Flexibles', desc: 'Cursos virtuales, presenciales y programas para empresas' },
    ],
    cta: 'Ver catálogo de Educación Continua',
    href: '/educacion-continua',
    secondaryCta: 'Solicitar informes',
    secondaryHref: '/contacto?tema=Educación Continua',
  },
  {
    id: 'vinculacion',
    image: '/img/fcs-vinculacion-alianzas.jpg',
    badge: 'UNIDAD 04 · ARTICULACIÓN SOCIAL Y PRODUCTIVA',
    title: 'Nadie sale adelante solo: cuando sumamos voluntades, el bienestar se multiplica',
    subtitle: 'Dirección de Vinculación y Proyectos Estratégicos',
    description:
      'Área responsable de formalizar convenios de colaboración intersectorial con empresas socialmente responsables, dependencias públicas y colectivos comunitarios para coordinar becas, sedes de evaluación y programas formativos en Puebla, Córdoba y Ciudad de México.',
    points: [
      { title: 'Alianzas Multisectoriales', desc: 'Empresas, gobiernos y organizaciones de la sociedad civil' },
      { title: 'Presencia en 3 Sedes Activas', desc: 'Espacios territoriales en Puebla, Córdoba y CDMX' },
    ],
    cta: 'Ir a Mesa de Vinculación',
    href: '/vinculacion',
    secondaryCta: 'Proponer una alianza',
    secondaryHref: '/vinculacion#formulario',
  },
  {
    id: 'universidad',
    image: '/img/hero-reunion-personas.jpg',
    badge: 'UNIDAD 05 · PROYECTO ACADÉMICO EN DESARROLLO',
    title: 'Educación superior con sentido humano, accesible y pertinente',
    subtitle: 'Ibérica Universidad (En planeación normativa)',
    description:
      'Proyecto institucional orientado a la educación universitaria flexible, con reconocimiento a saberes previos y pertinencia productiva, actualmente en fase de planeación normativa, académica y curricular institucional para brindar opciones reales de licenciatura a la comunidad.',
    points: [
      { title: 'Modelo Centrado en la Persona', desc: 'Enfoque humanista y flexible orientado al trabajo digno' },
      { title: 'Desarrollo Normativo Activo', desc: 'Próximas convocatorias informativas abiertas a la comunidad' },
    ],
    cta: 'Consultar información institucional',
    href: '/contacto',
    secondaryCta: 'Conocer nuestras sedes',
    secondaryHref: '/contacto#sedes',
  },
];

// ── 10 PRINCIPIOS TRANSVERSALES (PATRÓN 2 EJECUTIVO) ──
const principiosTransversales = [
  {
    num: '01',
    title: 'Dignidad humana',
    desc: 'Eres el centro de cada decisión. Respetamos tu historia de vida, tu esfuerzo y tus aspiraciones personales.',
  },
  {
    num: '02',
    title: 'Legalidad y certeza',
    desc: 'Actuamos con apego riguroso a la ley educativa y normatividad oficial en cada trámite que realizas con nosotros.',
  },
  {
    num: '03',
    title: 'Honestidad e integridad',
    desc: 'Cuentas claras en todo momento: actuamos con total probidad, sin letras pequeñas ni promesas vacías.',
  },
  {
    num: '04',
    title: 'Inclusión sin barreras',
    desc: 'Diseñamos espacios y materiales adaptados para que todas las personas puedan aprender y participar plenamente.',
  },
  {
    num: '05',
    title: 'Equidad y empatía',
    desc: 'Comprendemos tus tiempos, tus responsabilidades laborales y los desafíos cotidianos de tu contexto personal.',
  },
  {
    num: '06',
    title: 'Calidad y mejora continua',
    desc: 'Docentes preparados y metodologías pedagógicas evaluadas constantemente para ofrecerte la mejor orientación.',
  },
  {
    num: '07',
    title: 'Transparencia activa',
    desc: 'Información abierta, acreditaciones verificables y rendición de cuentas permanente frente a la sociedad.',
  },
  {
    num: '08',
    title: 'Solidaridad comunitaria',
    desc: 'Creemos con certeza que cuando una persona concluye sus estudios o se certifica, toda su comunidad avanza.',
  },
  {
    num: '09',
    title: 'Innovación con sentido',
    desc: 'Aprovechamos tecnología y métodos pedagógicos modernos para facilitarte el camino, nunca para complicarlo.',
  },
  {
    num: '10',
    title: 'Vocación de servicio',
    desc: 'Nuestro equipo está aquí para escucharte, orientarte y acompañarte con amabilidad, calidez y paciencia.',
  },
];

// ── 8 VALORES CARDINALES (PATRÓN 2 EJECUTIVO DORADO) ──
const valores = [
  {
    title: 'Justicia social',
    desc: 'Ampliamos el acceso a oportunidades para quienes buscan una segunda oportunidad de superación.',
  },
  {
    title: 'Inclusión plena',
    desc: 'Garantizamos que la formación y la certificación reconozcan y respeten la diversidad de contextos humanos.',
  },
  {
    title: 'Equidad de oportunidades',
    desc: 'Generamos condiciones para que cada persona alcance sus metas sin discriminación ni sesgos de origen.',
  },
  {
    title: 'Empoderamiento personal',
    desc: 'Aportamos herramientas prácticas y validez oficial para transformar tu esfuerzo diario en bienestar familiar.',
  },
  {
    title: 'Transparencia absoluta',
    desc: 'Máxima probidad y honestidad en cada proceso de asesoría, evaluación y vinculación institucional.',
  },
  {
    title: 'Solidaridad fraterna',
    desc: 'La cooperación comunitaria como motor fundamental de crecimiento colectivo y resiliencia barrial.',
  },
  {
    title: 'Innovación formativa',
    desc: 'Metodologías educativas flexibles orientadas a resolver rezagos formativos reales y concretos.',
  },
  {
    title: 'Responsabilidad social',
    desc: 'Compromiso sustentable con el bienestar de las personas, las familias y el entorno productivo.',
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. Hero Institucional ─────────────────────────────── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/fcs-vinculacion-alianzas.jpg"
        backgroundOpacity={0.80}
        title="Desarrollo humano, educación y vinculación con propósito."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 01. Quiénes Somos */}
            <a
              href="#identidad"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <span>Quiénes Somos</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Identidad y Visión
              </span>
            </a>

            {/* 02. Misión y Valores */}
            <a
              href="#pilares"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span>Misión y Pilares</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Compromiso Social
              </span>
            </a>

            {/* 03. Gobernanza y Legalidad */}
            <a
              href="#gobernanza"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-slate-50/80 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300/80 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>Gobernanza</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Estructura y Reglas
              </span>
            </a>

            {/* 04. Qué Hacemos (6 Ejes) */}
            <a
              href="#que-hacemos"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Qué Hacemos</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                6 Ejes de Acción
              </span>
            </a>

            {/* 05. Ecosistema de Unidades */}
            <a
              href="#ecosistema"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Ecosistema</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Unidades del Grupo
              </span>
            </a>

            {/* 06. Principios Éticos */}
            <a
              href="#principios"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Principios</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Ética y Valores
              </span>
            </a>

            {/* 07. Certeza Jurídica */}
            <a
              href="#certeza"
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
                Marco Oficial
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. Identidad Institucional & Declaración Humana ── */}
      <section id="identidad" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="shell">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                “Detrás de cada certificado, de cada módulo acreditado y de cada clase, hay una historia de vida, una familia con sueños y una persona con el coraje de salir adelante.”
              </h2>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-6 md:p-8 border border-slate-200/90 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
                <div>
                  <p className="mb-3">
                    Sabemos lo difícil que resulta para un adulto retomar sus estudios o buscar un mejor empleo cuando se tienen jornadas largas de trabajo, responsabilidades en el hogar y gastos cotidianos que atender. Por ello, en <strong className="text-slate-900 font-bold">ISCOBusiness</strong> no actuamos como una institución lejana ni como una empresa mercantil de cursos. Nacimos como una asociación civil solidaria para derribar esas barreras y recordarte que nunca es tarde para alcanzar tus metas.
                  </p>
                  <p>
                    No creemos en discursos vacíos ni en burocracias impersonales: creemos en abrir caminos accesibles para aprender, validar la experiencia que ya posees y trabajar hombro con hombro en el territorio.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    Aquí combinamos la cercanía humana con el rigor técnico y legal: cuentas con asesoría paciente para acreditar tu bachillerato modular a tu propio ritmo en el <strong className="text-slate-900 font-bold">Instituto Ibérica</strong>, la facultad oficial para evaluar y certificar tus destrezas laborales mediante la <strong className="text-slate-900 font-bold">Entidad ECE760-26 de SEP-CONOCER</strong>, y programas de educación continua pertinentes para el empleo digno.
                  </p>
                  <p>
                    Nuestra labor se guía en todo momento por la certeza jurídica, la transparencia absoluta y una inquebrantable vocación comunitaria que pone a la persona humana en el centro de cada decisión.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 micro-pilares ejecutivos con Patrón 2 (border-t-4 y Placa Opción A) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 border-t-4 border-t-[#083665] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform mb-3">
                    <ShieldCheck className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-[var(--primary)] transition-colors">
                    Certeza Jurídica y Oficialidad
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tu esfuerzo cuenta con absoluto respaldo. Asociación Civil legalmente constituida y acreditación vigente ECE760-26 SEP-CONOCER.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 border-t-4 border-t-[#0284c7] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform mb-3">
                    <GraduationCap className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
                    Educación a tu Medida
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tú marcas tu propio ritmo. Modelos modulares pensados para personas con responsabilidades familiares y laborales.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 border-t-4 border-t-[#d97706] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform mb-3">
                    <HeartHandshake className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-[#d97706] transition-colors">
                    Impacto Humano y Territorial
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Presencia cercana en territorio: proyectos comunitarios de resiliencia civil, fomento productivo e inclusión solidaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Pilares Rectores: Misión, Visión, Propósito (Patrón 2) ── */}
      <section id="pilares" className="section-padding bg-[var(--surface-transparencia)] scroll-mt-24 border-b border-slate-200/80">
        <div className="shell">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestros Pilares Rectores
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Las convicciones fundamentales que orientan nuestro compromiso social y nuestra visión de futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#075fba] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform">
                    <Target className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                    PILAR 01
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#075fba] transition-colors">
                  Nuestra Misión
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Abrir oportunidades reales de superación para cada persona. Dignificamos la vida de las familias mediante educación flexible, el reconocimiento oficial a los saberes forjados en el trabajo, la inclusión sin barreras y la cooperación solidaria en las comunidades.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#0284c7] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                    PILAR 02
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors">
                  Nuestra Visión
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ser el espacio de confianza en México donde cualquier persona que desee una segunda oportunidad educativa o profesional encuentre un trato digno, orientación paciente y la validez legal indispensable para transformar su porvenir con orgullo.
                </p>
              </div>
            </div>

            {/* Propósito */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 border-t-4 border-t-[#d97706] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform">
                    <Lightbulb className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                    PILAR 03
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#d97706] transition-colors">
                  Nuestro Propósito
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Convertir el esfuerzo diario, la experiencia acumulada y el talento de nuestra gente en bienestar palpable, justicia social y nuevas posibilidades de crecimiento para toda la sociedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Gobernanza Matriz y Responsabilidad Institucional ── */}
      <section id="gobernanza" className="section-padding bg-[var(--isco-navy)] text-white relative overflow-hidden scroll-mt-24">
        <div className="shell">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Una organización matriz con sentido humano y rigor institucional
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              ISCOBusiness funciona como la entidad rectora que garantiza la ética, el propósito social, la cercanía con las personas y la certeza legal en cada una de las actividades de nuestro ecosistema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/70 backdrop-blur-md p-7 md:p-8 rounded-2xl border border-white/15 border-t-4 border-t-[var(--isco-gold)] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[var(--isco-gold)] mb-4">
                  Responsabilidades del Ente Rector (ISCOBusiness)
                </h3>
                <ul className="space-y-3.5 text-xs md:text-sm text-white/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cuidar que cada programa, curso y asesoría mantenga su vocación social y un trato de absoluto respeto a la persona.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Asegurar que cada trámite, certificado y plan de estudios cuente con pleno respaldo y validez legal ante las autoridades.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Garantizar máxima transparencia, cuentas claras y la estricta protección de tus datos personales (derechos ARCO).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Formalizar convenios y alianzas con empresas, dependencias y organismos para acercar oportunidades a más comunidades.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md p-7 md:p-8 rounded-2xl border border-white/15 border-t-4 border-t-[var(--isco-cyan)] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[var(--isco-cyan)] mb-4">
                  Cómo Trabajamos Coordinadamente
                </h3>
                <ul className="space-y-3.5 text-xs md:text-sm text-white/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--isco-cyan)] shrink-0 mt-0.5" />
                    <span>El <strong>Instituto Ibérica</strong> te acompaña de forma cercana y paciente en tus asesorías de bachillerato modular.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--isco-cyan)] shrink-0 mt-0.5" />
                    <span>Nuestra <strong>Entidad ECE760-26</strong> evalúa tus destrezas y gestiona tu certificado oficial ante SEP-CONOCER.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--isco-cyan)] shrink-0 mt-0.5" />
                    <span>El área de <strong>Educación Continua</strong> actualiza a docentes, directivos y profesionistas con diplomados oficiales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--isco-cyan)] shrink-0 mt-0.5" />
                    <span>Nuestra <strong>Dirección de Vinculación</strong> coordina sedes y convenios en Puebla, Córdoba y Ciudad de México.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRANJA DE INDICADORES Y MÉTRICAS MONUMENTALES (PATRÓN 4 DATA STRIP) ── */}
      <section className="py-12 md:py-16 bg-[var(--isco-navy)] text-white border-y border-slate-800">
        <div className="shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--isco-cyan)] mb-2">
                22
              </span>
              <strong className="text-sm sm:text-base font-bold text-white mb-1">
                Módulos SEP
              </strong>
              <p className="text-xs text-white/70 max-w-[200px]">
                Plan modular oficial con equivalencia y validez federal.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--isco-violet)] mb-2">
                ECE760-26
              </span>
              <strong className="text-sm sm:text-base font-bold text-white mb-1">
                Acreditación CONOCER
              </strong>
              <p className="text-xs text-white/70 max-w-[200px]">
                Entidad autorizada para evaluación de competencias laborales.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--isco-gold)] mb-2">
                3 Sedes
              </span>
              <strong className="text-sm sm:text-base font-bold text-white mb-1">
                Presencia Física
              </strong>
              <p className="text-xs text-white/70 max-w-[200px]">
                Espacios cercanos en Puebla, Córdoba y Ciudad de México.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-400 mb-2">
                100%
              </span>
              <strong className="text-sm sm:text-base font-bold text-white mb-1">
                Validez Oficial
              </strong>
              <p className="text-xs text-white/70 max-w-[200px]">
                Programas y certificaciones con validez legal garantizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN INTEGRADA: QUÉ HACEMOS (PATRÓN 2: 6 EJES DE ACCIÓN) ── */}
      <section id="que-hacemos" className="section-padding bg-white scroll-mt-24 border-b border-slate-200/80">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Qué Hacemos: 6 Ejes de Acción para Acompañarte
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Convertimos nuestro mandato social en acciones prácticas y concretas para personas, trabajadores, familias e instituciones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seisEjes.map((eje) => {
              const IconComp = eje.icon;

              return (
                <div
                  key={eje.num}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 ${eje.borderColor} border-t-4 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                        {eje.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[var(--primary)] transition-colors">
                      {eje.titulo}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">
                      {eje.descripcion}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {eje.rutas.map((ruta, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{ruta}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    {eje.enlace.startsWith('http') ? (
                      <a
                        href={eje.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-900 group-hover:text-[var(--primary)] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{eje.cta}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={eje.enlace}
                        className="text-xs font-bold text-slate-900 group-hover:text-[var(--primary)] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{eje.cta}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN INTEGRADA: ECOSISTEMA DE UNIDADES ESPECIALIZADAS (PATRÓN 1: FEATURE BLOCKS) ── */}
      <section id="ecosistema" className="section-padding bg-slate-50/70 scroll-mt-24 border-b border-slate-200/80">
        <div className="shell space-y-12 md:space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestro Ecosistema: Unidades que Hacen Posible la Labor
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Cada una de nuestras ramas especializadas cuenta con un enfoque profesional definido para brindarte atención cercana, acompañamiento riguroso y validez legal plena.
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {unidadesEcosistema.map((u) => (
              <div
                key={u.id}
                id={u.id}
                className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 scroll-mt-28 flex flex-col justify-end"
              >
                {/* Imagen Fotográfica Auténtica Protagónica */}
                <img
                  src={u.image}
                  alt={u.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Gradiente multicapa de contraste y legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />

                {/* Distintivo flotante superior */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
                    {u.badge}
                  </span>
                </div>

                {/* Contenido Editorial Progresivo */}
                <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[var(--isco-cyan)] uppercase block mb-1">
                    {u.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
                    {u.title}
                  </h3>

                  {/* Indicador en desktop (desaparece en hover) */}
                  <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-white/75 mt-3 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
                    <span>Pasa el cursor para ver detalles</span>
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>

                  {/* Resto del texto: Revelación progresiva suave en hover */}
                  <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
                      {u.description}
                    </p>

                    {/* Puntos Clave */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
                      {u.points.map((pt, idx) => (
                        <div key={idx} className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                          <span className="text-sm font-bold text-white block mb-0.5">{pt.title}</span>
                          <span className="text-xs text-slate-300">{pt.desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botones de acción institucionales */}
                    <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                      {u.externalCta || u.href.startsWith('http') ? (
                        <a
                          href={u.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                        >
                          <span>{u.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          href={u.href}
                          className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                        >
                          <span>{u.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}

                      {u.secondaryCta && (
                        u.externalSecondary ? (
                          <a
                            href={u.secondaryHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                          >
                            <span>{u.secondaryCta}</span>
                          </a>
                        ) : (
                          <Link
                            href={u.secondaryHref}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                          >
                            <span>{u.secondaryCta}</span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Principios Éticos y Transversales (10) (Patrón 2 Ejecutivo) ── */}
      <section id="principios" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="shell">
          <SectionHeading
            title="Los 10 Principios que Guían Nuestro Trabajo Diario"
            subtitle="Nuestros compromisos éticos para brindarte una atención honesta, digna, cercana y transparente."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {principiosTransversales.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 border-t-2 border-t-[var(--primary)] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                      {p.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/60" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[var(--primary)] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Valores Cardinales (8) (Patrón 2 Ejecutivo Dorado) ── */}
      <section className="section-padding bg-[var(--surface-transparencia)] border-b border-slate-200/80">
        <div className="shell">
          <SectionHeading
            title="Nuestras Convicciones Morales"
            subtitle="Ocho valores fundamentales que sustentan la confianza que depositas en nosotros."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 border-t-2 border-t-[var(--gold)] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)] mb-3 group-hover:scale-125 transition-transform" />
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-[var(--gold-deep)] transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {valor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Respaldo Institucional y Certeza Jurídica (Patrón 2 TrustBar + Patrón 3 Transparencia) ── */}
      <section id="certeza" className="section-padding bg-white border-t border-slate-200/80 scroll-mt-24">
        <div className="shell">
          <SectionHeading
            title="Certeza Jurídica y Respaldo Oficial"
            subtitle="Tu tranquilidad y la absoluta validez de tus documentos son nuestra prioridad fundamental."
          />

          {/* Placas ejecutivas TrustBar */}
          <div className="mb-10">
            <TrustBar />
          </div>

          {/* Tarjetas de Transparencia y Documentos Oficiales (Patrón 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* Doc 1 - Acreditación CONOCER */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shadow-2xs group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Oficial Vigente
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  Acreditación CONOCER
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Entidad de Certificación y Evaluación oficial en el Sistema Nacional de Competencias (ECE760-26).
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
                Acreditación ECE760-26
              </div>
            </div>

            {/* Doc 2 - Validez Educativa */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shadow-2xs group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Vigente
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  Centro de Asesoría
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Acompañamiento académico en el plan modular de bachillerato de 22 módulos con orientación personalizada.
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
                Instituto Ibérica
              </div>
            </div>

            {/* Doc 3 - Integridad y Conducta */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shadow-2xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Protocolo Activo
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  Integridad y Conducta
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Directrices claras de actuación ética, imparcialidad y prevención de conflicto de interés en nuestras acciones.
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
                Comité de Integridad
              </div>
            </div>

            {/* Doc 4 - Código de Ética y ARCO */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shadow-2xs group-hover:scale-105 transition-transform">
                    <Lock className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Protocolo Activo
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  Código de Ética y ARCO
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Políticas de integridad institucional y procedimiento formal para el ejercicio de derechos ARCO (LFPDPPP).
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
                <Link href="/transparencia#arco" className="text-[var(--isco-blue)] hover:underline font-bold">
                  Procedimiento ARCO →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/transparencia"
              className="isco-btn isco-btn-secondary inline-flex items-center gap-2 font-bold"
            >
              <span>Consultar repositorio completo de Transparencia y Acreditaciones</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. Modelo de Impacto Social ── */}
      <section className="section-padding bg-slate-50/70 border-t border-slate-200/80">
        <div className="shell">
          <SectionHeading
            title="De la Educación a la Transformación Real"
            subtitle="Un proceso estructurado para convertir tu aprendizaje en bienestar personal, familiar y laboral."
          />
          <ImpactModel />
        </div>
      </section>

      {/* ── 12. Cierre y Llamado a la Acción ── */}
      <CtaSection
        title="El cambio más grande comienza con una simple conversación."
        subtitle="Cuéntanos cuál es tu objetivo o el de tu equipo. Estamos aquí para escucharte, orientarte y acompañarte en cada paso del camino."
        backgroundImage="/img/cta-conversacion.jpg"
        backgroundOpacity={0.50}
        buttons={[
          { label: 'Escríbenos o déjanos un mensaje', href: '/contacto', variant: 'primary' },
          { label: 'Conocer nuestras sedes', href: '/contacto#sedes', variant: 'secondary' },
        ]}
      />
    </div>
  );
}
