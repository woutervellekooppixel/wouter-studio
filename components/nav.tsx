'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '#wat-ik-doe', label: 'Wat ik doe' },
  { href: '#hoe-ik-werk', label: 'Hoe ik werk' },
  { href: '#cases', label: 'Cases' },
  { href: '#over', label: 'Over' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-[#111] font-semibold text-[15px] tracking-tight hover:text-[#C4714A] transition-colors"
        >
          Wouter Vellekoop
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[14px] text-[#999] hover:text-[#111] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#111] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#e5e5e5] bg-white px-6 py-5">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[15px] text-[#999] hover:text-[#111] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
