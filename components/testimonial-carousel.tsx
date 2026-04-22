'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Na veel vormgevers die ons concept niet konden visualiseren, bracht Wouter een frisse wind. Zijn kracht zit niet alleen in de designs, maar in hoe hij zich verdiept in de klant.',
    naam: 'Denise Nieuwdorp',
    functie: 'Marketing- & communicatieadviseur',
  },
  {
    quote: 'Creatief, gedetailleerd, gestructureerd en zeer veelzijdig — of het nu ging om fotografie, websites, verpakkingen of productontwerp, het resultaat was altijd uitstekend.',
    naam: 'Nathalie van Wijkvliet',
    functie: 'Communicatieadviseur',
  },
  {
    quote: 'Hij luistert goed naar je wensen maar is ook niet bang om suggesties te geven waardoor alles er nog net ff 10x beter uit komt te zien.',
    naam: 'Lilianne Laan',
    functie: 'Opdrachtgever',
  },
  {
    quote: 'Wouter gaat gedreven te werk, heeft goede ideeën, enorm oog voor detail en rust niet voordat iedereen tevreden is met het eindresultaat.',
    naam: 'Tess van der Zwet',
    functie: 'Opdrachtgever',
  },
]

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setActive(i => (i + 1) % testimonials.length)
    }, 5000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1)
    setActive(next)
    startTimer()
  }

  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#e8e8e8]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] mb-16">
          Wat anderen zeggen
        </p>

        <div className="relative min-h-[200px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <blockquote
                className="font-normal text-[#111] leading-[1.4] tracking-tight mb-8"
                style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
              >
                "{testimonials[active].quote}"
              </blockquote>
              <p className="text-[14px] font-medium text-[#111]">
                {testimonials[active].naam}
              </p>
              <p className="text-[13px] text-[#999] mt-1">
                {testimonials[active].functie}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="relative h-[2px] shrink-0 transition-all duration-300"
              style={{
                width: i === active ? '48px' : '24px',
                backgroundColor: i === active ? '#111' : '#e8e8e8',
              }}
            />
          ))}

          <div className="flex gap-4 ml-auto">
            <button
              onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
              className="text-[#ccc] hover:text-[#111] transition-colors duration-200 text-lg leading-none"
              aria-label="Vorige"
            >
              ←
            </button>
            <button
              onClick={() => go((active + 1) % testimonials.length)}
              className="text-[#ccc] hover:text-[#111] transition-colors duration-200 text-lg leading-none"
              aria-label="Volgende"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
