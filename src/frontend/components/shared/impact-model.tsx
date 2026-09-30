import { cn } from '@/lib/utils';
import { BookOpen, Lightbulb, Award, Handshake, Sparkles } from 'lucide-react';

interface ImpactModelProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

const steps = [
  {
    icon: BookOpen,
    phase: 'FASE 01',
    category: 'EDUCACIÓN FLEXIBLE',
    title: 'Aprender',
    description: 'Facilitamos oportunidades educativas abiertas, modulares y pertinentes para adultos.',
    borderColor: 'border-t-[var(--primary)]',
  },
  {
    icon: Lightbulb,
    phase: 'FASE 02',
    category: 'CAPACIDADES TÉCNICAS',
    title: 'Desarrollar',
    description: 'Fortalecemos conocimientos aplicados y competencias adaptadas a la realidad productiva.',
    borderColor: 'border-t-[var(--cyan)]',
  },
  {
    icon: Award,
    phase: 'FASE 03',
    category: 'VALIDEZ SEP-CONOCER',
    title: 'Acreditar',
    description: 'Reconocemos formalmente la experiencia laboral con certificados de valor nacional.',
    borderColor: 'border-t-[var(--gold)]',
  },
  {
    icon: Handshake,
    phase: 'FASE 04',
    category: 'ALIANZAS SECTORIALES',
    title: 'Vincular',
    description: 'Conectamos a las personas con empresas, academia e iniciativas de desarrollo social.',
    borderColor: 'border-t-[var(--green)]',
  },
  {
    icon: Sparkles,
    phase: 'FASE 05',
    category: 'MOVILIDAD SOCIAL',
    title: 'Transformar',
    description: 'Convertimos el esfuerzo en bienestar duradero, autonomía económica y justicia social.',
    borderColor: 'border-t-[var(--violet)]',
  },
];

/**
 * Impact model visualization: APRENDER → DESARROLLAR → ACREDITAR → VINCULAR → TRANSFORMAR
 * (Plan Maestro §4.8, §10)
 */
export function ImpactModel({ variant = 'horizontal', className }: ImpactModelProps) {
  if (variant === 'vertical') {
    return (
      <div className={cn('flex flex-col gap-0', className)}>
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-start gap-4">
            {/* Vertical connector */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-white/95 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs shrink-0">
                <step.icon className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-10 bg-slate-200 my-1" />
              )}
            </div>
            <div className="pt-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {step.phase}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                  {step.category}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5',
        className
      )}
    >
      {steps.map((step) => (
        <div
          key={step.title}
          className={cn(
            'bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group border-t-4',
            step.borderColor
          )}
        >
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              {/* Option A Plate */}
              <div className="w-11 h-11 rounded-xl bg-white/95 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:border-slate-400 group-hover:bg-slate-50 transition-all flex-shrink-0">
                <step.icon className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md border border-slate-200/70">
                {step.phase}
              </span>
            </div>

            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-900 uppercase mb-1.5 block">
              {step.category}
            </span>

            <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
              {step.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
