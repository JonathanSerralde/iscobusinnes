'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Accessible FAQ accordion (Plan Maestro §24, §74, §84).
 */
export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('divide-y divide-[var(--isco-line)]', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;

        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              id={`${id}-trigger`}
              className="flex w-full items-center justify-between py-5 text-left group"
            >
              <span className="text-base font-bold text-[var(--isco-ink)] pr-4 group-hover:text-[var(--isco-blue)] transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 shrink-0 text-[var(--isco-ink-soft)] transition-transform duration-200',
                  isOpen && 'rotate-180 text-[var(--isco-blue)]'
                )}
              />
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-trigger`}
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              )}
            >
              <p className="text-sm text-[var(--isco-ink-soft)] leading-relaxed pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
