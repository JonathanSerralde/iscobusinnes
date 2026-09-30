import { cn } from '@/lib/utils';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  columns?: 3 | 4 | 5;
  className?: string;
  accentColor?: string;
}

/**
 * Numbered process steps (Estándar Ejecutivo Opción A).
 * Tarjetas limpias con badges mono, acento cromático y tipografía de alto contraste.
 */
export function ProcessSteps({
  steps,
  columns = 4,
  className,
  accentColor = 'border-t-[var(--primary)]',
}: ProcessStepsProps) {
  const colClass =
    columns === 3
      ? 'md:grid-cols-3'
      : columns === 5
        ? 'md:grid-cols-3 lg:grid-cols-5'
        : 'md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={cn('grid grid-cols-1 gap-5', colClass, className)}>
      {steps.map((step) => (
        <div
          key={step.number}
          className={cn(
            'bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 border-t-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group',
            accentColor
          )}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-md border border-slate-200/70">
                PASO {step.number}
              </span>
              <span className="font-mono text-2xl font-extrabold text-slate-300 group-hover:text-slate-400 transition-colors">
                {step.number}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
              {step.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

