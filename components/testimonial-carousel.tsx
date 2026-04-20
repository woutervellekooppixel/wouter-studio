'use client'

import { useState, useEffect } from 'react'

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

  const t = testimonials[current]

  return (
    <div>
      <div
        key={current}
        className="animate-fade-in grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 md:gap-12 items-start min-h-[160px]"
      >
        <blockquote
          className="font-normal text-[#111] leading-[1.5] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="md:text-right">
          <p className="text-[14px] font-medium text-[#111]">{t.naam}</p>
          <p className="text-[13px] text-[#999] mt-1">{t.functie}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-[#111]' : 'bg-[#ddd] hover:bg-[#bbb]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
