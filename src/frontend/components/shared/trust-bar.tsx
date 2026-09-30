import { ShieldCheck, Award, Building2, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustBarProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const items = [
  {
    icon: Building2,
    label: 'Asociación Civil',
    detail: 'Sin Fines de Lucro',
    subtitle: 'Vocación formativa y desarrollo social',
    borderColor: 'border-t-[var(--primary)]',
  },
  {
    icon: Award,
    label: 'Entidad de Certificación',
    detail: 'Acreditación ECE760-26',
    subtitle: 'Habilitada por SEP-CONOCER',
    borderColor: 'border-t-[var(--gold)]',
  },
  {
    icon: FileCheck,
    label: 'Centro de Asesoría',
    detail: 'Instituto Ibérica',
    subtitle: 'Asesoría para bachillerato modular',
    borderColor: 'border-t-[var(--cyan)]',
  },
  {
    icon: ShieldCheck,
    label: 'Sistema de Competencias',
    detail: 'Red CONOCER',
    subtitle: 'Estándares oficiales de competencia',
    borderColor: 'border-t-[var(--green)]',
  },
];

/**
 * Institutional trust bar with Option A executive plates and formal badges (Plan Maestro §4.2, §9).
 */
export function TrustBar({ variant = 'light', className }: TrustBarProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            'rounded-2xl p-6 border transition-all flex flex-col items-center text-center group border-t-4',
            item.borderColor,
            isDark
              ? 'bg-slate-900/60 border-white/10 text-white backdrop-blur-sm hover:border-white/20'
              : 'bg-white border-slate-200/90 text-slate-900 shadow-xs hover:shadow-md'
          )}
        >
          {/* Executive Option A Plate */}
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all mb-3 flex-shrink-0 shadow-2xs',
              isDark
                ? 'bg-white/10 border border-white/20 text-white group-hover:bg-white/15'
                : 'bg-white/95 border border-slate-200/90 text-slate-900 group-hover:border-slate-400 group-hover:bg-slate-50'
            )}
          >
            <item.icon className="w-5 h-5 text-current" strokeWidth={1.75} />
          </div>

          <span
            className={cn(
              'text-xs font-semibold px-2.5 py-0.5 rounded-md border mb-2',
              isDark
                ? 'text-white/90 bg-white/10 border-white/20'
                : 'text-slate-800 bg-slate-100/90 border-slate-200/80'
            )}
          >
            {item.detail}
          </span>

          <h4
            className={cn(
              'text-sm font-extrabold leading-snug mb-1',
              isDark ? 'text-white' : 'text-slate-900'
            )}
          >
            {item.label}
          </h4>

          <p
            className={cn(
              'text-xs leading-relaxed',
              isDark ? 'text-white/60' : 'text-slate-500'
            )}
          >
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
