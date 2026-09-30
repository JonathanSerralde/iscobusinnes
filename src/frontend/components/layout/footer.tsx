import Link from 'next/link';
import Image from 'next/image';

/* ── Footer ISCOBusiness (Plan Maestro §86 + V6 §70) ─────────── */

const institucionCol = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros e Institución', href: '/nosotros' },
  { label: 'Transparencia y ARCO', href: '/transparencia' },
];

const educacionCol = [
  { label: 'Centro de Asesoría (Instituto Ibérica)', href: '/centro-de-asesoria' },
  { label: 'Educación Continua', href: '/educacion-continua' },
  {
    label: 'Certificación CONOCER ECE760-26',
    href: 'https://iberica.iscobusiness.edu.mx/',
    external: true,
  },
  {
    label: 'Instituto Ibérica',
    href: 'https://iberica.iscobusiness.edu.mx/',
    external: true,
  },
  { label: 'Ibérica Universidad (En desarrollo)', href: '/nosotros#universidad' },
];

const conocimientoCol = [
  { label: 'Actualidad y Artículos', href: '/conocimiento' },
  { label: 'Biblioteca Digital', href: '/conocimiento#biblioteca' },
  { label: 'Sala de Prensa', href: '/conocimiento#prensa' },
];

const vinculacionCol = [
  { label: 'Vinculación Institucional', href: '/vinculacion' },
  { label: 'Mesa de Vinculación', href: '/vinculacion#formulario' },
  { label: 'Contacto y Atención', href: '/contacto' },
  { label: 'Sedes y Domicilio', href: '/contacto#sedes' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/inst.iberica',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/inst.iberica/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@inst.iberica',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/inst-ibérica',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--isco-navy)] text-white/80">
      {/* ── Franja tricolor superior institucional (§32) ─────── */}
      <div className="footer-stripe" />

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Col 1 — Identidad */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/img/logo-iscobusiness.png"
              alt="ISCOBusiness"
              width={200}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm font-semibold text-white/90">
              International Supreme Council for Social, Business and Industrial Development, A.C.
            </p>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Organización de la sociedad civil comprometida con la dignidad de las personas, la educación flexible, el reconocimiento a la experiencia laboral y el desarrollo comunitario en México.
            </p>
            <div className="pt-2 text-[11px] text-white/50 space-y-1">
              <div>Entidad de Certificación y Evaluación CONOCER: ECE760-26</div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Institución */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.14em] uppercase text-white/40 mb-4">
              Institución
            </h3>
            <ul className="space-y-2.5">
              {institucionCol.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Educación & Unidades */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.14em] uppercase text-white/40 mb-4">
              Educación
            </h3>
            <ul className="space-y-2.5">
              {educacionCol.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-xs text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Conocimiento & Prensa */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.14em] uppercase text-white/40 mb-4">
              Conocimiento
            </h3>
            <ul className="space-y-2.5">
              {conocimientoCol.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Vinculación & Contacto */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.14em] uppercase text-white/40 mb-4">
              Vinculación
            </h3>
            <ul className="space-y-2.5">
              {vinculacionCol.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="shell flex flex-col md:flex-row items-center justify-between py-5 gap-3">
          <p className="text-xs text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} ISCOBusiness — International Supreme
            Council for Social, Business and Industrial Development, A.C. Todos
            los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/transparencia" className="hover:text-white/70 transition">Transparencia</Link>
            <span>•</span>
            <Link href="/transparencia#arco" className="hover:text-white/70 transition">Privacidad</Link>
            <span>•</span>
            <Link href="/transparencia#arco" className="hover:text-white/70 transition">Procedimiento ARCO</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
