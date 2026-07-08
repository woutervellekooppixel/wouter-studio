import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  metadataBase: new URL('https://wouter.studio'),
  title: 'Wouter Vellekoop — Creatief strateeg & interim creatief directeur',
  description:
    'Bij rebranding, fusies en reorganisaties is creatieve aansturing vaak het eerste dat ontbreekt — en het laatste waar iemand aan denkt. Creatief strateeg en interim creatief directeur in Den Haag.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://wouter.studio',
    siteName: 'Wouter Vellekoop',
    title: 'Wouter Vellekoop — Creatief strateeg & interim creatief directeur',
    description:
      'Bij rebranding, fusies en reorganisaties is creatieve aansturing vaak het eerste dat ontbreekt — en het laatste waar iemand aan denkt. Creatief strateeg en interim creatief directeur in Den Haag.',
    images: [{ url: '/wouter.png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wouter Vellekoop',
  jobTitle: 'Creatief strateeg & interim creatief directeur',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Den Haag',
    addressCountry: 'NL',
  },
  url: 'https://wouter.studio',
  sameAs: ['https://www.linkedin.com/in/woutervellekoop/'],
}

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Wouter Vellekoop',
  url: 'https://wouter.studio',
  areaServed: 'Nederland',
  description:
    'Creatief strateeg en interim creatief directeur, gebaseerd in Den Haag, werkzaam door heel Nederland.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  )
}
