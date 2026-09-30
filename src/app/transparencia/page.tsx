import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Lock,
  Landmark,
  Scale,
  CheckCircle2,
  Download,
  AlertCircle,
  Building2,
  ArrowRight,
  Mail,
  ShieldAlert,
  FileSpreadsheet,
  Award,
  GraduationCap,
} from 'lucide-react';
import { HeroSection } from '@/components/shared/hero-section';
import { SectionHeading } from '@/components/shared/section-heading';
import { CtaSection } from '@/components/shared/cta-section';

export const metadata: Metadata = {
  title: 'Transparencia y Rendición de Cuentas | ISCOBusiness A.C.',
  description:
    'Marco legal, estructura de gobierno, políticas de integridad, procedimiento de derechos ARCO y repositorio de documentos públicos de ISCOBusiness A.C.',
  alternates: {
    canonical: 'https://iscobusiness.edu.mx/transparencia',
  },
};

/* ═══════════════════════════════════════════════════════════════
   TRANSPARENCIA Y RENDICIÓN DE CUENTAS — /transparencia
   Estándar Opción A: Placas Técnicas, Monospace Tags y Acentos Cromáticos
   ═══════════════════════════════════════════════════════════════ */

interface LegalDoc {
  titulo: string;
  area: string;
  fecha: string;
  descripcion: string;
  estatus: string;
  codigo: string;
}

interface DocumentCategory {
  categoria: string;
  codigoCat: string;
  accentBorder: string;
  docs: LegalDoc[];
}

const CATEGORIAS_DOCUMENTOS: DocumentCategory[] = [
  {
    categoria: 'Acreditaciones Oficiales y Validez',
    codigoCat: 'CAT-01',
    accentBorder: 'border-t-[var(--isco-navy)]',
    docs: [
      {
        codigo: 'ACR-01',
        titulo: 'Cédula de Acreditación CONOCER (ECE760-26)',
        area: 'Comité de Gestión por Competencias',
        fecha: 'Vigente Oficial',
        descripcion:
          'Acreditación oficial como Entidad de Certificación y Evaluación otorgada por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER) de la SEP.',
        estatus: 'Vigente',
      },
      {
        codigo: 'ACR-02',
        titulo: 'Habilitación de Estándares de Competencia en el RENEC',
        area: 'Dirección Operativa ECE',
        fecha: 'Registro Abierto',
        descripcion:
          'Estándares de competencia laboral acreditados e inscritos en el Registro Nacional de Estándares de Competencia (RENEC) para evaluación y certificación oficial.',
        estatus: 'Vigente',
      },
      {
        codigo: 'ACR-03',
        titulo: 'Modelo Modular de Bachillerato — Centro de Asesoría',
        area: 'Coordinación Académica — Instituto Ibérica',
        fecha: 'Plan Vigente',
        descripcion:
          'Lineamientos y plan modular oficial para estudios de nivel medio superior en modalidad no escolarizada con validez oficial de la Secretaría de Educación Pública (SEP).',
        estatus: 'Vigente',
      },
    ],
  },
  {
    categoria: 'Integridad, Ética y Gobierno',
    codigoCat: 'CAT-02',
    accentBorder: 'border-t-[var(--isco-green)]',
    docs: [
      {
        codigo: 'ETI-01',
        titulo: 'Código de Ética y Conducta Institucional',
        area: 'Comité de Integridad',
        fecha: 'Enero 2026',
        descripcion:
          'Principios rectores de actuación para personal directivo, administrativo, docente, asesores y colaboradores voluntarios.',
        estatus: 'Vigente',
      },
      {
        codigo: 'ETI-02',
        titulo: 'Política de Prevención y Gestión de Conflicto de Interés',
        area: 'Órgano Interno de Control',
        fecha: 'Enero 2026',
        descripcion:
          'Lineamientos claros para identificar, declarar oportunamente y resolver posibles conflictos de interés en contrataciones y alianzas.',
        estatus: 'Vigente',
      },
      {
        codigo: 'ETI-03',
        titulo: 'Protocolo de Protección Reforzada y Salvaguardas Comunitarias',
        area: 'Comité de Ética Social',
        fecha: 'Marzo 2026',
        descripcion:
          'Directrices obligatorias para la protección de niñez, juventudes y personas con discapacidad en proyectos formativos en campo.',
        estatus: 'Vigente',
      },
    ],
  },
  {
    categoria: 'Privacidad y Derechos ARCO',
    codigoCat: 'CAT-03',
    accentBorder: 'border-t-[var(--isco-blue)]',
    docs: [
      {
        codigo: 'PRI-01',
        titulo: 'Aviso de Privacidad Integral para la Comunidad y Usuarios',
        area: 'Unidad de Enlace y Datos Personales',
        fecha: 'Vigente 2026',
        descripcion:
          'Términos del tratamiento, finalidades primarias/secundarias y medidas de seguridad para la custodia de datos personales (LFPDPPP).',
        estatus: 'Vigente',
      },
      {
        codigo: 'PRI-02',
        titulo: 'Procedimiento Operativo para el Ejercicio de Derechos ARCO',
        area: 'Unidad de Enlace y Datos Personales',
        fecha: 'Vigente 2026',
        descripcion:
          'Paso a paso, requisitos formales y plazos legales (máx. 20 días hábiles) para ejercer Acceso, Rectificación, Cancelación u Oposición.',
        estatus: 'Vigente',
      },
    ],
  },
  {
    categoria: 'Rendición de Cuentas e Impacto Público',
    codigoCat: 'CAT-04',
    accentBorder: 'border-t-[var(--isco-gold)]',
    docs: [
      {
        codigo: 'REN-01',
        titulo: 'Memoria Anual de Actividades y Gestión 2025',
        area: 'Dirección de Vinculación e Impacto',
        fecha: 'Enero 2026',
        descripcion:
          'Resumen de proyectos concluidos, sedes operativas, alianzas suscritas y alcance social verificado en territorio.',
        estatus: 'Público',
      },
      {
        codigo: 'REN-02',
        titulo: 'Metodología de Impacto y Línea Base de Indicadores 2026',
        area: 'Dirección de Vinculación',
        fecha: 'Junio 2026',
        descripcion:
          'Criterios técnicos, fuentes de verificación y correspondencia con metas cuantificables de la Agenda 2030 ODS.',
        estatus: 'Público',
      },
    ],
  },
];

