const logos = [
  { src: '/logos/ahoy.png', alt: 'Ahoy' },
  { src: '/logos/bouwinvest.png', alt: 'Bouwinvest' },
  { src: '/logos/lustr', alt: 'Lustr' },
  { src: '/logos/olympisch-stadion.png', alt: 'Olympisch Stadion' },
  { src: '/logos/vrije-academie.png', alt: 'Vrije Academie' },
  { src: '/logos/wtc.png', alt: 'WTC Rotterdam' },
]

const logoClass = 'w-32 h-auto object-contain grayscale opacity-60 mx-10 hover:opacity-90 hover:grayscale-0 transition-all duration-300 shrink-0'

export default function LogosSection() {
  return (
    <section className="bg-white py-16 border-t border-[#e8e8e8]">
      <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] text-center mb-10">
        Een greep uit mijn opdrachtgevers
      </p>
      <div className="overflow-hidden">
        <div className="logo-ticker flex w-max">
          {logos.map(logo => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} className={logoClass} />
          ))}
          {logos.map(logo => (
            <img key={`${logo.alt}-2`} src={logo.src} alt={logo.alt} className={logoClass} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  )
}
