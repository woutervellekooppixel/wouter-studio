'use client'

import { motion } from 'framer-motion'

const diensten = [
  {
    label: 'Strategie & leiderschap',
    titel: 'Interim creatief directeur',
    body: 'Creatieve aansturing die wegvalt of er nooit was, laat sporen na in elk onderdeel van een organisatie. Als tijdelijk creatief directeur breng ik overzicht, richting en continuïteit.',
  },
  {
    label: 'Merk & identiteit',
    titel: 'Rebranding & huisstijl',
    body: 'Een fusie, een koerswijziging, een merk dat niet meer past. Ik begeleid het hele traject van positionering en merkstrategie tot uitrol naar alle touchpoints.',
  },
  {
    label: 'Begeleiding',
    titel: 'Bureaubegeleiding',
    body: 'Een bureau ingehuurd maar de output stelt teleur. Als onafhankelijke partij sla ik de brug — en zorg dat beide partijen dezelfde taal spreken.',
  },
  {
    label: 'Technologie & innovatie',
    titel: 'AI & design',
    body: 'AI verandert het creatieve vak sneller dan de meeste organisaties bijhouden. Als adviseur, begeleider of spreker help ik navigeren.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white scroll-mt-16" id="wat-ik-doe">
      <div className="max-w-5xl mx-auto px-6 pt-4">
        {diensten.map((d, i) => (
          <motion.div
            key={i}
            className="border-t border-[#e8e8e8] py-8 flex items-start justify-between group cursor-default"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' }}
          >
            <div className="flex-1">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] mb-3">{d.label}</p>
              <h3
                className="font-black text-[#111] tracking-tight leading-none mb-4 group-hover:translate-x-1 transition-transform duration-300"
                style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
              >
                {d.titel}.
              </h3>
              <p className="text-[15px] text-[#555] leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                {d.body}
              </p>
            </div>
            <span className="text-[#ccc] group-hover:text-[#111] text-2xl ml-8 mt-1 transition-colors duration-300 shrink-0">
              →
            </span>
          </motion.div>
        ))}
        <div className="border-t border-[#e8e8e8] mb-8" />
      </div>
    </section>
  )
}
