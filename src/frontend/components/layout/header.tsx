
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/oferta-formativa', label: 'Oferta Formativa' },
  { 
    href: '/servicios', 
    label: 'Servicios',
    subLinks: [
      { href: '/servicios/certificacion', label: 'Certificación de Competencias' },
      { href: '/servicios/capacitacion-corporativa', label: 'Capacitación Corporativa' },
      { href: '/servicios/consultoria-educativa', label: 'Consultoría Educativa' },
    ] 
  },
  { href: 'https://academia.iberica.mx/login/index.php', label: 'Aula Virtual', external: true },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false, subLinks, external }: { href: string; label: string, isMobile?: boolean, subLinks?: {href: string, label: string}[], external?: boolean }) => {
    const isActive = !external && pathname.startsWith(href);

    if (subLinks) {
      if (isMobile) {
        return (
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full text-lg py-2 text-foreground/80 hover:text-primary transition-colors">
              {label} <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 flex flex-col gap-2 mt-2">
              {subLinks.map(subLink => (
                 <SheetClose asChild key={subLink.href}>
                   <Link href={subLink.href} className={cn("text-base text-foreground/70", pathname === subLink.href && "text-primary font-semibold")}>{subLink.label}</Link>
                 </SheetClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )
      }
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className={cn("transition-colors hover:text-primary px-0 hover:bg-transparent", isActive ? "text-primary font-semibold" : "text-foreground/80", "text-sm font-medium")}>
              {label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2">
            <div className="grid">
              {subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className={cn("p-2 rounded-md hover:bg-muted text-sm", pathname === subLink.href && "bg-muted font-semibold")}
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    }

    const linkClass = cn(
      "transition-colors hover:text-primary",
      isActive && href !== '/' ? "text-primary font-semibold" : "text-foreground/80",
      pathname === '/' && href === '/' ? "text-primary font-semibold" : "",
      isMobile ? "text-lg py-2" : "text-sm font-medium"
    );

    // Handle external links
    if (external) {
      const externalLink = (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      );
      if (isMobile) {
        return <SheetClose asChild>{externalLink}</SheetClose>;
      }
      return externalLink;
    }

    const linkContent = <Link href={href} className={linkClass}>{label}</Link>;

    if (isMobile) {
      return (
        <SheetClose asChild>
          {linkContent}
        </SheetClose>
      )
    }

    return linkContent;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/img/Logo Ibérica 2.69 x 1.47.svg"
            alt="Ibérica - Instituto de Capacitación y Certificación"
            width={102}
            height={56}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image 
                        src="/img/Logo Ibérica 2.69 x 1.47.svg"
                        alt="Ibérica"
                        width={85}
                        height={47}
                      />
                    </Link>
                  </SheetClose>
                   <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Cerrar menú</span>
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} isMobile />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
