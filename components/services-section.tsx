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
    <section className="bg-white py-24 px-6 scroll-mt-16" id="wat-ik-doe">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-4">Diensten</p>
        <h2
          className="font-black text-[#111] leading-[1.0] tracking-tight mb-16"
          style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
        >
          Wat ik doe.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diensten.map((d, i) => (
            <motion.div
              key={i}
              className="border border-[#e8e8e8] p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: 'easeOut' }}
            >
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#999]">
                {d.label}
              </p>
              <h3 className="text-[22px] font-black text-[#111] mt-2 mb-4 leading-tight">
                {d.titel}
              </h3>
              <p className="text-[15px] text-[#555] leading-relaxed">
                {d.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
