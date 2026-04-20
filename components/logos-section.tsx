'use client'

import { motion } from 'framer-motion'

const logos = [
  { src: '/logos/ahoy.png', alt: 'Ahoy' },
  { src: '/logos/bouwinvest.png', alt: 'Bouwinvest' },
  { src: '/logos/lustr', alt: 'Lustr' },
  { src: '/logos/olympisch-stadion.png', alt: 'Olympisch Stadion' },
  { src: '/logos/vrije-academie.png', alt: 'Vrije Academie' },
  { src: '/logos/wtc.png', alt: 'WTC Rotterdam' },
]

export default function LogosSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-12">
      {logos.map((logo, i) => (
        <motion.img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          whileHover={{ opacity: 0.9, filter: 'grayscale(0)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-16 w-auto object-contain grayscale"
          style={{ filter: 'grayscale(1)' }}
        />
      ))}
    </div>
  )
}
