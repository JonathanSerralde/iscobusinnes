'use client';

import { MessageCircle } from 'lucide-react';

/**
 * Floating WhatsApp button (Plan Maestro §106)
 * Positioned bottom-right, 48×48px, avoids covering CTAs on mobile.
 */
export function FloatingWhatsApp() {
  const phone = '522221050550';
  const message = encodeURIComponent(
    'Hola, me gustaría recibir información sobre los servicios de ISCOBusiness.'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 md:bottom-8 md:right-8"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
