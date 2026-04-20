'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypewriterText } from '@/components/motion'
import HeroCanvas from '@/components/hero-canvas'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const logoY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 w-full">
        {/* WOUTER.STUDIO — drifts on scroll */}
        <motion.div
          style={{ y: logoY, opacity: logoOpacity }}
          className="mb-10"
        >
          <span
            className="tracking-tight text-[#111] flex items-baseline"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            <span className="font-extrabold">WOUTER</span>
            <span className="font-light">.STUDIO</span>
          </span>
        </motion.div>

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
