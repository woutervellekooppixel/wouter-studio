'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '20 jaar', label: 'Ervaring' },
  { value: 'Freelance/Interim', label: 'Werkwijze' },
]

const alineas = [
  'Ik werk als creatief strateeg en interim creatief directeur, gebaseerd in Den Haag, werkzaam door heel Nederland. Twintig jaar ervaring in het vak — van merkidentiteit en campagnestrategie tot digitale producten en organisatie-advies.',
  'Mijn werkwijze is direct en persoonlijk. Geen bureau-overhead, geen account-management-laag. Ik schakel rechtstreeks met directie, marketing en de creatieve teams die het werk uitvoeren.',
  'Ik neem opdrachten aan waarbij strategie en uitvoering samenkomen — en waarbij het ertoe doet. Vastgelopen merken, ambitieuze lanceringen, creatief leiderschap dat wegviel.',
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
              src="/wouter.png"
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
