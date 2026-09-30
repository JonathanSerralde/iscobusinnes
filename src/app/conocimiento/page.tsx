import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  Newspaper,
  Download,
  FileText,
  Users,
  ArrowRight,
  ShieldCheck,
  Mail,
  Sparkles,
  Award,
  ShieldAlert,
  MapPin,
  Building2,
  CheckCircle2,
  Clock,
  BarChart3,
  Layers,
  Phone,
  Compass,
  GraduationCap,
  ExternalLink,
  HelpCircle,
  HeartHandshake,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { CtaSection } from '@/components/shared/cta-section';

export const metadata: Metadata = {
  title: 'Actualidad y Conocimiento | Centro Editorial y Biblioteca Digital',
  description:
    'Centro editorial, biblioteca digital de acceso abierto, investigaciones aplicadas, agenda institucional y sala de prensa de ISCOBusiness y sus unidades especializadas.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx/conocimiento',
  },
};

/* ═══════════════════════════════════════════════════════════════
   ACTUALIDAD Y CONOCIMIENTO — /conocimiento
   Centro Editorial, Biblioteca Digital y Acervo del Ecosistema
   Lógica cromática: Eje de Conocimiento / Azul Institucional y Cian
   ═══════════════════════════════════════════════════════════════ */

interface EditorialArticle {
  slug: string;
  categoria: string;
  titulo: string;
  resumen: string;
  autor: string;
  fecha: string;
  tiempoLectura: string;
  ods: string[];
  accentBorder: string;
  accentColor: string;
  icon: typeof BookOpen;
}

const ARTICULOS_ANALISIS: EditorialArticle[] = [
  {
    slug: 'trayectorias-educativas-flexibles',
    categoria: 'Educación Abierta y Modular',
    titulo: 'Trayectorias educativas flexibles: el valor del reconocimiento modular para adultos trabajadores',
    resumen:
      'Análisis pedagógico del modelo de 22 módulos oficiales de la SEP y el rol de los centros de asesoría como alternativa indispensable para abatir el rezago educativo, reactivando metas formativas truncas sin obligar a pausar el empleo.',
    autor: 'Comité Académico Instituto Ibérica',
    fecha: 'Septiembre 2026',
    tiempoLectura: '5 min de lectura',
    ods: ['ODS 4: Educación de Calidad', 'ODS 8: Trabajo Decente'],
    accentBorder: 'border-t-[#0284c7]',
    accentColor: 'text-[#0284c7]',
    icon: BookOpen,
  },
  {
    slug: 'estandares-competencias-frente-ia',
    categoria: 'Certificación Laboral CONOCER',
    titulo: 'El papel de los estándares de competencia laboral ante la automatización y reconversión productiva',
    resumen:
      'Por qué la evaluación de saberes prácticos y la certificación federal ante el CONOCER brindan una ventaja insustituible para personas trabajadoras frente a la incertidumbre tecnológica y las exigencias de profesionalización in situ.',
    autor: 'Comité Técnico ECE760-26 CONOCER',
    fecha: 'Agosto 2026',
    tiempoLectura: '7 min de lectura',
    ods: ['ODS 8: Trabajo Decente', 'ODS 9: Industria e Innovación'],
    accentBorder: 'border-t-[#4f46e5]',
    accentColor: 'text-[#4f46e5]',
    icon: Award,
  },
  {
    slug: 'resiliencia-comunitaria-proteccion-civil',
    categoria: 'Protección Civil y Cuidado Barrial',
    titulo: 'Gestión comunitaria del riesgo: de la reacción ante emergencias a la cultura de prevención barrial',
    resumen:
      'Sistematización de experiencias en articulación vecinal, formación de brigadas escolares y protocolos de primeros auxilios y apoyo socioemocional de primer contacto para mitigar riesgos territoriales y sísmicos en zonas urbanas.',
    autor: 'Coordinación de Proyectos Sociales y Resiliencia',
    fecha: 'Julio 2026',
    tiempoLectura: '6 min de lectura',
    ods: ['ODS 11: Ciudades Resilientes', 'ODS 13: Acción por el Clima'],
    accentBorder: 'border-t-[#0d9488]',
    accentColor: 'text-[#0d9488]',
    icon: ShieldAlert,
  },
];

interface ImpactStory {
  titulo: string;
  eje: string;
  ubicacion: string;
  situacion: string;
  intervencion: string;
  resultado: string;
  accentBorder: string;
}

