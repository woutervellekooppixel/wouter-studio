import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: 'Wouter Vellekoop — Creatief strateeg & interim creatief directeur',
  description:
    'Bij rebranding, fusies en reorganisaties is creatieve aansturing vaak het eerste dat ontbreekt — en het laatste waar iemand aan denkt. Creatief strateeg en interim creatief directeur in Den Haag.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  )
}
