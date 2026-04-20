'use client'

import { useState, useEffect } from 'react'
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
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="min-h-[200px] mb-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <blockquote
              className="font-normal text-[#111] leading-[1.35] tracking-tight mb-8"
              style={{ fontSize: 'clamp(20px, 2.8vw, 32px)' }}
            >
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <p className="text-[14px] font-medium text-[#111]">{testimonials[current].naam}</p>
            <p className="text-[13px] text-[#999] mt-1">{testimonials[current].functie}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Testimonial ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-5 h-2 bg-[#111]'
                : 'w-2 h-2 bg-[#ccc] hover:bg-[#999]'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}
