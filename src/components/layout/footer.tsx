import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-foreground">ICCI Ibérica</span>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Instituto de Capacitación y Certificación Ibérica. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
