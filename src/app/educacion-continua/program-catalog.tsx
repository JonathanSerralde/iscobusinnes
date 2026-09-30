'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Shield,
  BookOpen,
  Award,
  Check,
  GraduationCap,
  Users,
  ShieldAlert,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Program {
  id: string;
  title: string;
  category: string;
  type: 'Diplomado' | 'Curso' | 'Taller' | 'Seminario';
  modality: 'En línea' | 'Presencial' | 'Mixta';
  duration: string;
  startDate: string;
  status: 'Inscripciones abiertas' | 'Próximamente' | 'Convocatoria abierta';
  summary: string;
  accent: string;
  borderColor: string;
  badge?: string;
  targetAudience: string;
}

const initialPrograms: Program[] = [
  {
    id: 'coordinacion-unidades-internas-pc',
    title: 'Técnico en la Coordinación de Actividades de las Unidades Internas de Protección Civil',
    category: 'Protección Civil',
    type: 'Curso',
    modality: 'En línea',
    duration: 'Virtual en línea · Con valor curricular',
    startDate: 'Convocatoria 2025-2026',
    status: 'Inscripciones abiertas',
    summary:
      'Organización, activación, funciones sustantivas y coordinación operativa de las unidades internas de protección civil en dependencias, instituciones y centros de trabajo conforme a los lineamientos normativos oficiales.',
    accent: '#0d9488',
    borderColor: 'border-t-[#0d9488]',
    badge: 'Registro Oficial SECTEI/FC/001/2025',
    targetAudience: 'Responsables de seguridad, coordinadores de brigadas y administradores de inmuebles.',
  },
  {
    id: 'elaboracion-programas-internos-pc',
    title: 'Técnico en la Elaboración de Programas Internos y Especiales de Protección Civil',
    category: 'Protección Civil',
    type: 'Curso',
    modality: 'En línea',
    duration: 'Virtual en línea · Con valor curricular',
    startDate: 'Convocatoria 2025-2026',
    status: 'Inscripciones abiertas',
    summary:
      'Metodología técnica para la formulación, redacción, dictaminación y actualización de programas internos y especiales de protección civil, análisis integral de riesgos y diseño de planes de contingencia.',
    accent: '#0d9488',
    borderColor: 'border-t-[#0d9488]',
    badge: 'Registro Oficial SECTEI/FC/002/2025',
    targetAudience: 'Consultores en protección civil, directores escolares y jefes de seguridad patrimonial.',
  },
  {
    id: 'plan-continuidad-operaciones',
    title: 'Técnico en la Elaboración del Plan de Continuidad de Operaciones para Dependencias y Organizaciones',
    category: 'Protección Civil',
    type: 'Curso',
    modality: 'En línea',
    duration: 'Virtual en línea · Con valor curricular',
    startDate: 'Convocatoria 2025-2026',
    status: 'Inscripciones abiertas',
    summary:
      'Formulación y ejecución de planes estratégicos de continuidad de operaciones (PCO) para salvaguardar funciones críticas, proteger recursos institucionales y garantizar la reactivación oportuna ante contingencias o siniestros.',
    accent: '#d97706',
    borderColor: 'border-t-[#d97706]',
    badge: 'Registro Oficial SECTEI/FC/003/2025',
    targetAudience: 'Directores de operaciones, coordinadores de gestión de riesgos y directivos institucionales.',
  },
  {
    id: 'formacion-capital-humano-emergencias',
    title: 'Técnico en la Formación de Capital Humano para la Respuesta a Emergencias',
    category: 'Protección Civil',
    type: 'Curso',
    modality: 'En línea',
    duration: 'Virtual en línea · Con valor curricular',
    startDate: 'Convocatoria 2025-2026',
    status: 'Inscripciones abiertas',
    summary:
      'Desarrollo de capacidades pedagógicas, andragógicas y técnicas operativas para formar, instruir y evaluar a brigadas de auxilio, primeros respondientes y comités de seguridad en centros laborales y escolares.',
    accent: '#075fba',
    borderColor: 'border-t-[#075fba]',
    badge: 'Registro Oficial SECTEI/FC/004/2025',
    targetAudience: 'Instructores de capacitación, mandos operativos y brigadistas con vocación docente.',
  },
  {
    id: 'apoyo-socioemocional-primer-contacto',
    title: 'Apoyo Socioemocional de Primer Contacto a Personas Afectadas por Fenómenos Perturbadores',
    category: 'Protección Civil',
    type: 'Curso',
    modality: 'En línea',
    duration: 'Virtual en línea · 40 horas',
    startDate: 'Convocatoria abierta',
    status: 'Inscripciones abiertas',
    summary:
      'Primeros auxilios psicológicos, protocolos de contención emocional, intervención humanitaria en crisis y acompañamiento inmediato a personas en situación de vulnerabilidad o impacto por emergencias.',
    accent: '#7c3aed',
    borderColor: 'border-t-[#7c3aed]',
    badge: 'Intervención Humanitaria en Crisis',
    targetAudience: 'Docentes, trabajadores sociales, psicólogos, brigadistas y personal de atención ciudadana.',
  },
  {
    id: 'didactica-diseno-instruccional-habilidades-cognitivas',
    title: 'Diplomado en Didáctica, Diseño Instruccional e Impartición Basado en Habilidades Cognitivas',
    category: 'Capital Humano',
    type: 'Diplomado',
    modality: 'En línea',
    duration: 'Especialización · 120 horas',
    startDate: 'Convocatoria abierta',
    status: 'Inscripciones abiertas',
    summary:
      'Fundamentos pedagógicos contemporáneos, arquitectura didáctica y diseño instruccional enfocado en el desarrollo progresivo de habilidades cognitivas, facilitación del aprendizaje significativo y evaluación auténtica.',
    accent: '#0284c7',
    borderColor: 'border-t-[#0284c7]',
    badge: 'Especialización Profesional de Alto Nivel',
    targetAudience: 'Docentes, diseñadores curriculares, capacitadores empresariales y directores académicos.',
  },
];

