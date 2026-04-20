const alineas = [
  'Ik werk als creatief strateeg en interim creatief directeur vanuit Den Haag. Twintig jaar ervaring in het vak — van merkidentiteit en campagnestrategie tot digitale producten en organisatie-advies.',
  'Mijn werkwijze is direct en persoonlijk. Geen bureau-overhead, geen account-management-laag. Ik schakel rechtstreeks met directie, marketing en de creatieve teams die het werk uitvoeren.',
  'Naast strategisch werk fotografeer ik onder de naam Wouter.photo — portret, editorial en commercieel. Die dubbele achtergrond helpt: ik denk in woord én beeld.',
]

const stats = [
  { waarde: '20 jaar', label: 'Ervaring' },
  { waarde: 'Solo', label: 'Werkwijze' },
  { waarde: 'Den Haag', label: 'Gevestigd' },
]

export default function OverPage() {
  return (
    <main className="pt-14">

      {/* Sectie 1 — header */}
      <section className="bg-white py-24 px-6 border-b border-[#e8e8e8]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-6">Over</p>
          <h1
            className="font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
          >
            Wouter Vellekoop.
          </h1>
        </div>
      </section>

      {/* Sectie 2 — foto + tekst */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Foto placeholder */}
            <div className="aspect-[3/4] bg-[#f0f0ee] flex items-end justify-center pb-6">
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#bbb]">
                Portretfoto volgt
              </p>
            </div>

            {/* Tekst */}
            <div className="space-y-6">
              {alineas.map((tekst, i) => (
                <p key={i} className="text-[17px] text-[#555] leading-relaxed">
                  {tekst}
                </p>
              ))}
              <p className="text-[17px] text-[#555] leading-relaxed">
                Fotografie:{' '}
                <a
                  href="https://wouter.photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4714A] hover:opacity-70 transition-opacity duration-200"
                >
                  wouter.photo
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sectie 3 — stats */}
      <section className="bg-[#111] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map(({ waarde, label }) => (
              <div key={label}>
                <p
                  className="font-black text-white tracking-tight leading-none mb-2"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
                >
                  {waarde}
                </p>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#555]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