const HISTORIAS_IMPACTO: ImpactStory[] = [
  {
    titulo: 'De la confección empírica al taller formal certificado: cooperativa textil en Hidalgo',
    eje: 'Desarrollo Económico y Certificación',
    ubicacion: 'Pachuca y Valle del Mezquital, Hidalgo',
    situacion:
      '14 mujeres con más de una década de experiencia en corte y confección carecían de comprobante formal de competencias para licitar como proveedoras ante instituciones y acceder a financiamiento solidario.',
    intervencion:
      'Acompañamiento diagnóstico y evaluación de competencias laborales bajo estándares oficiales ante la Entidad ECE760-26, complementado con talleres de administración básica y vinculación asociativa.',
    resultado:
      'Certificación federal de la totalidad del grupo, incremento del 35% en ingresos demostrables y suscripción de dos convenios formales de proveeduría de uniformes escolares.',
    accentBorder: 'border-t-[#d97706]',
  },
  {
    titulo: 'Concluir el bachillerato a los 42 años: superación laboral sin descuidar el empleo familiar',
    eje: 'Educación Abierta y Modular',
    ubicacion: 'Puebla y Valle de México',
    situacion:
      'Trabajador del sector de almacenamiento y logística con 18 años de trayectoria requería el certificado oficial de bachillerato para postularse a una plaza de coordinación operativa con incremento de responsabilidad.',
    intervencion:
      'Ruta modular flexible con el Centro de Asesoría de Instituto Ibérica, con asesorías sabatinas presenciales, materiales digitales autogestivos y simuladores pedagógicos módulo por módulo.',
    resultado:
      'Acreditación exitosa de los 22 módulos en 14 meses de estudio constante y obtención del certificado oficial de la SEP, logrando la promoción laboral inmediata.',
    accentBorder: 'border-t-[#0284c7]',
  },
  {
    titulo: 'Brigadas de primer contacto y prevención de riesgos en centros comunitarios populares',
    eje: 'Protección Civil y Cuidado Social',
    ubicacion: 'Zona Metropolitana del Valle de México',
    situacion:
      'Colectivos vecinales y comedores comunitarios operaban sin brigadas capacitadas ni protocolos básicos para actuar con serenidad y eficacia ante conatos de incendio, sismos o crisis socioemocionales.',
    intervencion:
      'Programa intensivo de formación continua con registro oficial SECTEI, combinando técnicas andragógicas de primeros auxilios, evacuación preventiva y contención empática ante emergencias.',
    resultado:
      'Habilitación de 48 brigadistas comunitarios con constancia curricular formal y equipamiento preventivo básico en 6 puntos de encuentro barrial.',
    accentBorder: 'border-t-[#e11d48]',
  },
];

interface LibraryDoc {
  id: string;
  tipo: string;
  titulo: string;
  descripcion: string;
  formato: string;
  fecha: string;
  categoria: string;
  accentBorder: string;
  icon: typeof FileText;
}

const DOCUMENTOS_BIBLIOTECA: LibraryDoc[] = [
  {
    id: 'DOC-01',
    tipo: 'Informe Institucional',
    titulo: 'Memoria Anual de Gestión Social y Actividades 2025',
    descripcion:
      'Reporte transparente de actividades, convenios suscritos, impacto en personas beneficiarias y estados de rendición de cuentas de la Asociación Civil conforme a principios de gobierno abierto.',
    formato: 'PDF · 2.4 MB',
    fecha: 'Enero 2026',
    categoria: 'Gobernanza y Transparencia',
    accentBorder: 'border-t-[#083665]',
    icon: FileText,
  },
  {
    id: 'DOC-02',
    tipo: 'Guía Pedagógica',
    titulo: 'Guía Metodológica del Estudiante en Modalidad Abierta',
    descripcion:
      'Estrategias de estudio independiente, dosificación del tiempo personal, comprensión lectora y uso formativo de rúbricas para los 22 módulos del bachillerato modular SEP.',
    formato: 'PDF · 1.8 MB',
    fecha: 'Marzo 2026',
    categoria: 'Orientación Educativa',
    accentBorder: 'border-t-[#0284c7]',
    icon: BookOpen,
  },
  {
    id: 'DOC-03',
    tipo: 'Marco Metodológico',
    titulo: 'Modelo de Impacto Social y Línea Base Comunitaria 2026',
    descripcion:
      'Documento metodológico que define los indicadores de evaluación de saberes, criterios de verificación en campo y alineación directa con los Objetivos de Desarrollo Sostenible (ODS).',
    formato: 'PDF · 3.1 MB',
    fecha: 'Junio 2026',
    categoria: 'Metodología e Investigación',
    accentBorder: 'border-t-[#0d9488]',
    icon: BarChart3,
  },
  {
    id: 'DOC-04',
    tipo: 'Manual de Prevención',
    titulo: 'Manual Básico de Primeros Auxilios y Evacuación Comunitaria',
    descripcion:
      'Protocolos prácticos redactados en lenguaje claro y accesible para brigadas barriales, comercios locales, familias y centros escolares de educación básica.',
    formato: 'PDF · 4.2 MB',
    fecha: 'Mayo 2026',
    categoria: 'Protección Civil y Salud',
    accentBorder: 'border-t-[#d97706]',
    icon: ShieldAlert,
  },
];

