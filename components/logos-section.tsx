const namen = [
  'Ahoy',
  'Bouwinvest',
  'World Trade Center Rotterdam',
  'Olympisch Stadion',
  'Cushman & Wakefield',
  'Rijksoverheid',
  'World Trade Center The Hague',
  'Vrije Academie',
  'Gemeente Den Haag',
  'Luminiscence',
  'Haags Sportgala',
  'Dutch Classics',
  'LUSTR',
  'ZZP All Day',
]

export default function LogosSection() {
  return (
    <section className="bg-white py-16 border-t border-[#e8e8e8]">
      <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] text-center mb-10">
        Een greep uit mijn opdrachtgevers
      </p>
      <div className="overflow-hidden">
        <div className="logo-ticker flex w-max items-baseline">
          {[1, 2].flatMap(n =>
            namen.map(naam => (
              <span
                key={`${naam}-${n}`}
                aria-hidden={n > 1}
                className="font-black text-[#bbb] hover:text-[#111] tracking-tight whitespace-nowrap mx-8 transition-colors duration-300"
                style={{ fontSize: 'clamp(22px, 2.4vw, 34px)' }}
              >
                {naam}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
