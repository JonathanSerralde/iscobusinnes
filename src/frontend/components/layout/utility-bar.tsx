'use client';

import { Phone, Mail } from 'lucide-react';

export function UtilityBar() {
  return (
    <div className="hidden md:block w-full bg-[var(--isco-navy)] text-white/90 text-[0.7rem] font-medium tracking-wide">
      <div className="shell flex items-center justify-end py-1.5">
        <div className="flex items-center gap-4 text-white/70">
          <a href="tel:+522221050550" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-white/50" />
            <span>222 105 0550</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="mailto:contacto@iscobusiness.edu.mx"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="w-3 h-3 text-white/50" />
            <span>contacto@iscobusiness.edu.mx</span>
          </a>
        </div>
      </div>
    </div>
  );
}
