import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttons: Array<{
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'gold';
    external?: boolean;
  }>;
  variant?: 'gradient' | 'light' | 'gold';
  backgroundImage?: string;
  backgroundOpacity?: number;
  className?: string;
}

/**
 * Full-width CTA section used at the bottom of every page (Plan Maestro §4.9, §11, §25, etc.).
 */
export function CtaSection({
  title,
  subtitle,
  buttons,
  variant = 'light',
  backgroundImage,
  backgroundOpacity = 0.50,
  className,
}: CtaSectionProps) {
  const isGold = variant === 'gold';
  // Use light styling by default or whenever a background image is present
  const isDark = variant === 'gradient' && !backgroundImage;

  return (
    <section
      className={cn(
        'section-padding relative overflow-hidden border-t border-slate-200/90',
        isDark && 'isco-gradient-dark text-white',
        isGold && 'isco-gradient-gold text-slate-900',
        !isDark && !isGold && 'bg-slate-50 text-slate-900',
        className
      )}
    >
      {/* Background Image with Luminous White Opacity Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[1.02]"
          />
          {/* Capa de opacidad blanca calibrada para que la fotografía sea visible y auténtica */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
            }}
          />
          {/* Sutil halo central translúcido que garantiza contraste perfecto en el texto sin apagar a las personas */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.35) 0%, transparent 85%)',
            }}
          />
        </div>
      )}

      <div className="relative shell text-center max-w-3xl mx-auto z-10">
        <h2
          className={cn(
            'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug mb-4',
            isDark ? 'text-white' : 'text-slate-900'
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              'text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto',
              isDark ? 'text-white/80' : 'text-slate-700 font-medium'
            )}
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {buttons.map((btn) => {
            const btnClass = cn(
              'isco-btn isco-btn-lg',
              btn.variant === 'gold' && 'isco-btn-gold shadow-sm hover:shadow-md',
              btn.variant === 'secondary' &&
                (isDark
                  ? 'border-2 border-white/30 text-white hover:bg-white/10'
                  : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 shadow-2xs'),
              (!btn.variant || btn.variant === 'primary') &&
                (isDark
                  ? 'bg-white text-[var(--isco-navy)] hover:bg-white/90'
                  : 'isco-btn-primary shadow-sm hover:shadow-md')
            );

            if (btn.external) {
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnClass}
                >
                  {btn.label}
                </a>
              );
            }

            return (
              <Link key={btn.label} href={btn.href} className={btnClass}>
                {btn.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