const arcoLetters = [
  {
    letter: 'A',
    name: 'Acceso',
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    desc: 'Conoce qué datos personales tuyos están en posesión de ISCOBusiness y las condiciones generales de su uso institucional.',
  },
  {
    letter: 'R',
    name: 'Rectificación',
    color: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    desc: 'Solicita la corrección oportuna de información desactualizada, inexacta, incompleta o errónea en tus registros.',
  },
  {
    letter: 'C',
    name: 'Cancelación',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    desc: 'Solicita la supresión de tus datos de nuestros sistemas cuando consideres que ya no son necesarios para los fines institucionales.',
  },
  {
    letter: 'O',
    name: 'Oposición',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    desc: 'Opónte al tratamiento de tus datos para finalidades secundarias (por ejemplo, boletines informativos o difusión de eventos).',
  },
];

export default function TransparenciaPage() {
  return (
    <>
      {/* ── 1. HERO INSTITUCIONAL (LIGHT VARIANT CON FOTO AUTÉNTICA) ── */}
      <HeroSection
        variant="light"
        backgroundImage="/img/proposito-comunidad.jpg"
        backgroundOpacity={0.80}
        title="La confianza se construye con verdad y cuentas claras."
        className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)] flex flex-col justify-center"
      />

      {/* ── 2. CINTA EJECUTIVA DE NAVEGACIÓN DIRECTA (RIBBON NAV) ── */}
      <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
        <div className="shell">
          <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
            {/* 1. Marco Jurídico */}
            <a
              href="#marco"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-slate-100/60 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span>Marco Jurídico</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Naturaleza Institucional
              </span>
            </a>

            {/* 2. Acreditación */}
            <a
              href="#acreditaciones"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Acreditación</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                SEP-CONOCER ECE760-26
              </span>
            </a>

            {/* 3. Derechos ARCO */}
            <a
              href="#arco"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-indigo-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#4f46e5] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(79,70,229,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                <div className="w-6 h-6 rounded-md bg-indigo-50 text-[#4f46e5] flex items-center justify-center ring-1 ring-indigo-200/80 group-hover:bg-[#4f46e5] group-hover:text-white group-hover:ring-[#4f46e5] transition-all shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <span>Derechos ARCO</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Privacidad y Datos
              </span>
            </a>

            {/* 4. Repositorio */}
            <a
              href="#documentos"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-teal-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0d9488] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(13,148,136,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors">
                <div className="w-6 h-6 rounded-md bg-teal-50 text-[#0d9488] flex items-center justify-center ring-1 ring-teal-200/80 group-hover:bg-[#0d9488] group-hover:text-white group-hover:ring-[#0d9488] transition-all shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span>Repositorio</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Normatividad Oficial
              </span>
            </a>

            {/* 5. Rendición */}
            <a
              href="#rendicion"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-amber-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#d97706] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(217,119,6,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                <div className="w-6 h-6 rounded-md bg-amber-50 text-[#d97706] flex items-center justify-center ring-1 ring-amber-200/80 group-hover:bg-[#d97706] group-hover:text-white group-hover:ring-[#d97706] transition-all shrink-0">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                </div>
                <span>Rendición</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Memorias de Impacto
              </span>
            </a>

            {/* 6. Buzón Ético */}
            <a
              href="#buzon"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-slate-100/60 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#083665] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(8,54,101,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#083665] transition-colors">
                <div className="w-6 h-6 rounded-md bg-slate-100 text-[#083665] flex items-center justify-center ring-1 ring-slate-300 group-hover:bg-[#083665] group-hover:text-white group-hover:ring-[#083665] transition-all shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <span>Buzón Ético</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Canal Confidencial
              </span>
            </a>

            {/* 7. Unidad Enlace */}
            <a
              href="#enlace"
              className="relative py-3.5 px-2 transition-all duration-200 hover:bg-blue-50/40 flex flex-col items-center justify-center gap-1 group"
            >
              <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#075fba] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(7,95,186,0.45)]" />
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#075fba] transition-colors">
                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#075fba] flex items-center justify-center ring-1 ring-blue-200/80 group-hover:bg-[#075fba] group-hover:text-white group-hover:ring-[#075fba] transition-all shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Unidad Enlace</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Validación y Convenios
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. Marco Institucional y Personalidad Jurídica ── */}
      <section id="marco" className="section-padding bg-slate-50/70 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Marco institucional y normativo"
              subtitle="Creemos en una organización civil que rinde cuentas abiertas a la sociedad. Conoce nuestra estructura jurídica, responsabilidades y sustento legal."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Naturaleza Jurídica */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all border-t-4 border-t-[var(--isco-navy)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100/90 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Building2 className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80">
                    ESTRUCTURA 01
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  Naturaleza Jurídica
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  Asociación Civil mexicana sin fines de lucro, constituida legalmente conforme al Código Civil, cuyo patrimonio y excedentes se reinvierten exclusivamente en el cumplimiento de su objeto social.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <strong>Denominación:</strong> ISCOBusiness A.C.
              </div>
            </div>

            {/* Card 2: Acreditación Oficial CONOCER */}
            <div id="acreditaciones" className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all border-t-4 border-t-[var(--isco-cyan)] flex flex-col justify-between scroll-mt-28">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100/90 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Award className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80">
                    ESTRUCTURA 02
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  Acreditación SEP-CONOCER
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  Acreditada formalmente como Entidad de Certificación y Evaluación (ECE760-26) dentro del Sistema Nacional de Competencias de la Secretaría de Educación Pública.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <strong>Acreditación:</strong> ECE760-26 (Información Pública CONOCER)
              </div>
            </div>

            {/* Card 3: Gobierno Institucional */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all border-t-4 border-t-[var(--isco-gold)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100/90 border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-2xs">
                    <Scale className="w-5 h-5 text-slate-800" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80">
                    ESTRUCTURA 03
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  Gobierno Institucional
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  La dirección suprema reside en la Asamblea General y el Consejo Directivo. Cuenta con órganos de apoyo técnico, comité de ética y control interno para garantizar imparcialidad y apego estatutario.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <strong>Régimen:</strong> Gobernanza colegiada y participativa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Procedimiento Derechos ARCO ── */}
      <section id="arco" className="section-padding bg-white border-y border-slate-200/90 scroll-mt-28">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <span className="font-mono text-[11px] font-semibold uppercase text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80 inline-block mb-3">
                PROTECCIÓN DE DATOS PERSONALES
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Procedimiento para el ejercicio de Derechos ARCO
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Como titular de tus datos personales, tienes derecho a conocer qué datos tenemos y para qué los utilizamos (Acceso), solicitar correcciones (Rectificación), pedir su baja definitiva de nuestros archivos (Cancelación), u oponerte a tratamientos específicos (Oposición).
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs space-y-3 shadow-2xs">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    Canal exclusivo ARCO
                  </span>
                  <a
                    href="mailto:privacidad@iscobusiness.edu.mx"
                    className="text-[var(--isco-blue)] font-bold hover:underline text-sm block"
                  >
                    privacidad@iscobusiness.edu.mx
                  </a>
                </div>
                <div className="text-slate-600 pt-2 border-t border-slate-200/70 leading-relaxed">
                  <strong>Plazo legal de resolución:</strong> Máximo 20 días hábiles conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {arcoLetters.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`w-9 h-9 rounded-xl font-mono text-base font-black flex items-center justify-center border shadow-2xs ${item.color}`}
                      >
                        {item.letter}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-slate-500">
                        DERECHO 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Repositorio de Documentos Públicos ── */}
      <section id="documentos" className="section-padding bg-slate-50/70 scroll-mt-28">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <SectionHeading
              title="Documentos y normatividad disponible"
              subtitle="Los instrumentos listados a continuación representan las directrices vigentes de nuestra actuación pública, institucional y pedagógica."
            />
          </div>

          <div className="space-y-8">
            {CATEGORIAS_DOCUMENTOS.map((cat, idx) => (
              <div
                key={idx}
                id={cat.codigoCat === 'CAT-04' ? 'rendicion' : undefined}
                className={`bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-2xs ${cat.accentBorder} border-t-4 scroll-mt-28`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80">
                      {cat.codigoCat}
                    </span>
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900">
                      {cat.categoria}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70 self-start sm:self-auto">
                    {cat.docs.length} registros oficiales
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {cat.docs.map((doc, docIdx) => (
                    <div
                      key={docIdx}
                      className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-5"
                    >
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                            {doc.codigo}
                          </span>
                          <h4 className="text-base font-bold text-slate-900">
                            {doc.titulo}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {doc.descripcion}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-500">
                          <span>Área emisora: {doc.area}</span>
                          <span>•</span>
                          <span>Fecha: {doc.fecha}</span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {doc.estatus}
                        </span>
                        <Link
                          href={`/contacto?motivo=Transparencia&doc=${encodeURIComponent(
                            doc.titulo
                          )}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition border border-slate-200/80 shadow-2xs"
                        >
                          <Download className="w-3.5 h-3.5 text-slate-600" />
                          <span>Solicitar copia</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Buzón de Integridad y Cumplimiento ── */}
      <section id="buzon" className="section-padding bg-white border-t border-slate-200/90 scroll-mt-28">
        <div className="shell">
          <div className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6 border-t-4 border-t-amber-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-200/80 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs">
                <ShieldAlert className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block mb-1.5">
                  CUMPLIMIENTO ÉTICO Y SALVAGUARDAS
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  Canal de quejas, sugerencias y cumplimiento institucional
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Si detectas cualquier conducta, omisión o conflicto de interés contrario al Código de Ética o al objeto social de ISCOBusiness A.C., puedes presentar una comunicación estrictamente confidencial para investigación interna.
                </p>
              </div>
            </div>
            <Link
              href="/contacto?motivo=Transparencia"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Acceder al buzón confidencial</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Cierre CTA y Unidad de Enlace ── */}
      <div id="enlace" className="scroll-mt-28">
        <CtaSection
          title="¿Requieres consultar o verificar un convenio institucional?"
          subtitle="Nuestra Unidad de Enlace Jurídico atiende solicitudes de colaboración, validación de certificados y convenios de concertación social."
          backgroundImage="/img/cta-conversacion.jpg"
          backgroundOpacity={0.50}
          variant="light"
          buttons={[
            {
              label: 'Contactar a la Unidad de Enlace',
              href: '/contacto?motivo=Transparencia',
              variant: 'gold',
            },
            {
              label: 'Conocer nuestro Ecosistema',
              href: '/ecosistema',
              variant: 'secondary',
            },
          ]}
        />
      </div>

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
                name: 'Transparencia y Rendición de Cuentas',
                item: 'https://iscobusiness.edu.mx/transparencia',
              },
            ],
          }),
        }}
      />
    </>
  );
}
