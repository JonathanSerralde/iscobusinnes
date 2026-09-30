import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Award,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Lock,
  ChevronDown,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { CtaSection } from '@/components/shared/cta-section';

export const metadata: Metadata = {
  title: 'Instituto Ibérica — Educación, Certificación Laboral y Vinculación',
  description:
    'Instituto Ibérica conecta a personas, instituciones y empresas con bachillerato modular SEP, certificación de competencias laborales CONOCER y vinculación estratégica.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx',
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   PÁGINA DE INICIO — iscobusiness.edu.mx
   Diseño editorial, humano, cercano y con credibilidad institucional.
   - Sin micro-etiquetas robóticas (eyebrows) ni estética de plantilla artificial.
   - Fotografía auténtica de gran escala y tipografía cuidada.
   - Copys cálidos y empáticos centrados en personas reales.
   ═══════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO INSTITUCIONAL CÁLIDO Y HUMANO
          ───────────────────────────────────────────────────────────── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/fcs-educacion-prepa.jpg"
        backgroundOpacity={0.78}
        showGrid={false}
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
        title="Detrás de cada meta que buscas alcanzar, hay años de esfuerzo que merecen valor oficial."
      />

      {/* ─────────────────────────────────────────────────────────────
          2. CINTA DE NAVEGACIÓN DIRECTA EJECUTIVA E INSTITUCIONAL
          ───────────────────────────────────────────────────────────── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[740px] md:min-w-0 grid grid-cols-5 text-center divide-x divide-slate-100">
            {/* 01. Centro de Asesoría */}
            <a
              href="#centro-de-asesoria"
              className="relative py-4 px-3 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              {/* Franja superior ejecutiva institucional */}
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />

              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span>Centro de Asesoría</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Instituto Ibérica
              </span>
            </a>

            {/* 02. Certificación SEP-CONOCER */}
            <a
              href="#certificacion-laboral"
              className="relative py-4 px-3 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              {/* Franja superior ejecutiva institucional */}
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />

              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Certificación</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                SEP-CONOCER
              </span>
            </a>

            {/* 03. Educación Continua */}
            <a
              href="#educacion-continua"
              className="relative py-4 px-3 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              {/* Franja superior ejecutiva institucional */}
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />

              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span>Educación Continua</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Cursos y Diplomados
              </span>
            </a>

            {/* 04. Vinculación */}
            <a
              href="#vinculacion"
              className="relative py-4 px-3 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              {/* Franja superior ejecutiva institucional */}
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />

              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <span>Vinculación</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Alianzas Sociales
              </span>
            </a>

            {/* 05. Transparencia */}
            <a
              href="#transparencia"
              className="relative py-4 px-3 transition-all duration-200 hover:bg-slate-50/80 flex flex-col items-center justify-center gap-1 group"
            >
              {/* Franja superior ejecutiva institucional */}
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />

              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300/80 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Transparencia</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Certeza y Legalidad
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. GRANDES PROGRAMAS EN BLOQUES EDITORIALES CON FOTOGRAFÍA
          ───────────────────────────────────────────────────────────── */}
      <section id="programas" className="section-padding bg-slate-50/60 scroll-mt-24 relative">
        <span id="rutas" className="absolute -top-24" aria-hidden="true" />
        <span id="servicios" className="absolute -top-24" aria-hidden="true" />

        <div className="shell space-y-16 md:space-y-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Opciones reales pensadas para tu momento de vida
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Diseñamos cada programa entendiendo que tienes un trabajo, una familia y un tiempo valioso. Sin trámites impersonales ni barreras burocráticas.
            </p>
          </div>

          {/* ── BLOQUE 01: CENTRO DE ASESORÍA - INSTITUTO IBÉRICA ── */}
          <div
            id="centro-de-asesoria"
            className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 scroll-mt-28 flex flex-col justify-end"
          >
            {/* Imagen Fotográfica Protagónica con opacidad */}
            <img
              src="/img/fcs-educacion-prepa.jpg"
              alt="Estudiantes en sesión del Centro de Asesoría — Instituto Ibérica"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Capa de opacidad y degradado: muestra el título y profundiza en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />

            {/* Distintivo de categoría */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
                Asesoría académica personalizada
              </span>
            </div>

            {/* Contenido: Título visible en reposo, resto del texto desplegado en hover */}
            <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
                Concluye tu bachillerato sin pausar tu vida ni tu trabajo
              </h3>

              {/* Indicador sutil en desktop (desaparece en hover) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-white/75 mt-3 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
                <span>Pasa el cursor para ver detalles</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>

              {/* Resto del texto: Se revela suavemente al hacer hover */}
              <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
                  Sabemos que muchas veces las circunstancias de la vida obligan a posponer los estudios. Con el Centro de Asesoría del Instituto Ibérica avanzas a tu propio ritmo a través del modelo modular de 22 módulos, con asesorías impartidas por docentes comprometidos que te explican con paciencia, empatía y respeto.
                </p>

                {/* Puntos Clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Plan de 22 Módulos</span>
                    <span className="text-xs text-slate-300">Acompañamiento docente paso a paso</span>
                  </div>
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Horarios a tu medida</span>
                    <span className="text-xs text-slate-300">Asesorías presenciales y virtuales</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                  <Link
                    href="/centro-de-asesoria"
                    className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Conocer el Centro de Asesoría</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/centro-de-asesoria#registro"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                  >
                    <span>Hablar con un asesor</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── BLOQUE 02: CERTIFICACIÓN CONOCER ── */}
          <div
            id="certificacion-laboral"
            className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 scroll-mt-28 flex flex-col justify-end"
          >
            {/* Imagen Fotográfica Protagónica con opacidad */}
            <img
              src="/img/fcs-certificacion-conocer.jpg"
              alt="Entrega y revisión de certificación oficial SEP-CONOCER"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Capa de opacidad y degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />

            {/* Distintivo de categoría */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
                Certificación oficial SEP-CONOCER
              </span>
            </div>

            {/* Contenido: Título visible en reposo, resto del texto desplegado en hover */}
            <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
                Lo que aprendiste trabajando día a día vale tanto como un título
              </h3>

              {/* Indicador sutil en desktop (desaparece en hover) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-white/75 mt-3 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
                <span>Pasa el cursor para ver detalles</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>

              {/* Resto del texto: Se revela suavemente al hacer hover */}
              <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
                  Tienes años resolviendo retos en tu oficio, liderando equipos o dominando tu especialidad, pero a menudo te piden un documento oficial. A través de nuestra Entidad de Certificación y Evaluación oficial ECE760-26, evaluamos y reconocemos tus competencias con validez oficial de la SEP en toda la República Mexicana.
                </p>

                {/* Puntos Clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Acreditación ECE760-26</span>
                    <span className="text-xs text-slate-300">Red oficial SEP-CONOCER</span>
                  </div>
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Validez Federal</span>
                    <span className="text-xs text-slate-300">Certificado oficial sin caducidad</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                  <a
                    href="https://iberica.iscobusiness.edu.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Quiero certificar mi experiencia</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://iberica.iscobusiness.edu.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                  >
                    <span>Portal del Centro Evaluador</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── BLOQUE 03: EDUCACIÓN CONTINUA ── */}
          <div
            id="educacion-continua"
            className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 scroll-mt-28 flex flex-col justify-end"
          >
            {/* Imagen Fotográfica Protagónica con opacidad */}
            <img
              src="/img/fcs-educacion-continua.jpg"
              alt="Taller de capacitación y actualización en educación continua"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Capa de opacidad y degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />

            {/* Distintivo de categoría */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
                Formación práctica y humana
              </span>
            </div>

            {/* Contenido: Título visible en reposo, resto del texto desplegado en hover */}
            <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
                Aprende habilidades prácticas para proteger a tu gente y mejorar tu entorno
              </h3>

              {/* Indicador sutil en desktop (desaparece en hover) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-white/75 mt-3 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
                <span>Pasa el cursor para ver detalles</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>

              {/* Resto del texto: Se revela suavemente al hacer hover */}
              <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
                  Capacitaciones diseñadas para resolver retos concretos: desde primeros auxilios psicológicos e intervención en crisis ante emergencias, hasta didáctica basada en habilidades cognitivas y formación en protección civil comunitaria. Conocimiento útil para salvar vidas y enriquecer tu vocación.
                </p>

                {/* Puntos Clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Cursos activos</span>
                    <span className="text-xs text-slate-300">Con registro y valor curricular</span>
                  </div>
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Modalidades flexibles</span>
                    <span className="text-xs text-slate-300">Virtual, presencial y para grupos</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                  <Link
                    href="/educacion-continua"
                    className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Ver cursos y diplomados</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contacto?tema=Educación Continua"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                  >
                    <span>Solicitar informes</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── BLOQUE 04: VINCULACIÓN INSTITUCIONAL ── */}
          <div
            id="vinculacion"
            className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 scroll-mt-28 flex flex-col justify-end"
          >
            {/* Imagen Fotográfica Protagónica con opacidad */}
            <img
              src="/img/fcs-vinculacion-alianzas.jpg"
              alt="Firma y celebración de acuerdo de colaboración institucional"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Capa de opacidad y degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />

            {/* Distintivo de categoría */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
                Construcción de alianzas con propósito
              </span>
            </div>

            {/* Contenido: Título visible en reposo, resto del texto desplegado en hover */}
            <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
                Nadie sale adelante solo: cuando sumamos voluntades, el bienestar se multiplica
              </h3>

              {/* Indicador sutil en desktop (desaparece en hover) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-white/75 mt-3 transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
                <span>Pasa el cursor para ver detalles</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>

              {/* Resto del texto: Se revela suavemente al hacer hover */}
              <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
                  Trabajamos codo a codo con empresas responsables, ayuntamientos, universidades y colectivos civiles. Si tu organización busca becar a sus colaboradores, capacitar a sus brigadas o impulsar proyectos sociales en su comunidad, construyamos un convenio con metas claras y resultados medibles.
                </p>

                {/* Puntos Clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-2xl">
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Alianzas multisectoriales</span>
                    <span className="text-xs text-slate-300">Empresas, gobiernos y sociedad civil</span>
                  </div>
                  <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                    <span className="text-sm font-bold text-white block mb-0.5">Presencia en 3 sedes</span>
                    <span className="text-xs text-slate-300">Puebla, Córdoba y Ciudad de México</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                  <Link
                    href="/vinculacion"
                    className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Mesa de Vinculación</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/vinculacion#formulario"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-white/15 hover:bg-white/25 border border-white/25 transition-all backdrop-blur-sm"
                  >
                    <span>Proponer una alianza</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FRANJA DE INDICADORES DE IMPACTO Y RESPALDO
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[var(--isco-navy)] text-white border-y border-slate-800">
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

      {/* ─────────────────────────────────────────────────────────────
          5. CERTEZA JURÍDICA Y TRANSPARENCIA ACTIVA
          ───────────────────────────────────────────────────────────── */}
      <section id="transparencia" className="section-padding bg-slate-50/70 border-t border-slate-200/90 scroll-mt-24">
        <div className="shell">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              La confianza no se pide: se demuestra con honestidad y cuentas claras
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Como Organización de la Sociedad Civil sin fines de lucro, creemos que la transparencia es el pilar de cualquier comunidad sana. Aquí puedes consultar nuestras acreditaciones oficiales, protocolos éticos y mecanismos de protección de datos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Doc 1 - Acreditación CONOCER */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <Award className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Oficial Vigente
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
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
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <GraduationCap className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Vigente
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
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
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <ShieldCheck className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Protocolo Activo
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
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
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <Lock className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Protocolo Activo
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
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

          <div className="mt-8 text-center">
            <Link
              href="/transparencia"
              className="isco-btn isco-btn-secondary inline-flex items-center gap-2"
            >
              <span>Consultar repositorio completo de Transparencia</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CTA FINAL INSTITUCIONAL
          ───────────────────────────────────────────────────────────── */}
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
