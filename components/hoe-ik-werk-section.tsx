'use client'

import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Instappen in complexiteit',
    body: 'De meeste waarde ontstaat waar het ingewikkeld is. Waar de vraag nog niet helder is, waar eerder iemand het niet kon oplossen, of waar het proces is vastgelopen. Dat zijn de situaties waar deze werkwijze het beste past.',
  },
  {
    title: 'Strategie én uitvoering',
    body: 'Strategisch meedenken op directieniveau én zelf kunnen uitvoeren — dat is een combinatie die zelden in één persoon zit. Het betekent dat bureaus scherp gebrieft en strak beoordeeld worden, en dat er waar nodig ook zelf bijgesprongen wordt. Geen tussenlaag die vertaalt zonder te begrijpen.',
  },
  {
    title: 'Solo, zonder overhead',
    body: 'Geen accountmanager, geen junior die het uitvoert. De samenwerking is direct, persoonlijk en zonder de vertraging die bij een bureau hoort.',
  },
]

export default function HoeIkWerkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333]">
      {principles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
        >
          <span className="text-[72px] font-black text-[#2a2a2a] leading-none block mb-6">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-[16px] font-medium text-white mb-3">{p.title}</h3>
          <p className="text-[15px] text-[#888] leading-[1.7]">{p.body}</p>
        </motion.div>
      ))}
    </div>
  )
}
