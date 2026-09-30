import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import { Toaster } from '@/components/ui/toaster';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'ISCOBusiness — Educación, Certificación y Vinculación',
    template: '%s | ISCOBusiness',
  },
  description:
    'ISCOBusiness es un ecosistema de educación, desarrollo social y vinculación que conecta a personas, instituciones, empresas y comunidades con oportunidades de formación, certificación y desarrollo.',
  keywords: [
    'ISCOBusiness',
    'educación',
    'certificación de competencias',
    'vinculación',
    'centro de asesoria',
    'bachillerato modular',
    'educación continua',
    'ECE760-26',
    'Instituto Ibérica',
    'capacitación',
    'desarrollo social',
  ],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/img/logo-iscobusiness.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'ISCOBusiness',
    title: 'ISCOBusiness — Educación, Certificación y Vinculación',
    description:
      'Ecosistema de educación, desarrollo social y vinculación que conecta a personas, instituciones y comunidades con oportunidades.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISCOBusiness — Educación, Certificación y Vinculación',
    description:
      'Ecosistema de educación, desarrollo social y vinculación.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${newsreader.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'ISCOBusiness',
              legalName:
                'International Supreme Council for Social, Business and Industrial Development, A.C.',
              alternateName: 'ISCO & BAIND',
              url: 'https://iscobusiness.edu.mx',
              logo: 'https://iscobusiness.edu.mx/img/logo-iscobusiness.svg',
              description:
                'Ecosistema de educación, desarrollo social, certificación de competencias laborales (ECE760-26) y vinculación estratégica.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Avenida Orión Sur 733-2, Villa Floresta',
                addressLocality: 'San Andrés Cholula',
                addressRegion: 'Puebla',
                postalCode: '72825',
                addressCountry: 'MX',
              },
              telephone: '+52-222-105-0550',
              email: 'contacto@iscobusiness.edu.mx',
              sameAs: ['https://iberica.iscobusiness.edu.mx'],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <div className="flex flex-col min-h-dvh bg-background text-foreground">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
