const contactItems = [
  {
    label: 'E-mail',
    value: 'mail@wouter.studio',
    href: 'mailto:mail@wouter.studio',
  },
  {
    label: 'WhatsApp',
    value: '+31 6 16 290 418',
    href: 'https://wa.me/31616290418',
  },
  {
    label: 'LinkedIn',
    value: '/in/woutervellekoop',
    href: 'https://www.linkedin.com/in/woutervellekoop/',
  },
  {
    label: 'Fotografie',
    value: 'wouter.photo',
    href: 'https://wouter.photo',
  },
]

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-white border-t border-[#e8e8e8] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-8">↘ Contact</p>

        <h2
          className="font-black text-[#111] leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
        >
          Laten we<br />praten.
        </h2>

        <p className="text-[15px] text-[#999] mb-16 max-w-sm">
          Een eerste gesprek is altijd vrijblijvend.<br />
          Kies hoe je contact opneemt.
        </p>

        <div className="border-t border-[#e8e8e8]">
          {contactItems.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between border-b border-[#e8e8e8] py-5 md:py-6 hover:pl-2 transition-all duration-200"
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-[11px] uppercase tracking-widest text-[#999] w-20 md:w-28 shrink-0">
                  {label}
                </span>
                <span
                  className="font-black text-[#111] tracking-tight group-hover:text-[#C4714A] transition-colors duration-200"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
                >
                  {value}
                </span>
              </div>
              <span className="text-[#ccc] group-hover:text-[#C4714A] group-hover:translate-x-1 transition-all duration-200 text-xl">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
