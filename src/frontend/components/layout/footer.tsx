import Link from 'next/link';
import Image from 'next/image';

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
          <div className="flex items-center">
            <Image 
              src="/img/Logo Ibérica 2.69 x 1.47.svg"
              alt="Ibérica"
              width={85}
              height={47}
            />
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Ibérica. Todos los derechos reservados.
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
