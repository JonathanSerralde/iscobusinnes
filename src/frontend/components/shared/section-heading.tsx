import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Reusable section heading with optional eyebrow and subtitle.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[var(--isco-ink)]">{title}</h2>
      {subtitle && (
        <p className="text-lead text-[var(--isco-ink-soft)] mt-4">{subtitle}</p>
      )}
    </div>
  );
}
