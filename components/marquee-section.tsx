const words = [
  'Strategie',
  'Interim',
  'Rebranding',
  'AI & design',
  'Bureaubegeleiding',
  'Huisstijl',
  'Positionering',
  'Creatieve regie',
]

export default function MarqueeSection() {
  return (
    <div className="border-t border-b border-[#e8e8e8] py-5 overflow-hidden bg-white">
      <div className="flex whitespace-nowrap animate-marquee gap-0">
        {[...Array(4)].map((_, r) => (
          <span key={r} className="flex items-center shrink-0">
            {words.map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#111] px-8">
                  {word}
                </span>
                <span className="text-[#ccc] text-[8px]">◆</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
