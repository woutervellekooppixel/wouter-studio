'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Interim creatief directeur',
    body: 'Creatieve aansturing die wegvalt of er nooit was, laat sporen na in elk onderdeel van een organisatie. Van briefings die niemand begrijpt tot campagnes die niet kloppen met het merk. Als tijdelijk creatief directeur breng ik overzicht, richting en continuïteit — van de eerste briefing tot de laatste oplevering.',
  },
  {
    title: 'Rebranding & huisstijl',
    body: 'Een fusie, een koerswijziging, een merk dat niet meer past bij wie je bent. Het ontwerp is zelden het probleem — het verhaal erachter is dat. Ik begeleid het hele traject: van positionering en merkstrategie tot de uitrol naar alle touchpoints.',
  },
  {
    title: 'Bureaubegeleiding',
    body: 'Een bureau ingehuurd, maar de output stelt teleur. De briefings kloppen niet, de feedback gaat nergens heen, en de kloof tussen wat je wilt en wat je krijgt groeit. Als onafhankelijke partij sla ik de brug tussen opdrachtgever en bureau — en zorg dat beide partijen dezelfde taal spreken.',
  },
  {
    title: 'AI & design',
    body: 'AI verandert het creatieve vak sneller dan de meeste organisaties bijhouden. Welke tools zijn relevant? Wat heeft direct effect, wat is hype? Als adviseur, begeleider of spreker help ik organisaties navigeren — en hun teams er daadwerkelijk mee aan de slag.',
  },
]

export default function ServicesSection() {
  return (
    <div className="divide-y divide-[#e0e0de]">
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-6 md:gap-10 py-12 group cursor-default"
        >
          <span className="text-[11px] tracking-[0.1em] text-[#999] uppercase font-normal mt-1 group-hover:text-[#C4714A] transition-colors duration-200">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-[22px] font-medium text-[#111] mb-4 tracking-tight leading-[1.3] group-hover:translate-x-1 transition-transform duration-200">
              {s.title}
            </h3>
            <p className="text-[16px] text-[#555] leading-[1.75]">{s.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
