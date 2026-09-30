import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  GraduationCap,
  BookOpen,
  Award,
  Handshake,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { CtaSection } from '@/components/shared/cta-section';
import { ContactForm } from '@/frontend/components/contacto/contact-form';

export const metadata: Metadata = {
  title: 'Contacto y Sedes de Atención | ISCOBusiness A.C.',
  description:
    'Comunícate con ISCOBusiness. Atención cercana y personalizada para el Centro de Asesoría (Instituto Ibérica), Educación Continua, Certificación Oficial SEP-CONOCER y Vinculación Institucional.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx/contacto',
  },
};

/* ═══════════════════════════════════════════════════════════════
   CONTACTO Y SEDES — /contacto
   Canales Directos, Sedes en Territorio y Protocolo de Calidez
   ═══════════════════════════════════════════════════════════════ */

const sedes = [
  {
    ciudad: 'Puebla (Sede Principal)',
    subtitulo: 'Atención Matriz y Coordinación General',
    direccion:
      'Avenida Orión Sur 733-2, Esquina Calle Mira, Colonia Villa Floresta, C.P. 72825, San Andrés Cholula, Puebla.',
    servicios: ['Atención General', 'Educación Continua', 'Centro de Asesoría', 'Vinculación Institucional'],
    accentBorder: 'border-t-[#083665]',
    mapSrc:
      'https://maps.google.com/maps?q=19.027601%2C-98.2551329&z=17&hl=es&output=embed',
    mapLink: 'https://maps.google.com/maps?q=19.027601%2C-98.2551329&z=17&hl=es',
  },
  {
    ciudad: 'Córdoba, Veracruz',
    subtitulo: 'Sede Regional Centro de Veracruz',
    direccion:
      'Avenida 15 No. 1307, Entre Calles 13 y 15, Fraccionamiento Guadalupe, C.P. 94590, Córdoba, Veracruz.',
    servicios: ['Atención a Usuarios', 'Evaluación de Competencias', 'Capacitación y Tutorías'],
    accentBorder: 'border-t-[#0d9488]',
    mapSrc:
      'https://maps.google.com/maps?q=18.8866638%2C-96.9348421&z=17&hl=es&output=embed',
    mapLink: 'https://maps.google.com/maps?q=18.8866638%2C-96.9348421&z=17&hl=es',
  },
  {
    ciudad: 'Ciudad de México',
    subtitulo: 'Coordinación Metropolitana y Enlace',
    direccion: 'José María Mestre 186, Tlalpan, C.P. 14260, Ciudad de México, CDMX.',
    servicios: ['Vinculación Institucional', 'Sede de Evaluación Acreditada', 'Atención con Cita Previa'],
    accentBorder: 'border-t-[#0284c7]',
    mapSrc:
      'https://maps.google.com/maps?q=Jos%C3%A9+Mar%C3%ADa+Mestre+186%2C+Tlalpan%2C+14260+Ciudad+de+M%C3%A9xico&z=17&hl=es&output=embed',
    mapLink: 'https://maps.google.com/maps?q=Jos%C3%A9+Mar%C3%ADa+Mestre+186%2C+Tlalpan%2C+14260+Ciudad+de+M%C3%A9xico&z=17&hl=es',
  },
];

const canalesServicio = [
  {
    titulo: 'Centro de Asesoría (Instituto Ibérica)',
    desc: 'Orientación académica y acompañamiento para concluir el bachillerato modular oficial de 22 módulos o acreditar saberes previos.',
    enlace: '/centro-de-asesoria#registro',
    ctaText: 'Solicitar asesoría de bachillerato',
    icon: GraduationCap,
    accentBorder: 'border-t-[#0284c7]',
    badge: 'BACHILLERATO MODULAR',
    isExternal: false,
  },
  {
    titulo: 'Educación Continua y Diplomados',
    desc: 'Cursos aplicados, diplomados con registros oficiales SECTEI, capacitación en protección civil, habilidades directivas e inclusión.',
    enlace: '/educacion-continua#catalogo',
    ctaText: 'Explorar oferta formativa',
    icon: BookOpen,
    accentBorder: 'border-t-[#0d9488]',
    badge: 'FORMACIÓN SECTEI',
    isExternal: false,
  },
  {
    titulo: 'Certificación SEP-CONOCER',
    desc: 'Evaluación de competencias laborales y emisión de certificados federales con validez nacional a través de nuestra Entidad ECE760-26.',
    enlace: 'https://iberica.iscobusiness.edu.mx/',
    ctaText: 'Ir a portal especializado ECE',
    icon: Award,
    accentBorder: 'border-t-[#4f46e5]',
    badge: 'VALIDEZ FEDERAL',
    isExternal: true,
  },
  {
    titulo: 'Vinculación y Convenios',
    desc: 'Alianzas estratégicas para empresas, universidades, gobiernos, organizaciones civiles y prestadores de la Red nacional.',
    enlace: '/vinculacion#formulario',
    ctaText: 'Mesa de Vinculación',
    icon: Handshake,
    accentBorder: 'border-t-[#d97706]',
    badge: 'ALIANZAS SOLIDARIAS',
    isExternal: false,
  },
];