const categories = [
  'Todos',
  'Protección Civil',
  'Capital Humano',
  'Diplomados',
  'Cursos Registrados SECTEI',
  'En línea',
];

export function ProgramCatalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = useMemo(() => {
    return initialPrograms.filter((prog) => {
      let matchesCategory = true;
      if (activeCategory === 'Diplomados') matchesCategory = prog.type === 'Diplomado';
      else if (activeCategory === 'Cursos Registrados SECTEI') matchesCategory = !!prog.badge?.includes('SECTEI');
      else if (activeCategory === 'Protección Civil') matchesCategory = prog.category === 'Protección Civil';
      else if (activeCategory === 'Capital Humano') matchesCategory = prog.category === 'Capital Humano';
      else if (activeCategory === 'En línea') matchesCategory = prog.modality === 'En línea';

      const search = searchTerm.toLowerCase();
      const matchesSearch =
        prog.title.toLowerCase().includes(search) ||
        prog.summary.toLowerCase().includes(search) ||
        prog.category.toLowerCase().includes(search) ||
        prog.targetAudience.toLowerCase().includes(search) ||
        (prog.badge && prog.badge.toLowerCase().includes(search));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Header */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por tema, habilidad o registro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent text-slate-900 placeholder:text-slate-400 shadow-2xs"
          />
        </div>

        {/* Categories / Pill buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer',
                activeCategory === cat
                  ? 'bg-[#083665] text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200/90 hover:border-teal-300 hover:text-teal-900'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Program Grid */}
      {filteredPrograms.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/90 shadow-2xs max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-extrabold text-slate-900 mb-1">
            No se encontraron programas con ese criterio
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Intenta cambiar los términos de búsqueda o selecciona otra categoría temática.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('Todos');
              setSearchTerm('');
            }}
            className="btn-secondary text-xs"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`bg-white rounded-2xl border border-slate-200/90 border-t-4 ${prog.borderColor} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
            >
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                {/* Header: Categoria y Estado */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200/70">
                      {prog.category}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-500">
                      {prog.type}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase border shadow-2xs',
                      prog.status === 'Inscripciones abiertas'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-amber-50 text-amber-900 border-amber-300'
                    )}
                  >
                    {prog.status}
                  </span>
                </div>

                {/* Badge oficial si aplica */}
                {prog.badge && (
                  <div
                    className={cn(
                      'inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md mb-3 self-start border',
                      prog.badge.includes('SECTEI')
                        ? 'bg-amber-50 text-amber-950 border-amber-300 shadow-2xs'
                        : 'bg-teal-50 text-teal-900 border-teal-200/90'
                    )}
                  >
                    {prog.badge.includes('SECTEI') ? (
                      <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-[#0d9488] shrink-0" />
                    )}
                    <span>{prog.badge}</span>
                  </div>
                )}

                {/* Titulo */}
                <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-3 group-hover:text-[#0d9488] transition-colors leading-snug">
                  {prog.title}
                </h3>

                {/* Resumen */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {prog.summary}
                </p>

                {/* Perfil sugerido */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 mb-5">
                  <strong className="text-slate-900 font-bold block mb-0.5">Dirigido a:</strong>
                  {prog.targetAudience}
                </div>

                {/* Metadata tags */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{prog.modality}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2">
                  <Link
                    href={`/contacto?tema=${encodeURIComponent(prog.title)}`}
                    className="btn-primary w-full text-center text-xs py-2.5 flex items-center justify-center gap-1.5 bg-[#0d9488] hover:bg-[#0f766e] border-[#0d9488]"
                  >
                    <span>Solicitar información e inscripción</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
