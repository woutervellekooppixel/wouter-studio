'use client'

import { motion } from 'framer-motion'

interface Props {
  label: string
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function SectionIntro({ label, title, subtitle, dark = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className={`text-[11px] tracking-[0.12em] uppercase font-normal mb-8 ${dark ? 'text-[#666]' : 'text-[#999]'}`}>
        {label}
      </p>
      {title && (
        <h2
          className={`font-bold leading-[1.1] tracking-[-0.02em] mb-6 ${dark ? 'text-white' : 'text-[#111]'}`}
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
        >
          {title.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h2>
      )}
      {subtitle && (
        <p className={`text-[17px] leading-[1.75] max-w-xl mb-16 ${dark ? 'text-[#888]' : 'text-[#555]'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
