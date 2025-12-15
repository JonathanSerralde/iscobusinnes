import { ContactForm } from '@/components/contacto/contact-form';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros. Estamos aquí para ayudarte con tus necesidades de capacitación y certificación.',
};

const contactDetails = [
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        label: "Email",
        value: "contacto@iberica.mx",
        href: "mailto:contacto@iberica.mx",
    },
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        label: "Teléfono",
        value: "+52 55 1234 5678",
        href: "tel:+525512345678",
    },
    {
        icon: <MapPin className="h-6 w-6 text-primary" />,
        label: "Dirección",
        value: "Av. de la Reforma 222, Ciudad de México, MX",
    }
];

export default function ContactoPage() {
  const contactImage = PlaceHolderImages.find(img => img.id === 'contact');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Contacto</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Estamos listos para escucharte. Ponte en contacto con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-headline mb-6 text-primary">Envíanos un Mensaje</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-headline mb-6 text-primary">Información de Contacto</h3>
                <ul className="space-y-6">
                    {contactDetails.map(detail => (
                        <li key={detail.label} className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                {detail.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{detail.label}</h4>
                                {detail.href ? (
                                    <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.value}</a>
                                ) : (
                                    <p className="text-muted-foreground">{detail.value}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {contactImage && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={contactImage.imageUrl}
                        alt={contactImage.description}
                        data-ai-hint={contactImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
