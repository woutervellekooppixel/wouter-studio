'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '#wat-ik-doe', label: 'Wat ik doe' },
  { href: '#hoe-ik-werk', label: 'Hoe ik werk' },
  { href: '#over', label: 'Over' },
  { href: '#contact', label: 'Contact' },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-xl tracking-tight flex items-baseline text-[#111] hover:opacity-70 transition-opacity"
        >
          <span className="font-extrabold">WOUTER</span>
          <span className="font-light">.STUDIO</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13px] font-medium uppercase text-[#999] hover:text-[#111] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/woutervellekoop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] hover:text-[#111] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </li>
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
        <div className="md:hidden border-t border-[#e8e8e8] bg-white px-6 py-5">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[13px] font-medium uppercase text-[#999] hover:text-[#111] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/woutervellekoop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-[#111] transition-colors inline-block"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