interface EventItem {
  id: string;
  tipo: string;
  titulo: string;
  fecha: string;
  modalidad: string;
  unidad: string;
  estado: 'Abierta' | 'Próximo';
}

const CONVOCATORIAS_AGENDA: EventItem[] = [
  {
    id: 'conv-vol-2026',
    tipo: 'CONVOCATORIA ABIERTA',
    titulo: 'Convocatoria: Asesores Académicos Solidarios en Ciencias y Comunicación para Centro de Asesoría',
    fecha: '15 de Octubre al 30 de Noviembre, 2026',
    modalidad: 'Híbrida (Acompañamiento virtual y sedes en Puebla / CDMX / Hidalgo)',
    unidad: 'Instituto Ibérica — Bachillerato Abierto',
    estado: 'Abierta',
  },
  {
    id: 'web-ods-sep',
    tipo: 'FORO INTERSECTORIAL',
    titulo: 'Foro Virtual: Alianzas Productivas y Certificación de Competencias Laborales en México',
    fecha: '24 de Octubre, 2026 · 17:00 hrs (Hora del Centro)',
    modalidad: 'Transmisión en vivo vía Google Meet y canal institucional',
    unidad: 'Entidad de Certificación y Evaluación ECE760-26',
    estado: 'Próximo',
  },
  {
    id: 'taller-oficios',
    tipo: 'SESIÓN INFORMATIVA',
    titulo: 'Sesión Informativa: Protocolos Comunitarios de Protección Civil y Gestión del Riesgo Barrial',
    fecha: '05 de Noviembre, 2026 · 11:00 hrs',
    modalidad: 'Presencial Sede Puebla y transmisión mixta en línea',
    unidad: 'Educación Continua y Actualización Profesional',
    estado: 'Próximo',
  },
];

const FAQ_CONOCIMIENTO = [
  {
    question: '¿Los documentos y guías de la Biblioteca Digital tienen algún costo de descarga?',
    answer:
      'No. Todos los materiales, informes anuales, guías pedagógicas del estudiante y manuales comunitarios publicados en nuestra Biblioteca Digital son de libre acceso y descarga gratuita bajo el principio de democratización del conocimiento y responsabilidad social institucional.',
  },
  {
    question: '¿Puedo citar o utilizar los artículos y manuales en investigaciones académicas o tesis?',
    answer:
      'Sí, con entera libertad. Solicitamos citar la autoría correspondiente conforme a estándares bibliográficos (APA o similar), indicando el título de la publicación, el comité o unidad autora de ISCOBusiness y la fecha de publicación original.',
  },
  {
    question: '¿Cómo puedo postular un artículo o sistematización de experiencia para publicación?',
    answer:
      'Cualquier docente, investigador, directivo o promotor social puede remitir una propuesta al Comité Editorial a través de la Mesa de Contacto Institucional (seleccionando el motivo "Editorial"). Nuestro equipo revisará el texto evaluando su rigor técnico, originalidad, pertinencia ética y utilidad social.',
  },
  {
    question: '¿Dónde se gestionan las solicitudes formales de prensa o entrevistas con portavoces?',
    answer:
      'Las solicitudes de prensa, cobertura periodística, entrevistas con directores de área y solicitud del manual de identidad gráfica oficial se atienden directamente en prensa@iscobusiness.edu.mx o vía telefónica en el número institucional (222) 105 0550.',
  },
  {
    question: '¿Cómo se garantiza la veracidad y el respeto a la dignidad en las historias de impacto?',
    answer:
      'Todas las historias documentadas cuentan con consentimiento informado, verificación de fuentes testimoniales en campo y apego estricto a las políticas de privacidad. No se publican nombres ni fotografías sin autorización explícita y se evita cualquier forma de explotación de la vulnerabilidad personal.',
  },
  {
    question: '¿Las convocatorias para asesores solidarios y docentes están abiertas a todo el país?',
    answer:
      'Sí. Dado que contamos con esquemas de asesoría virtual y semipresencial, recibimos postulaciones de especialistas, docentes y pedagogos de toda la República Mexicana interesados en contribuir al fortalecimiento del aprendizaje modular y la inclusión.',
  },
];

