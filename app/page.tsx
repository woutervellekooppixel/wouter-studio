import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import { TypewriterText } from '@/components/motion'

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

const logos = [
  { src: '/logos/ahoy.png', alt: 'Ahoy' },
  { src: '/logos/bouwinvest.png', alt: 'Bouwinvest' },
  { src: '/logos/lustr', alt: 'Lustr' },
  { src: '/logos/olympisch-stadion.png', alt: 'Olympisch Stadion' },
  { src: '/logos/vrije-academie.png', alt: 'Vrije Academie' },
  { src: '/logos/wtc.png', alt: 'WTC Rotterdam' },
]

const testimonials = [
  {
    quote: 'Na veel vormgevers die ons concept niet konden visualiseren, bracht Wouter een frisse wind. Zijn kracht zit niet alleen in de designs, maar in hoe hij zich verdiept in de klant.',
    naam: 'Denise Nieuwdorp',
    functie: 'Marketing- & communicatieadviseur',
  },
  {
    quote: 'Creatief, gedetailleerd, gestructureerd en zeer veelzijdig — of het nu ging om fotografie, websites, verpakkingen of productontwerp, het resultaat was altijd uitstekend.',
    naam: 'Nathalie van Wijkvliet',
    functie: 'Communicatieadviseur',
  },
  {
    quote: 'Hij luistert goed naar je wensen maar is ook niet bang om suggesties te geven waardoor alles er nog net ff 10x beter uit komt te zien.',
    naam: 'Lilianne Laan',
    functie: 'Opdrachtgever',
  },
  {
    quote: 'Wouter gaat gedreven te werk, heeft goede ideeën, enorm oog voor detail en rust niet voordat iedereen tevreden is met het eindresultaat.',
    naam: 'Tess van der Zwet',
    functie: 'Opdrachtgever',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <h1
            className="font-black text-[#111] leading-[1.0] tracking-[-0.03em] mb-10 max-w-4xl"
            style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}
          >
            <TypewriterText
              text="Vastgelopen op het gebied van design of strategie?"
              startDelay={0.3}
              speed={40}
            />
          </h1>
          <p className="text-[17px] text-[#555] max-w-xl leading-[1.75] mb-4">
            Bij rebranding, fusies en reorganisaties is creatieve aansturing
            vaak het eerste dat ontbreekt — en het laatste waar iemand aan
            denkt. Daar kom ik in beeld.
          </p>
          <p className="text-[14px] text-[#999] mb-12">
            Solo. Zonder bureau. Zonder overhead.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block border border-[#111] text-[#111] text-[13px] tracking-[0.06em] uppercase px-7 py-3.5 hover:bg-[#111] hover:text-white transition-colors duration-200"
            >
              Neem contact op
            </a>
            <a
              href="#wat-ik-doe"
              className="inline-block text-[#555] text-[13px] tracking-[0.06em] uppercase px-7 py-3.5 hover:text-[#111] transition-colors duration-200"
            >
              Wat ik doe →
            </a>
          </div>
        </div>
      </section>

      {/* ── Wat ik doe ───────────────────────────────────── */}
      <section id="wat-ik-doe" className="border-t border-[#e8e8e8] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-8">
            Diensten
          </p>
          <h2
            className="font-bold text-[#111] leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Wat ik doe
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-xl mb-16">
            Geen vaste producten, geen standaard trajecten. De situatie
            bepaalt de aanpak.
          </p>
          <div className="divide-y divide-[#e8e8e8]">
            {services.map((s, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-6 md:gap-10 py-10">
                <span className="text-[11px] tracking-[0.1em] text-[#999] uppercase font-normal mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#111] mb-3 tracking-tight leading-[1.3]">
                    {s.title}
                  </h3>
                  <p className="text-[16px] text-[#555] leading-[1.75]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hoe ik werk ──────────────────────────────────── */}
      <section id="hoe-ik-werk" className="border-t border-[#e8e8e8] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-8">
            Aanpak
          </p>
          <h2
            className="font-bold text-[#111] leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Hoe ik werk
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-xl mb-16">
            Geen standaard trajecten. De situatie bepaalt de aanpak — altijd.
          </p>
          <div className="divide-y divide-[#e8e8e8]">
            {principles.map((p, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-6 md:gap-10 py-10">
                <span className="text-[11px] tracking-[0.1em] text-[#999] uppercase font-normal mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#111] mb-3 tracking-tight leading-[1.3]">
                    {p.title}
                  </h3>
                  <p className="text-[16px] text-[#555] leading-[1.75]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opdrachtgevers ───────────────────────────────── */}
      <section className="border-t border-[#e8e8e8] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-12 text-center">
            Een greep uit mijn opdrachtgevers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16 md:gap-y-10">
            {logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain grayscale opacity-40 hover:opacity-70 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="border-t border-[#e8e8e8] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-16">
            Wat anderen zeggen
          </p>
          <div className="divide-y divide-[#e8e8e8]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
              >
                <blockquote
                  className="font-normal text-[#111] leading-[1.55] tracking-tight max-w-2xl"
                  style={{ fontSize: 'clamp(18px, 2.2vw, 20px)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="md:text-right shrink-0">
                  <p className="text-[14px] font-medium text-[#111]">{t.naam}</p>
                  <p className="text-[13px] text-[#999] mt-1">{t.functie}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="border-t border-[#e8e8e8] scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-8">
            Contact
          </p>
          <h2
            className="font-bold text-[#111] leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Vastgelopen?<br />Laten we praten.
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-xl mb-16">
            Een eerste gesprek is altijd vrijblijvend. Vertel kort wat er
            speelt, dan wordt er gekeken of en hoe er geholpen kan worden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-16 items-start pb-8">
            <ContactForm />
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  E-mail
                </p>
                <a
                  href="mailto:wouter@wouter.studio"
                  className="text-[15px] font-medium text-[#111] hover:opacity-60 transition-opacity"
                >
                  wouter@wouter.studio
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  Telefoon
                </p>
                <p className="text-[15px] text-[#999]">Volgt</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#999] font-normal mb-3">
                  Gevestigd in
                </p>
                <p className="text-[15px] font-medium text-[#111]">Den Haag</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