const faqContacto = [
  {
    question: '¿Necesito agendar cita previa para acudir a una sede física?',
    answer:
      'Para trámites informativos generales puedes acudir libremente dentro de nuestros horarios regulares. Sin embargo, para sesiones de tutoría docente, diagnósticos de certificación laboral o reuniones de Vinculación Institucional, recomendamos agendar previamente para asegurar la atención exclusiva del coordinador responsable.',
  },
  {
    question: '¿Puedo solicitar información y orientación directamente por WhatsApp?',
    answer:
      'Sí. Contamos con atención digital directa en el número 222 999 9497, donde nuestro equipo te responderá con calidez, resolverá tus dudas sobre calendarios y te canalizará con el área académica o de certificación correspondiente.',
  },
  {
    question: '¿Todos los cursos y programas se imparten en las tres sedes físicas?',
    answer:
      'No necesariamente. La disponibilidad de programas presenciales se programa conforme al calendario de cada sede. No obstante, la gran mayoría de nuestros diplomados, asesorías de bachillerato y procesos de evaluación cuentan con modalidades virtuales o híbridas para que estudies desde cualquier punto del país.',
  },
  {
    question: '¿Dónde me registro para el Bachillerato Abierto Modular del Instituto Ibérica?',
    answer:
      'Puedes iniciar tu pre-registro en línea directamente en /centro-de-asesoria#registro o completar el formulario general en esta misma página seleccionando la opción "Centro de Asesoría". Nos comunicaremos contigo para guiarte en la entrega de documentos.',
  },
  {
    question: '¿Dónde tramito una certificación de competencias laborales SEP-CONOCER?',
    answer:
      'Todo el catálogo de estándares de competencia laboral autorizados, registro de portafolios y emisión de certificados federales se gestiona en nuestro portal especializado ECE760-26 (https://iberica.iscobusiness.edu.mx/).',
  },
  {
    question: '¿Cómo puedo proponer un convenio de colaboración institucional o empresarial?',
    answer:
      'Puedes enviar tu planteamiento a través de nuestra Mesa de Vinculación en /vinculacion#formulario o escribirnos a vinculacion@iscobusiness.edu.mx. Nuestro equipo coordinará una primera reunión de trabajo en menos de 48 horas hábiles.',
  },
];

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. HERO INSTITUCIONAL (LIGHT VARIANT CON FOTO AUTÉNTICA) ── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/hero-reunion-personas.jpg"
        backgroundOpacity={0.80}
        title="Estamos aquí para escucharte, orientarte y acompañarte."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA EJECUTIVA DE NAVEGACIÓN DIRECTA (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 1. Canales */}
            <a
              href="#canales"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>Canales</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Por Área Sustantiva
              </span>
            </a>

            {/* 2. Cifras Clave */}
            <a
              href="#cifras"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Cifras Clave</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Presencia y Tiempos
              </span>
            </a>

            {/* 3. Formulario Directo */}
            <a
              href="#formulario"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Mesa Directa</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Envíanos tu Consulta
              </span>
            </a>

            {/* 4. Medios */}
            <a
              href="#medios"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Medios</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Teléfonos y Correos
              </span>
            </a>

            {/* 5. Sedes */}
            <a
              href="#sedes"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Sedes Físicas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Puebla, CDMX, Córdoba
              </span>
            </a>

            {/* 6. Compromiso de Calidez */}
            <a
              href="#compromiso"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-slate-100/60 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <span>Calidez Humana</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Trato Digno y Respeto
              </span>
            </a>

            {/* 7. Preguntas */}
            <a
              href="#preguntas"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
                <span>Preguntas</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Dudas de Atención
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. SECCIÓN: CANALES DE ORIENTACIÓN POR EJE (PATRÓN 2 ELEVADO) ── */}
      <section id="canales" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Orientación Especializada
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              ¿Cómo podemos ayudarte hoy?
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Elige el área institucional que se ajusta a tu meta personal, laboral o corporativa para canalizarte de inmediato con la coordinación indicada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {canalesServicio.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white p-6 md:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${item.accentBorder} border-t-4 group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Placa Opción A */}
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#075fba] transition-colors leading-snug">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    {item.isExternal ? (
                      <a
                        href={item.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075fba] hover:underline"
                      >
                        <span>{item.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={item.enlace}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075fba] hover:underline"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. SECCIÓN: DATA STRIP MONUMENTAL (PATRÓN 4 EN NAVY) ── */}
      <section id="cifras" className="py-12 md:py-16 bg-[#083665] text-white border-y border-slate-800 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {/* Stat 1 */}
            <div className="p-4 md:px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-[#34d399] tracking-tight mb-2 font-sans">
                &lt; 24h
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Tiempo de Respuesta
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Atención ágil, personalizada y sin intermediarios
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] tracking-tight mb-2 font-sans">
                3
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Sedes Físicas Habilitadas
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Puebla, Ciudad de México y Córdoba, Veracruz
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#fbbf24] tracking-tight mb-2 font-sans">
                100%
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Orientación Sin Costo
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Diagnóstico académico y canalización gratuita
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 md:px-6 pt-6 md:pt-4">
              <div className="text-4xl md:text-5xl font-extrabold text-[#c084fc] tracking-tight mb-2 font-sans">
                6 Días
              </div>
              <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-1">
                Atención Semanal
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Lunes a viernes 08:00–18:00 y sábados 08:00–14:00
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECCIÓN: FORMULARIO Y CANALES DIRECTOS ── */}
      <section id="formulario" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Formulario a la izquierda */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs border-t-4 border-t-[#075fba]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#075fba] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80 inline-flex mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-[#075fba]" />
                <span>Formulario Institucional</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Envíanos tu consulta
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                Completa tus datos con confianza. Nuestro equipo de coordinación revisará tu mensaje para orientarte con claridad y respeto.
              </p>

              <ContactForm />
            </div>

            {/* Canales directos a la derecha */}
            <div id="medios" className="lg:col-span-5 space-y-6 scroll-mt-28">
              {/* Card Teléfonos y WhatsApp */}
              <div className="bg-white p-6 md:p-7 rounded-3xl border border-slate-200/90 shadow-2xs border-t-4 border-t-[#083665]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Phone className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Atención Telefónica y WhatsApp
                    </h3>
                    <p className="text-[11px] text-slate-500">Comunicación directa e inmediata</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="font-mono text-[10px] text-slate-500 block uppercase font-bold">
                        Línea Telefónica Principal
                      </span>
                      <strong className="text-slate-900 text-sm font-mono">222 105 0550</strong>
                    </div>
                    <a
                      href="tel:+522221050550"
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs transition border border-slate-200/80 shadow-2xs"
                    >
                      Llamar
                    </a>
                  </div>

                  <div className="p-3.5 bg-emerald-50/90 rounded-xl border border-emerald-200/80 flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="font-mono text-[10px] text-emerald-800 block uppercase font-bold">
                        WhatsApp Institucional
                      </span>
                      <strong className="text-emerald-950 text-sm font-mono">222 999 9497</strong>
                    </div>
                    <a
                      href="https://wa.me/522229999497?text=Hola,%20solicito%20orientaci%C3%B3n%20sobre%20los%20programas%20de%20ISCOBusiness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Mensaje</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Correos Institucionales */}
              <div className="bg-white p-6 md:p-7 rounded-3xl border border-slate-200/90 shadow-2xs border-t-4 border-t-[#0284c7]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Mail className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Correos Electrónicos Departamentales
                    </h3>
                    <p className="text-[11px] text-slate-500">Canalización directa por tema</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Información y trámites generales:</span>
                    <a
                      href="mailto:contacto@iscobusiness.edu.mx"
                      className="font-mono font-semibold text-[#075fba] hover:underline"
                    >
                      contacto@iscobusiness.edu.mx
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Vinculación y alianzas:</span>
                    <a
                      href="mailto:vinculacion@iscobusiness.edu.mx"
                      className="font-mono font-semibold text-[#075fba] hover:underline"
                    >
                      vinculacion@iscobusiness.edu.mx
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Centro de Asesoría (Bachillerato):</span>
                    <a
                      href="mailto:asesoria@iscobusiness.edu.mx"
                      className="font-mono font-semibold text-[#075fba] hover:underline"
                    >
                      asesoria@iscobusiness.edu.mx
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-600">Educación Continua:</span>
                    <a
                      href="mailto:educacioncontinua@iscobusiness.edu.mx"
                      className="font-mono font-semibold text-[#075fba] hover:underline"
                    >
                      educacioncontinua@iscobusiness.edu.mx
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Horarios */}
              <div className="bg-white p-6 md:p-7 rounded-3xl border border-slate-200/90 shadow-2xs border-t-4 border-t-[#d97706]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Clock className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Horarios de Atención
                    </h3>
                    <p className="text-[11px] text-slate-500">Presencial y virtual</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>Lunes a viernes:</span>
                    <strong className="text-slate-900 font-mono">08:00 – 18:00 hrs</strong>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Sábados:</span>
                    <strong className="text-slate-900 font-mono">08:00 – 14:00 hrs</strong>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                  * Te sugerimos confirmar tu visita con anticipación para asegurar que el personal docente o evaluador del área esté disponible para recibirte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SECCIÓN: SEDES FÍSICAS DE ATENCIÓN CON MAPAS ── */}
      <section id="sedes" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Presencia en Territorio
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Nuestras Sedes de Atención Institucional
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Espacios habilitados con infraestructura física, aulas de tutoría y centros de evaluación en puntos estratégicos de México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sedes.map((sede, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between ${sede.accentBorder} border-t-4 group`}
              >
                <div>
                  <div className="h-48 w-full bg-slate-100 border-b border-slate-200/80">
                    <iframe
                      src={sede.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Ubicación sede ${sede.ciudad}`}
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <span className="font-mono text-[10px] text-slate-400 block uppercase font-bold tracking-wider mb-1">
                      {sede.subtitulo}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#075fba] transition-colors">
                      {sede.ciudad}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#075fba] shrink-0 mt-0.5" />
                      <span>{sede.direccion}</span>
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                        Servicios en esta sede:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {sede.servicios.map((s, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-7 pt-0">
                  <a
                    href={sede.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition border border-slate-200/80 shadow-2xs"
                  >
                    <span>Ver ubicación en Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN: PROTOCOLO DE CALIDEZ Y COMPROMISO CON LAS PERSONAS ── */}
      <section id="compromiso" className="section-padding bg-slate-50/70 border-b border-slate-200/80 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Trato Digno y Respetuoso
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Nuestros 4 Compromisos de Atención a las Personas
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              En ISCOBusiness cada persona que se acerca es recibida con empatía, transparencia absoluta y respeto irrestricto a su tiempo y esfuerzo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Escucha Activa y Paciencia',
                desc: 'Comprendemos que retomar los estudios o evaluar saberes genera dudas. Te explicamos cada etapa sin prisas ni juicios.',
                borderTop: 'border-t-[#0284c7]',
              },
              {
                num: '02',
                title: 'Cero Letras Chiquitas',
                desc: 'Información clara desde el inicio: requisitos oficiales, tiempos de dictamen y cuotas de recuperación solidarias sin costos ocultos.',
                borderTop: 'border-t-[#0d9488]',
              },
              {
                num: '03',
                title: 'Respeto a tu Contexto',
                desc: 'Sabemos que trabajas y tienes una familia. Te orientamos hacia las opciones de estudio y horarios que respetan tu realidad.',
                borderTop: 'border-t-[#d97706]',
              },
              {
                num: '04',
                title: 'Acompañamiento Continuo',
                desc: 'No te dejamos solo: desde la primera llamada hasta que recibes tu certificado o constancia oficial, estamos contigo.',
                borderTop: 'border-t-[#4f46e5]',
              },
            ].map((comp, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between ${comp.borderTop} border-t-4 group`}
              >
                <div>
                  <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-slate-900 font-mono font-bold text-xs flex items-center justify-center mb-3 group-hover:bg-slate-100 transition-colors">
                    {comp.num}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. SECCIÓN: PREGUNTAS FRECUENTES (FAQ) ── */}
      <section id="preguntas" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="shell max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/90 inline-block mb-3">
              Dudas Habituales
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              Preguntas Frecuentes de Atención a Usuarios
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Resolvemos las consultas más comunes para que tu primer acercamiento sea claro, sencillo y sin demoras.
            </p>
          </div>
          <div>
            <FaqAccordion items={faqContacto} />
          </div>
        </div>
      </section>

      {/* ── 9. CIERRE INSTITUCIONAL (CTA SECTION) ── */}
      <CtaSection
        title="Tu siguiente oportunidad puede comenzar con una conversación."
        subtitle="Contáctanos hoy mismo para orientarte hacia la opción de bachillerato, educación continua, certificación o convenio que mejor se adapte a tus metas."
        buttons={[
          {
            label: 'Enviar mensaje de orientación',
            href: '#formulario',
            variant: 'gold',
          },
          {
            label: 'Escribir por WhatsApp',
            href: 'https://wa.me/522229999497?text=Hola,%20solicito%20orientaci%C3%B3n%20sobre%20ISCOBusiness',
            variant: 'secondary',
            external: true,
          },
        ]}
        backgroundImage="/img/cta-conversacion.jpg"
        backgroundOpacity={0.50}
        variant="light"
      />
    </div>
  );
}
