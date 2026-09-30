import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RouteCardProps {
  number?: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
  accent?: 'blue' | 'cyan' | 'gold' | 'green' | 'violet';
  badge?: string;
  badgeVariant?: 'proximamente' | 'abierto' | 'disponible' | 'cerrado' | 'desarrollo';
  microcopy?: string;
}

const accentMap = {
  blue: 'isco-card-accent',
  cyan: 'isco-card-cyan',
  gold: 'isco-card-gold',
  green: 'isco-card-green',
  violet: 'isco-card-violet',
};

/**
 * Route/service card for home page and section overviews (Plan Maestro §96–97).
 */
export function RouteCard({
  number,
  title,
  description,
  cta,
  href,
  external,
  accent = 'blue',
  badge,
  badgeVariant,
  microcopy,
}: RouteCardProps) {
  const content = (
    <div className={cn('isco-card group cursor-pointer h-full flex flex-col', accentMap[accent])}>
      {/* Number + Badge row */}
      <div className="flex items-start justify-between mb-3">
        {number && <span className="step-number">{number}</span>}
        {badge && badgeVariant && (
          <span className={cn('status-badge', `status-${badgeVariant}`)}>
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-extrabold text-[var(--isco-ink)] mb-2 group-hover:text-[var(--isco-blue)] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--isco-ink-soft)] leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Microcopy */}
      {microcopy && (
        <p className="text-xs text-[var(--isco-ink-soft)] mb-3 italic">{microcopy}</p>
      )}

      {/* CTA */}
      <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--isco-blue)] group-hover:gap-2 transition-all">
        {cta}
        <ChevronRight className="w-4 h-4" />
      </span>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