export default function ConocimientoPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. HERO INSTITUCIONAL (LIGHT VARIANT CON FOTO AUTÉNTICA) ── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/proposito-comunidad.jpg"
        backgroundOpacity={0.80}
        title="Evidencia, rigor editorial y conocimiento para el bien común."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 01. Propósito */}
            <a
              href="#proposito"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Propósito</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Rigor y Evidencia
              </span>
            </a>

            {/* 02. Artículos */}
            <a
              href="#articulos"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span>Artículos</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Análisis e Ideas
              </span>
            </a>

            {/* 03. Historias */}
            <a
              href="#historias"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <span>Historias</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Impacto Real
              </span>
            </a>

            {/* 04. Biblioteca Digital */}
            <a
              href="#biblioteca"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span>Biblioteca</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Descarga Abierta
              </span>
            </a>

            {/* 05. Agenda */}
            <a
              href="#agenda"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span>Agenda</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Foros y Eventos
              </span>
            </a>

            {/* 06. Sala de Prensa */}
            <a
              href="#prensa"
              className="relative py-4 px-2 transition-all duration-200 hover:bg-slate-50/80 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300/80 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <Newspaper className="w-3.5 h-3.5" />
                </div>
                <span>Sala de Prensa</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Medios y Boletines
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

      {/* ── 3. SECCIÓN: PROPÓSITO EDITORIAL Y RIGOR HUMANO ── */}
      <section id="proposito" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Pensamiento y Acción Social
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                Generamos conocimiento útil para la dignidad humana y el desarrollo comunitario
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                En ISCOBusiness concebimos la labor editorial no como un ejercicio académico aislado en bibliotecas cerradas, sino como el puente necesario entre la investigación rigurosa y las necesidades cotidianas de las personas en comunidades, escuelas y centros de trabajo.
              </p>
              <div className="p-5 bg-sky-50/70 border-l-4 border-l-[#0284c7] rounded-r-2xl text-xs md:text-sm text-slate-800 leading-relaxed italic shadow-2xs mb-6">
                "La investigación social y pedagógica adquiere verdadero sentido cuando se traduce en herramientas prácticas: un manual que salva vidas ante un sismo, una metodología que reactiva el bachillerato de un adulto trabajador o un estándar que dignifica un oficio forjado en el esfuerzo diario."
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Todas nuestras publicaciones están abiertas a la consulta pública bajo licencias que promueven el libre acceso, la colaboración interdisciplinaria y la adopción comunitaria sin barreras económicas.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: '01',
                  title: 'Rigor y Fuentes Confiables',
                  desc: 'Publicaciones respaldadas por metodologías validadas, experiencia pedagógica en aula y datos de campo.',
                },
                {
                  num: '02',
                  title: 'Enfoque de Derechos y ODS',
                  desc: 'Alineación sistemática con las metas de la Agenda 2030, la inclusión y la justicia social en México.',
                },
                {
                  num: '03',
                  title: 'Acceso Abierto y Gratuito',
                  desc: 'Documentos técnicos, guías y memorias descargables sin costo para democratizar el saber.',
                },
                {
                  num: '04',
                  title: 'Lenguaje Claro y Humano',
                  desc: 'Comunicación empática y accesible que traduce conceptos técnicos en soluciones comprensibles.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-slate-900 font-mono font-bold text-xs flex items-center justify-center group-hover:bg-sky-50 group-hover:text-[#0284c7] group-hover:border-sky-200 transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">ISCOBusiness</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
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
              <div className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-2 font-sans">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Acceso Abierto (Open Access)
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Publicaciones y manuales técnicos para libre descarga
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#34d399] tracking-tight mb-2 font-sans">
                4
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Líneas de Investigación
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Educación abierta, competencias, resiliencia y ODS
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#fbbf24] tracking-tight mb-2 font-sans">
                10+
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Metas de Impacto Social
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Evidencias medibles en territorio y comunidades
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2 font-sans">
                24/7
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Biblioteca Digital Disponible
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Guías pedagógicas, memorias y protocolos en PDF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECCIÓN: ARTÍCULOS DE FONDO Y ANÁLISIS TÉCNICO (PATRÓN 2) ── */}
      <section id="articulos" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Publicaciones Editoriales
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Artículos de Fondo, Análisis Técnico y Perspectiva Social
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Reflexiones interdisciplinarias elaboradas por especialistas, docentes y comités técnicos del ecosistema para aportar soluciones a los retos del país.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-700 bg-white border border-slate-200/90 px-4 py-2.5 rounded-xl shadow-2xs self-start md:self-end">
              3 artículos de fondo publicados
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICULOS_ANALISIS.map((art) => {
              const IconComp = art.icon;

              return (
                <article
                  key={art.slug}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${art.accentBorder} border-t-4 group`}
                >
                  <div>
                    {/* Header con Placa Opción A */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                        <IconComp className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{art.tiempoLectura}</span>
                      </div>
                    </div>

                    <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80 inline-block mb-3">
                      {art.categoria}
                    </span>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-[#075fba] transition-colors">
                      {art.titulo}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                      {art.resumen}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-col gap-1 text-xs text-slate-500 mb-3 font-mono">
                      <span className="font-semibold text-slate-700">{art.autor}</span>
                      <span>{art.fecha}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50">
                      {art.ods.map((o, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN: HISTORIAS DE IMPACTO VERIFICABLE EN TERRITORIO ── */}
      <section id="historias" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Transformación Humana Real
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Historias de Impacto Verificable en Comunidades y Centros de Trabajo
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Casos documentados donde la educación abierta flexible y la certificación oficial cambiaron favorablemente la trayectoria laboral y personal de personas trabajadoras, sin especulación ni explotación de vulnerabilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HISTORIAS_IMPACTO.map((hist, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between ${hist.accentBorder} border-t-4 group`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <span className="font-mono text-[11px] font-semibold uppercase text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                      {hist.eje}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hist.ubicacion}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-4 leading-snug">
                    {hist.titulo}
                  </h3>

                  <div className="space-y-3 text-xs mb-6">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                      <strong className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                        Situación de origen:
                      </strong>
                      <span className="text-slate-700 leading-relaxed text-xs">
                        {hist.situacion}
                      </span>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                      <strong className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#075fba] block mb-1">
                        Intervención institucional:
                      </strong>
                      <span className="text-slate-700 leading-relaxed text-xs">
                        {hist.intervencion}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-start gap-2.5 text-xs text-emerald-900 bg-emerald-50/90 p-3.5 rounded-xl border border-emerald-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-emerald-950">Resultado medible:</strong>{' '}
                    <span>{hist.resultado}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN: BIBLIOTECA DIGITAL Y REPOSITORIO TÉCNICO (PATRÓN 3) ── */}
      <section id="biblioteca" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Acervo en Acceso Abierto
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Biblioteca Digital y Repositorio Documental Oficial
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Descarga libre y gratuita de informes anuales, guías pedagógicas del estudiante, marcos metodológicos de impacto y manuales de prevención comunitaria.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-700 bg-white border border-slate-200/90 px-4 py-2.5 rounded-xl shadow-2xs self-start md:self-end">
              4 documentos públicos en PDF
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {DOCUMENTOS_BIBLIOTECA.map((doc) => {
              const IconComp = doc.icon;

              return (
                <div
                  key={doc.id}
                  className={`bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between ${doc.accentBorder} border-t-4 group`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        {/* Placa Opción A */}
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                          <IconComp className="w-5 h-5 text-slate-800" />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                          {doc.id}
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                          {doc.tipo}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        {doc.fecha}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#075fba] transition-colors">
                      {doc.titulo}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                      {doc.descripcion}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono font-medium">
                      {doc.formato}
                    </span>
                    <Link
                      href={`/contacto?motivo=Editorial&doc=${encodeURIComponent(
                        doc.titulo
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition shadow-2xs border border-slate-200/80"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-600" />
                      <span>Solicitar documento</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#0284c7] shrink-0" />
              <span>
                ¿Requieres copias impresas o una sistematización metodológica específica para tu institución? Nuestro equipo editorial orienta tu solicitud.
              </span>
            </div>
            <Link
              href="/contacto?motivo=Editorial"
              className="font-bold text-[#075fba] hover:underline shrink-0 inline-flex items-center gap-1"
            >
              <span>Consultar acervo especializado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. SECCIÓN: AGENDA Y CONVOCATORIAS INSTITUCIONALES (NAVY) ── */}
      <section id="agenda" className="section-padding bg-[#083665] text-white border-y border-slate-800 scroll-mt-28 relative overflow-hidden">
        <div className="shell relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#fbbf24] uppercase bg-amber-950/60 px-3 py-1 rounded-md border border-amber-500/30">
              ACTIVIDADES Y ENCUENTROS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Agenda Institucional y Convocatorias Activas
            </h2>
            <p className="text-sm md:text-base text-slate-300 mt-2 leading-relaxed">
              Foros virtuales, sesiones informativas y convocatorias abiertas para la comunidad académica, estudiantes y organizaciones de la sociedad civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONVOCATORIAS_AGENDA.map((item) => (
              <div
                key={item.id}
                className="bg-white/[0.05] rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded border border-white/15">
                      {item.tipo}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        item.estado === 'Abierta'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                          : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.estado === 'Abierta' ? 'bg-emerald-400' : 'bg-blue-400'
                        }`}
                      />
                      {item.estado}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4 leading-snug group-hover:text-amber-300 transition-colors">
                    {item.titulo}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-300 mb-6 bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item.fecha}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item.modalidad}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.unidad}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/contacto?motivo=Prensa%20y%20comunicaci%C3%B3n&evento=${encodeURIComponent(
                    item.titulo
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-2xs"
                >
                  <span>Registrar interés o asistencia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. SECCIÓN: SALA DE PRENSA Y SEMBLANZA INSTITUCIONAL ── */}
      <section id="prensa" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="bg-slate-50/80 rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-2xs grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-t-4 border-t-[#083665]">
            <div className="lg:col-span-2">
              <span className="font-mono text-[11px] font-semibold uppercase text-slate-700 bg-slate-200/80 px-2.5 py-1 rounded-md border border-slate-300/80">
                MEDIOS DE COMUNICACIÓN Y PRENSA
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
                Sala de Prensa y Semblanza Institucional
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Para solicitudes de entrevistas con portavoces y directivos, comunicados oficiales, notas técnicas y el kit de identidad gráfica autorizada de ISCOBusiness y sus unidades especializadas, contacta a nuestra coordinación de prensa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    Contacto para Prensa
                  </span>
                  <a
                    href="mailto:prensa@iscobusiness.edu.mx"
                    className="text-[#075fba] font-semibold hover:underline block text-xs"
                  >
                    prensa@iscobusiness.edu.mx
                  </a>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    Atención Telefónica Institucional
                  </span>
                  <a
                    href="tel:+522221050550"
                    className="text-[#075fba] font-semibold hover:underline block text-xs"
                  >
                    (222) 105 0550 / contacto@iscobusiness.edu.mx
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-2xs text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-2xs">
                <Newspaper className="w-6 h-6 text-slate-800" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900 mb-2">
                Kit de Identidad Oficial
              </h4>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                Logotipos vectoriales en alta resolución, directrices de uso de marca y datos generales de acreditación.
              </p>
              <Link
                href="/contacto?motivo=Prensa%20y%20comunicaci%C3%B3n"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Solicitar kit de prensa</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. SECCIÓN: PREGUNTAS FRECUENTES (FAQ ACCORDION) ── */}
      <section id="preguntas" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Resolvemos tus dudas sobre el Centro Editorial y Biblioteca
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                Conoce las políticas de libre acceso, directrices para citar nuestras investigaciones, postulaciones de artículos y agenda de foros institucionales.
              </p>
            </div>
            <div>
              <FaqAccordion items={FAQ_CONOCIMIENTO} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. CIERRE INSTITUCIONAL (CTA SECTION) ── */}
      <CtaSection
        title="El conocimiento cobra vida cuando transforma a las personas."
        subtitle="Súmate a nuestra comunidad como lector, investigador o aliado institucional para compartir saberes que construyan un futuro más justo y solidario en México."
        buttons={[
          {
            label: 'Postular colaboración editorial',
            href: '/contacto?motivo=Editorial',
            variant: 'gold',
          },
          {
            label: 'Conocer Centro de Asesoría',
            href: '/centro-de-asesoria',
            variant: 'secondary',
          },
        ]}
        backgroundImage="/img/cta-conversacion.jpg"
        backgroundOpacity={0.50}
        variant="light"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://iscobusiness.edu.mx' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Actualidad y Conocimiento',
                item: 'https://iscobusiness.edu.mx/conocimiento',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
