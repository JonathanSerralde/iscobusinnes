import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description?: string | React.ReactNode;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  microcopy?: string;
  /** Additional trust badges below CTAs */
  trustItems?: string[];
  /** Variant: 'gradient' (default dark gradient) or 'light' */
  variant?: 'gradient' | 'light';
  /** Optional background image path */
  backgroundImage?: string;
  /** Opacity for the background image (0 to 1, default 0.22) */
  backgroundOpacity?: number;
  /** Whether to show the decorative grid (default false) */
  showGrid?: boolean;
  /** Optional side panel component for split hero layout */
  sidePanel?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable Hero section (Plan Maestro §99, §19, §24)
 * Supports rich humanized background images, strategic side panels,
 * and high-contrast institutional typography.
 */
export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  microcopy,
  trustItems,
  variant = 'gradient',
  backgroundImage,
  backgroundOpacity = 0.22,
  showGrid = false,
  sidePanel,
  children,
  className,
}: HeroSectionProps) {
  const isGradient = variant === 'gradient';

  return (
    <section
      className={cn(
        'relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)]',
        isGradient ? 'isco-gradient-hero text-white' : 'isco-gradient-light text-[var(--isco-ink)]',
        className
      )}
    >
      {/* Background Image if present */}
      {backgroundImage && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[1.01]"
            style={{ opacity: isGradient ? backgroundOpacity : (backgroundOpacity ?? 0.65) }}
          />
          {/* Institutional vignette & soft gradient overlay for readability and human warmth */}
          <div
            className="absolute inset-0"
            style={{
              background: isGradient
                ? 'linear-gradient(135deg, rgba(6, 26, 48, 0.88) 0%, rgba(8, 54, 101, 0.82) 55%, rgba(6, 38, 70, 0.92) 100%)'
                : 'linear-gradient(to right, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.74) 42%, rgba(255, 255, 255, 0.42) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isGradient
                ? 'radial-gradient(ellipse 90% 70% at 85% 20%, rgba(19, 182, 232, 0.16) 0%, transparent 60%)'
                : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, transparent 35%, rgba(255, 255, 255, 0.65) 100%)',
            }}
          />
        </div>
      )}

      {/* Decorative grid (optional, default false to avoid generic SaaS look) */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      )}

      <div
        className={cn(
          'relative shell z-10',
          !description && !primaryCta && !secondaryCta && !sidePanel && !trustItems && !children
            ? 'py-8 md:py-12 lg:py-14'
            : 'py-16 md:py-24 lg:py-32'
        )}
      >
        {sidePanel ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Humanized Institutional Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              {eyebrow && (
                <p
                  className={cn(
                    'eyebrow mb-4 tracking-wider',
                    isGradient ? 'text-[var(--isco-cyan)]' : 'text-[var(--isco-blue)] font-extrabold'
                  )}
                >
                  {eyebrow}
                </p>
              )}

              {/* H1 */}
              <h1
                className={cn(
                  'hero-h1 mb-6 text-balance',
                  isGradient ? 'text-white' : 'text-[#0f172a]'
                )}
              >
                {title}
              </h1>

              {/* Description */}
              {description && (
                <div
                  className={cn(
                    'text-lead max-w-2xl mb-8 leading-relaxed',
                    isGradient ? 'text-white/85' : 'text-slate-700'
                  )}
                >
                  {typeof description === 'string' ? <p>{description}</p> : description}
                </div>
              )}

              {/* CTAs */}
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {primaryCta &&
                    (primaryCta.external ? (
                      <a
                        href={primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'isco-btn isco-btn-lg shadow-md',
                          isGradient
                            ? 'bg-white text-[var(--isco-navy)] hover:bg-white/95 font-bold'
                            : 'bg-[var(--isco-blue)] text-white hover:bg-[var(--isco-navy)] font-bold'
                        )}
                      >
                        {primaryCta.label}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    ) : (
                      <Link
                        href={primaryCta.href}
                        className={cn(
                          'isco-btn isco-btn-lg shadow-md',
                          isGradient
                            ? 'bg-white text-[var(--isco-navy)] hover:bg-white/95 font-bold'
                            : 'bg-[var(--isco-blue)] text-white hover:bg-[var(--isco-navy)] font-bold'
                        )}
                      >
                        {primaryCta.label}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    ))}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className={cn(
                        'isco-btn isco-btn-lg font-medium',
                        isGradient
                          ? 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                          : 'bg-white border-2 border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                      )}
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Microcopy */}
              {microcopy && (
                <p
                  className={cn(
                    'text-sm md:text-base max-w-2xl leading-relaxed',
                    isGradient ? 'text-white/75' : 'text-slate-700 font-medium'
                  )}
                >
                  {microcopy}
                </p>
              )}

              {/* Trust items */}
              {trustItems && trustItems.length > 0 && (
                <div
                  className={cn(
                    'flex flex-wrap items-center gap-x-6 gap-y-2.5 mt-5 text-sm md:text-base font-semibold',
                    isGradient ? 'text-white/80' : 'text-slate-800'
                  )}
                >
                  {trustItems.map((item, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span
                        className={cn(
                          'w-2 h-2 rounded-full flex-shrink-0',
                          isGradient ? 'bg-[var(--isco-cyan)]' : 'bg-[var(--isco-blue)]'
                        )}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Strategic Areas / Side Panel */}
            <div className="lg:col-span-5 w-full">
              {sidePanel}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl lg:max-w-4xl">
            {/* Eyebrow */}
            {eyebrow && (
              <p
                className={cn(
                  'eyebrow mb-4 tracking-wider',
                  isGradient ? 'text-[var(--isco-cyan)]' : 'text-[var(--isco-blue)] font-extrabold'
                )}
              >
                {eyebrow}
              </p>
            )}

            {/* H1 */}
            <h1
              className={cn(
                'hero-h1 text-balance',
                (description || primaryCta || secondaryCta || trustItems) && 'mb-6',
                isGradient ? 'text-white' : 'text-[#0f172a]'
              )}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <div
                className={cn(
                  'text-lead max-w-2xl lg:max-w-3xl mb-8 leading-relaxed',
                  isGradient ? 'text-white/80' : 'text-slate-700'
                )}
              >
                {typeof description === 'string' ? <p>{description}</p> : description}
              </div>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3 mb-6">
                {primaryCta &&
                  (primaryCta.external ? (
                    <a
                      href={primaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'isco-btn isco-btn-lg',
                        isGradient
                          ? 'bg-white text-[var(--isco-navy)] hover:bg-white/90'
                          : 'bg-[var(--isco-blue)] text-white hover:bg-[var(--isco-navy)] font-bold'
                      )}
                    >
                      {primaryCta.label}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={primaryCta.href}
                      className={cn(
                        'isco-btn isco-btn-lg',
                        isGradient
                          ? 'bg-white text-[var(--isco-navy)] hover:bg-white/90'
                          : 'bg-[var(--isco-blue)] text-white hover:bg-[var(--isco-navy)] font-bold'
                      )}
                    >
                      {primaryCta.label}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className={cn(
                      'isco-btn isco-btn-lg',
                      isGradient
                        ? 'border-2 border-white/30 text-white hover:bg-white/10'
                        : 'bg-white border-2 border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                    )}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}

            {/* Microcopy */}
            {microcopy && (
              <p
                className={cn(
                  'text-sm md:text-base max-w-2xl leading-relaxed',
                  isGradient ? 'text-white/75' : 'text-slate-700 font-medium'
                )}
              >
                {microcopy}
              </p>
            )}

            {/* Trust items */}
            {trustItems && trustItems.length > 0 && (
              <div
                className={cn(
                  'flex flex-wrap items-center gap-x-6 gap-y-2.5 mt-5 text-sm md:text-base font-semibold',
                  isGradient ? 'text-white/80' : 'text-slate-800'
                )}
              >
                {trustItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span
                      className={cn(
                        'w-2 h-2 rounded-full flex-shrink-0',
                        isGradient ? 'bg-[var(--isco-cyan)]' : 'bg-[var(--isco-blue)]'
                      )}
                    />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Optional children (e.g. TrustBar or quick-access cards) */}
        {children}
      </div>
    </section>
  );
}
