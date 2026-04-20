'use client'

import { motion } from 'framer-motion'

const items = [
  {
    nr: '01',
    titel: 'Instappen in complexiteit',
    body: 'De meeste waarde ontstaat waar het ingewikkeld is. Waar de vraag nog niet helder is, waar eerder iemand het niet kon oplossen.',
    tag: 'Complexiteit',
  },
  {
    nr: '02',
    titel: 'Strategie én uitvoering',
    body: 'Strategisch meedenken op directieniveau én zelf kunnen uitvoeren. Bureaus scherp briefen, strak beoordelen, en waar nodig zelf bijspringen.',
    tag: 'Uitvoering',
  },
  {
    nr: '03',
    titel: 'Solo, zonder overhead',
    body: 'Geen accountmanager, geen junior die het uitvoert. De samenwerking is direct, persoonlijk en zonder de vertraging die bij een bureau hoort.',
    tag: 'Direct',
  },
]

export default function HoeIkWerkSection() {
  return (
    <div>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="border-t border-[#e8e8e8] py-12 grid grid-cols-[80px_1fr_auto] gap-8 items-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
        >
          <span
            className="font-black text-[#f0f0ee] leading-none select-none"
            style={{ fontSize: 'clamp(64px, 8vw, 96px)' }}
          >
            {item.nr}
          </span>

          <div>
            <h3 className="text-[22px] font-medium text-[#111] mb-3 leading-tight">
              {item.titel}
            </h3>
            <p className="text-[15px] text-[#555] leading-relaxed max-w-sm">
              {item.body}
            </p>
          </div>

          <span className="text-[11px] tracking-[0.12em] uppercase text-[#999] pt-1">
            {item.tag}
          </span>
        </motion.div>
      ))}
      <div className="border-t border-[#e8e8e8]" />
    </div>
  )
}
