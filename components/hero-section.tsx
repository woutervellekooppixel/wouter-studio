'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RotatingTypewriter } from '@/components/motion'

const woorden = ['team', 'merk', 'fusie', 'rebranding', 'organisatie']
import HeroCanvas from '@/components/hero-canvas'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollY } = useScroll()
  const h1Y = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden px-4 md:px-0">
      <HeroCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-32 w-full">
<motion.div style={isMobile ? undefined : { y: h1Y }}>
          <h1
            className="font-black text-[#111] leading-[1.0] tracking-[-0.03em] mb-10 max-w-3xl min-h-[4em] md:min-h-[3em]"
            style={{ fontSize: 'clamp(36px, 6vw, 88px)' }}
          >
            <RotatingTypewriter
              prefix="Creatief directeur, tijdelijk in jouw "
              words={woorden}
              startDelay={0.3}
              speed={40}
            />
          </h1>
        </motion.div>

        <p className="text-[17px] text-[#555] max-w-md leading-[1.75] mb-4">
          Twintig jaar merken bouwen en bewaken, voor onder meer Ahoy,
          Bouwinvest, World Trade Center en de Rijksoverheid.
        </p>
        <p className="text-[14px] text-[#999] mb-12">
          Freelance per uur of interim, in overleg.
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
