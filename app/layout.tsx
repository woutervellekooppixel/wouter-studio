import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Link from 'next/link'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Wouter Vellekoop — Creatief strateeg & interim creatief directeur',
  description:
    'Ik ben de creatieve spil die je inschakelt als het vastloopt. Bij rebranding, fusies en reorganisaties. Creatief strateeg en interim creatief directeur in Den Haag.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t border-[#e5e5e5]">
          <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-[#999]">
              © {new Date().getFullYear()} Wouter Vellekoop
            </div>
            <div className="flex items-center gap-6 text-xs">
              <Link
                href="https://wouter.photo"
                className="text-[#999] hover:text-[#111] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                wouter.photo →
              </Link>
              <Link
                href="mailto:wouter@wouter.studio"
                className="text-[#999] hover:text-[#111] transition-colors"
              >
                wouter@wouter.studio
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
