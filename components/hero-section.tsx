'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypewriterText } from '@/components/motion'
import HeroCanvas from '@/components/hero-canvas'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const h1Y = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 w-full">
<motion.div style={{ y: h1Y }}>
          <h1
            className="font-black text-[#111] leading-[1.0] tracking-[-0.03em] mb-10 max-w-2xl"
            style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
          >
            <TypewriterText
              text="Vastgelopen op het gebied van design of strategie?"
              startDelay={0.3}
              speed={40}
            />
          </h1>
        </motion.div>

        <p className="text-[17px] text-[#555] max-w-md leading-[1.75] mb-4">
          Bij rebranding, fusies en reorganisaties is creatieve aansturing
          vaak het eerste dat ontbreekt — en het laatste waar iemand aan
          denkt. Daar kom ik in beeld.
        </p>
        <p className="text-[14px] text-[#999] mb-12">
          Solo. Zonder bureau. Zonder overhead.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-block border border-[#111] text-[#111] text-[13px] tracking-[0.06em] uppercase px-7 py-3.5 hover:bg-[#111] hover:text-white transition-colors duration-200"
          >
            Neem contact op
          </a>
          <a
            href="#wat-ik-doe"
            className="inline-block text-[#555] text-[13px] tracking-[0.06em] uppercase px-7 py-3.5 hover:text-[#111] transition-colors duration-200"
          >
            Wat ik doe →
          </a>
        </div>
      </div>
    </section>
  )
}
