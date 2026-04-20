'use client'

import { motion } from 'framer-motion'

const werkwijzen = [
  {
    titel: 'Instappen in complexiteit',
    sub: 'Waar het vastloopt, waar de vraag nog niet helder is.',
    pct: '100%',
  },
  {
    titel: 'Strategie én uitvoering',
    sub: 'Beide talen spreken — directieniveau én bureau.',
    pct: '78%',
  },
  {
    titel: 'Solo, zonder overhead',
    sub: 'Direct, persoonlijk, geen vertraging.',
    pct: '58%',
  },
]

export default function HoeIkWerkSection() {
  return (
    <div className="space-y-3">
      {werkwijzen.map((w, i) => (
        <div key={i} className="overflow-hidden" style={{ maxWidth: w.pct }}>
          <motion.div
            className="bg-[#111] flex items-center justify-between px-6 py-5"
            style={{ minWidth: '560px' }}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-10">
              <span className="text-[11px] tracking-[0.1em] uppercase text-[#555] shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[17px] font-medium text-white tracking-tight">
                {w.titel}
              </span>
            </div>
            <span className="text-[13px] text-[#888] text-right max-w-[240px] leading-relaxed hidden lg:block shrink-0 ml-8">
              {w.sub}
            </span>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
