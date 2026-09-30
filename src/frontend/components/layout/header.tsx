'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Building2,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Compass,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { UtilityBar } from './utility-bar';

/* ── Navegación principal ISCOBusiness (V6 Complement §64 & §70) ── */

const navGroups = [
  {
    type: 'link',
    label: 'Inicio',
    href: '/',
  },
  {
    type: 'dropdown',
    label: 'Institución',
    href: '/nosotros',
    items: [
      { label: 'Nosotros', href: '/nosotros', desc: 'Quiénes somos, qué hacemos y nuestro ecosistema' },
      { label: 'Transparencia y ARCO', href: '/transparencia', desc: 'Marco legal, integridad y rendición de cuentas' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Educación',
    href: '/centro-de-asesoria',
    items: [
      { label: 'Centro de Asesoría (Instituto Ibérica)', href: '/centro-de-asesoria', desc: 'Acompañamiento y asesoría para bachillerato modular' },
      { label: 'Educación Continua', href: '/educacion-continua', desc: 'Diplomados, talleres y actualización' },
      { label: 'Certificación Laboral (ECE)', href: 'https://iberica.iscobusiness.edu.mx/', desc: 'Portal oficial Entidad CONOCER ECE760-26' },
      { label: 'Ibérica Universidad', href: '/nosotros#universidad', desc: 'Proyecto en desarrollo normativo' },
    ],
  },
  {
    type: 'link',
    label: 'Vinculación',
    href: '/vinculacion',
  },
  {
    type: 'link',
    label: 'Conocimiento',
    href: '/conocimiento',
  },
  {
    type: 'link',
    label: 'Contacto',
    href: '/contacto',
  },
];

/* ── CTA contextual por página ─────────────────────────────── */
const ctaByPath: Record<string, { label: string; href: string }> = {
  '/': { label: 'Explorar rutas', href: '#rutas' },
  '/nosotros': { label: 'Conocer qué hacemos', href: '#que-hacemos' },
  '/centro-de-asesoria': { label: 'Solicitar Asesoría', href: '#registro' },
  '/educacion-continua': { label: 'Explorar programas', href: '#catalogo' },
  '/vinculacion': { label: 'Vincúlate', href: '#formulario' },
  '/certificacion-de-competencias': {
    label: 'Ir a la ECE',
    href: 'https://iberica.iscobusiness.edu.mx/',
  },
  '/conocimiento': { label: 'Biblioteca', href: '#biblioteca' },
  '/transparencia': { label: 'Procedimiento ARCO', href: 'mailto:privacidad@iscobusiness.edu.mx' },
  '/contacto': { label: 'Enviar mensaje', href: '#formulario' },
};

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const cta = ctaByPath[pathname] ?? {
    label: 'Solicitar información',
    href: '/contacto',
  };

  const isExternal = cta.href.startsWith('http');

  return (
    <>
      {/* ── Utility Bar ──────────────────────────────────────── */}
      <UtilityBar />

      {/* ── Main Header ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--isco-line)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="shell flex h-16 items-center justify-between">
          {/* ── Brand ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/img/logo-iscobusiness.png"
              alt="ISCOBusiness — Educación, Certificación y Vinculación"
              width={200}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* ── Desktop Navigation ────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navGroups.map((group) => {
              if (group.type === 'link') {
                const isActive =
                  group.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(group.href!);

                return (
                  <Link
                    key={group.href}
                    href={group.href!}
                    className={cn(
                      'px-3 py-2 rounded-md text-[0.82rem] font-semibold transition-colors',
                      isActive
                        ? 'text-[var(--isco-blue)] bg-[var(--isco-blue-pale)]'
                        : 'text-[var(--isco-ink-soft)] hover:text-[var(--isco-blue)] hover:bg-[var(--isco-blue-mist)]'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {group.label}
                  </Link>
                );
              }

              // Dropdown item
              const isChildActive = group.items?.some((item) =>
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              );

              return (
                <div
                  key={group.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      'px-3 py-2 rounded-md text-[0.82rem] font-semibold transition-colors inline-flex items-center gap-1',
                      isChildActive
                        ? 'text-[var(--isco-blue)] bg-[var(--isco-blue-pale)]'
                        : 'text-[var(--isco-ink-soft)] hover:text-[var(--isco-blue)] hover:bg-[var(--isco-blue-mist)]'
                    )}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      'absolute left-0 top-full pt-1.5 w-64 transition-all duration-150',
                      openDropdown === group.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    )}
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-0.5">
                      {group.items?.map((sub) => {
                        const isSubActive =
                          sub.href === '/' ? pathname === '/' : pathname.startsWith(sub.href);
                        const isSubExternal = sub.href.startsWith('http');

                        if (isSubExternal) {
                          return (
                            <a
                              key={sub.href}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 rounded-lg text-left transition hover:bg-slate-50 text-slate-700"
                            >
                              <div className="text-xs font-bold leading-tight flex items-center justify-between">
                                <span>{sub.label}</span>
                                <span className="text-[10px] text-slate-400 font-mono">↗</span>
                              </div>
                              <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                                {sub.desc}
                              </div>
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              'block px-3 py-2 rounded-lg text-left transition',
                              isSubActive
                                ? 'bg-blue-50 text-[var(--isco-blue)]'
                                : 'hover:bg-slate-50 text-slate-700'
                            )}
                          >
                            <div className="text-xs font-bold leading-tight">{sub.label}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                              {sub.desc}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            {isExternal ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="isco-btn isco-btn-primary text-xs py-2 px-4"
              >
                {cta.label}
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link href={cta.href} className="isco-btn isco-btn-primary text-xs py-2 px-4">
                {cta.label}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {/* ── Mobile Menu Toggle ────────────────────────────── */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[var(--isco-ink)]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 overflow-y-auto">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col min-h-full">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--isco-line)]">
                    <SheetClose asChild>
                      <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                          src="/img/logo-iscobusiness.png"
                          alt="ISCOBusiness"
                          width={150}
                          height={32}
                          className="h-7 w-auto"
                        />
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Cerrar menú</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile nav grouped */}
                  <nav className="flex flex-col gap-3 px-4 py-4" aria-label="Navegación móvil">
                    {navGroups.map((group) => {
                      if (group.type === 'link') {
                        const isActive =
                          group.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(group.href!);

                        return (
                          <SheetClose asChild key={group.href}>
                            <Link
                              href={group.href!}
                              className={cn(
                                'px-3 py-2.5 rounded-lg text-sm font-semibold transition',
                                isActive
                                  ? 'text-[var(--isco-blue)] bg-[var(--isco-blue-pale)]'
                                  : 'text-slate-800 hover:bg-slate-100'
                              )}
                            >
                              {group.label}
                            </Link>
                          </SheetClose>
                        );
                      }

                      return (
                        <div key={group.label} className="pt-2">
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">
                            {group.label}
                          </div>
                          <div className="space-y-0.5">
                            {group.items?.map((sub) => {
                              const isSubActive =
                                sub.href === '/' ? pathname === '/' : pathname.startsWith(sub.href);
                              const isSubExternal = sub.href.startsWith('http');

                              if (isSubExternal) {
                                return (
                                  <SheetClose asChild key={sub.href}>
                                    <a
                                      href={sub.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-3 py-2 rounded-lg text-xs font-medium transition text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                                    >
                                      <span>{sub.label}</span>
                                      <span className="text-[10px] text-slate-400 font-mono">↗</span>
                                    </a>
                                  </SheetClose>
                                );
                              }

                              return (
                                <SheetClose asChild key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className={cn(
                                      'block px-3 py-2 rounded-lg text-xs font-medium transition',
                                      isSubActive
                                        ? 'text-[var(--isco-blue)] bg-[var(--isco-blue-pale)] font-bold'
                                        : 'text-slate-700 hover:bg-slate-50'
                                    )}
                                  >
                                    {sub.label}
                                  </Link>
                                </SheetClose>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto p-5 border-t border-[var(--isco-line)]">
                    <SheetClose asChild>
                      {isExternal ? (
                        <a
                          href={cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="isco-btn isco-btn-primary w-full text-xs"
                        >
                          {cta.label}
                        </a>
                      ) : (
                        <Link
                          href={cta.href}
                          className="isco-btn isco-btn-primary w-full text-xs"
                        >
                          {cta.label}
                        </Link>
                      )}
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
