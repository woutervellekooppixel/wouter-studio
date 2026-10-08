'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '20 jaar', label: 'Ervaring' },
  { value: 'Freelance of interim', label: 'Werkwijze' },
]

const alineas = [
  'Twintig jaar lang bouw en leid ik merken voor organisaties als World Trade Center, Bouwinvest, Ahoy en de Rijksoverheid. Ik stap in waar creatieve leiding ontbreekt of vastloopt, en geef een merk weer richting.',
  'Ik werk op directieniveau en blijf dicht bij het werk. Ik vertaal ambities naar heldere keuzes, stuur bureaus en teams aan en bewaak de kwaliteit tot in de laatste uiting.',
  'Ik denk niet alleen mee, ik heb het vroeger ook echt gemaakt. Als ontwerper en met AI als vast onderdeel van mijn werk. Daardoor gaan trajecten sneller, zonder dat het niveau zakt.',
]

export default function OverSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={sectionRef}
      id="over"
      className="bg-white py-16 md:py-24 border-t border-[#e8e8e8] scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Foto links — parallax */}
          <div className="relative overflow-hidden aspect-[3/4]">
            <motion.img
              src="/wouter-portret.jpg"
              alt="Wouter Vellekoop"
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.18]"
              style={isMobile ? undefined : { y }}
            />
          </div>

          {/* Tekst rechts */}
          <div>
            <motion.p
              className="text-[11px] tracking-[0.12em] uppercase text-[#999] mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              Over
            </motion.p>

            <motion.h2
              className="font-black text-[#111] tracking-tight leading-none mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06, ease: 'easeOut' }}
            >
              Wouter Vellekoop
            </motion.h2>

            {alineas.map((text, i) => (
              <motion.p
                key={i}
                className="text-[17px] text-[#555] leading-relaxed mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.08, ease: 'easeOut' }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="grid grid-cols-2 gap-6 border-t border-[#e8e8e8] pt-8 mt-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.36, ease: 'easeOut' }}
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[15px] font-black text-[#111] tracking-tight">{value}</p>
                  <p className="text-[12px] text-[#999] mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
