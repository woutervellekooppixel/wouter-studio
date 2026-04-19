import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import {
  Counter,
  FadeUp,
  HeroText,
  SlideIn,
  StaggerGrid,
  StaggerItem,
  TypewriterText,
} from '@/components/motion'

const services = [
  {
    number: '01',
    title: 'Interim creatief directeur',
    body: 'Creatieve aansturing die wegvalt of er nooit was, laat sporen na in elk onderdeel van een organisatie. Van briefings die niemand begrijpt tot campagnes die niet kloppen met het merk. Als tijdelijk creatief directeur breng ik overzicht, richting en continuïteit — van de eerste briefing tot de laatste oplevering.',
  },
  {
    number: '02',
    title: 'Rebranding & huisstijl',
    body: 'Een fusie, een koerswijziging, een merk dat niet meer past bij wie je bent. Het ontwerp is zelden het probleem — het verhaal erachter is dat. Ik begeleid het hele traject: van positionering en merkstrategie tot de uitrol naar alle touchpoints.',
  },
  {
    number: '03',
    title: 'Bureaubegeleiding',
    body: 'Een bureau ingehuurd, maar de output stelt teleur. De briefings kloppen niet, de feedback gaat nergens heen, en de kloof tussen wat je wilt en wat je krijgt groeit. Als onafhankelijke partij sla ik de brug tussen opdrachtgever en bureau — en zorg dat beide partijen dezelfde taal spreken.',
  },
  {
    number: '04',
    title: 'AI & design',
    body: 'AI verandert het creatieve vak sneller dan de meeste organisaties bijhouden. Welke tools zijn relevant? Wat heeft direct effect, wat is hype? Als adviseur, begeleider of spreker help ik organisaties navigeren — en hun teams er daadwerkelijk mee aan de slag.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Instappen in complexiteit',
    body: 'De meeste waarde ontstaat waar het ingewikkeld is. Waar de vraag nog niet helder is, waar eerder iemand het niet kon oplossen, of waar het proces is vastgelopen. Dat zijn de situaties waar deze werkwijze het beste past.',
    from: 'left' as const,
  },
  {
    number: '02',
    title: 'Strategie én uitvoering',
    body: 'Strategisch meedenken op directieniveau én zelf kunnen uitvoeren — dat is een combinatie die zelden in één persoon zit. Het betekent dat bureaus scherp gebrieft en strak beoordeeld worden, en dat er waar nodig ook zelf bijgesprongen wordt. Geen tussenlaag die vertaalt zonder te begrijpen.',
    from: 'bottom' as const,
  },
  {
    number: '03',
    title: 'Solo, zonder overhead',
    body: 'Geen accountmanager, geen junior die het uitvoert. De samenwerking is direct, persoonlijk en zonder de vertraging die bij een bureau hoort.',
    from: 'right' as const,
  },
]

const cases = [
  {
    number: '01',
    title: 'WTC Rotterdam',
    subtitle: 'Digitale omgevingscommunicatie',
    situation: 'WTC Rotterdam maakte de transitie van analoge naar digitale routing. Overal kwamen grote schermen — tot 10 × 2 meter. Wat daar op moest komen, en hoe dat er goed uit zou zien, was nog volledig open.',
    approach: 'Als schakel tussen opdrachtgever en technisch leverancier werd de contentstrategie voor alle schermen ontwikkeld en het totale design naar een hoog niveau getild. Van concept tot uitrol, voor meerdere WTC-locaties.',
    result: 'Een coherent systeem dat als vanzelfsprekend onderdeel van de huisstijl werkt.',
  },
  {
    number: '02',
    title: 'VA Magazine',
    subtitle: 'Vrije Academie',
    situation: 'Het magazine van de Vrije Academie had een redesign nodig — niet alleen visueel, maar ook qua werkproces. Elke editie kostte te veel tijd en te veel handwerk.',
    approach: 'Het nieuwe magazine werd ontworpen én voorzien van een geautomatiseerd productiesysteem in InDesign, inclusief scripts die terugkerende opmaaktaken overnemen. Elke volgende editie profiteert daar direct van.',
    result: 'Een sterk vormgegeven magazine met een schaalbaar productieproces eronder.',
  },
  {
    number: '03',
    title: 'Huisstijluitrol onder druk',
    subtitle: 'Crisisinterventie',
    situation: 'Een collega viel uit op een cruciaal moment in de uitrol van een nieuwe huisstijl. Het risico was reëel dat het hele traject zou stagneren.',
    approach: 'Alle losse onderdelen werden samengebracht en de uitrol werd alsnog op tijd en volledig afgerond.',
    result: 'De lancering vond plaats zoals gepland.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero — typewriter heading ────────────────────── */}
      <section className="min-h-[88vh] flex items-center bg-white">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <h1
            className="font-black text-[#111] leading-[1.0] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
          >
            <TypewriterText
              text="Vastgelopen op het gebied van design of strategie?"
              startDelay={0.3}
              speed={22}
            />
          </h1>
          <HeroText delay={1.6}>
            <p className="text-xl text-[#555] max-w-xl leading-relaxed mb-4">
              Bij rebranding, fusies en reorganisaties is creatieve aansturing
              vaak het eerste dat ontbreekt — en het laatste waar iemand aan
              denkt. Daar kom ik in beeld.
            </p>
          </HeroText>
          <HeroText delay={1.8}>
            <p className="text-sm text-[#999] mb-10">
              Solo. Zonder bureau. Zonder overhead.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block border border-[#111] text-[#111] text-sm px-6 py-3 hover:bg-[#111] hover:text-white transition-colors"
              >
                Neem contact op
              </a>
              <a
                href="#wat-ik-doe"
                className="inline-block text-[#555] text-sm px-6 py-3 hover:text-[#111] transition-colors"
              >
                Wat ik doe →
              </a>
            </div>
          </HeroText>
        </div>
      </section>

      {/* ── Wat ik doe — stagger omhoog ─────────────────── */}
      <section id="wat-ik-doe" className="border-t border-[#e5e5e5] scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="pt-24 pb-14">
            <p className="text-xs tracking-widest text-[#999] uppercase mb-6">Diensten</p>
            <h2
              className="font-black text-[#111] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Wat ik doe
            </h2>
            <p className="text-lg text-[#555] max-w-xl leading-relaxed">
              Geen vaste producten, geen standaard trajecten. De situatie
              bepaalt de aanpak.
            </p>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#e5e5e5]">
            {services.map((s) => (
              <StaggerItem
                key={s.number}
                className="border-b border-r border-[#e5e5e5] p-10 md:p-12"
              >
                <span
                  className="block font-black text-[#C4714A] leading-none mb-8"
                  style={{ fontSize: 'clamp(3.5rem, 5vw, 5rem)' }}
                >
                  {s.number}
                </span>
                <h3 className="font-semibold text-[#111] text-[1.1rem] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">{s.body}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Hoe ik werk — drie richtingen ───────────────── */}
      <section id="hoe-ik-werk" className="border-t border-[#e5e5e5] scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="pt-24 pb-14">
            <h2
              className="font-black text-[#111] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Hoe ik werk
            </h2>
            <p className="text-lg text-[#555] max-w-xl leading-relaxed">
              Geen standaard trajecten. De situatie bepaalt de aanpak — altijd.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#e5e5e5]">
            {principles.map((p, i) => (
              <SlideIn
                key={p.number}
                from={p.from}
                delay={i * 0.1}
                className="border-b border-r border-[#e5e5e5] p-8 md:p-10 flex flex-col"
              >
                <span className="text-xs font-mono text-[#C4714A] mb-10 block">
                  {p.number}
                </span>
                <h3 className="font-semibold text-[#111] text-[1.05rem] mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed mt-auto">
                  {p.body}
                </p>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases — slide vanaf links ─────────────────────── */}
      <section id="cases" className="border-t border-[#e5e5e5] scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="pt-24 pb-14">
            <p className="text-xs tracking-widest text-[#999] uppercase mb-6">Werk</p>
            <h2
              className="font-black text-[#111] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Cases
            </h2>
            <p className="text-lg text-[#555] max-w-xl leading-relaxed">
              Een selectie van trajecten. Elk anders van aard, allemaal
              begonnen met een situatie die om een heldere aanpak vroeg.
            </p>
          </FadeUp>

          <div className="divide-y divide-[#e5e5e5]">
            {cases.map((c) => (
              <SlideIn
                key={c.number}
                from="left"
                className="py-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10"
              >
                <div>
                  <span
                    className="block font-black text-[#C4714A] leading-none mb-4"
                    style={{ fontSize: 'clamp(4.5rem, 8vw, 7rem)' }}
                  >
                    {c.number}
                  </span>
                  <h3 className="font-semibold text-[#111] text-[1.2rem] leading-tight mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#999] tracking-wide">{c.subtitle}</p>
                </div>
                <div className="divide-y divide-[#e5e5e5]">
                  {[
                    { label: 'Situatie', body: c.situation },
                    { label: 'Aanpak', body: c.approach },
                    { label: 'Resultaat', body: c.result },
                  ].map((row) => (
                    <div key={row.label} className="py-5 grid grid-cols-[88px_1fr] gap-4">
                      <span className="text-xs tracking-widest text-[#C4714A] uppercase pt-0.5">
                        {row.label}
                      </span>
                      <p className="text-sm text-[#555] leading-relaxed">{row.body}</p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Over — counter voor jaren ─────────────────────── */}
      <section id="over" className="border-t border-[#e5e5e5] scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeUp className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 items-start">
            <div>
              <h2
                className="font-black text-[#111] leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Wouter Vellekoop
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[#555] max-w-[480px]">
                <p>
                  Twintig jaar in het creatieve vak — van grafisch ontwerp en
                  DTP tot merkstrategie en digitale omgevingen. Gevestigd in
                  Den Haag, werkzaam voor opdrachtgevers door heel Nederland.
                </p>
                <p>
                  De werkwijze is altijd solo. Geen bureau, geen overhead —
                  wat betekent dat de samenwerking direct is, en de
                  betrokkenheid volledig.
                </p>
                <p>
                  Naast het strategische werk: concertfotografie en
                  festivaldocumentatie. Te zien op{' '}
                  <Link
                    href="https://wouter.photo"
                    className="text-[#C4714A] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    wouter.photo
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#e5e5e5] pt-10">
                <div>
                  <p className="text-xs tracking-widest text-[#999] uppercase mb-2">Gevestigd</p>
                  <p className="font-semibold text-[#111]">Den Haag</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-[#999] uppercase mb-2">Ervaring</p>
                  <Counter to={20} suffix=" jaar" className="font-semibold text-[#111]" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-[#999] uppercase mb-2">Werkwijze</p>
                  <p className="font-semibold text-[#111]">Solo</p>
                </div>
              </div>
            </div>

            <div className="w-full aspect-[3/4] bg-[#f0f0ee] border border-[#e5e5e5] flex items-center justify-center">
              <p className="text-sm text-[#999]">Portretfoto volgt</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="border-t border-[#e5e5e5] scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="pt-24 pb-14">
            <p className="text-xs tracking-widest text-[#999] uppercase mb-6">Contact</p>
            <h2
              className="font-black text-[#111] leading-[1.0]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Vastgelopen?
              <br />
              Laten we praten.
            </h2>
            <p className="mt-6 text-lg text-[#555] max-w-xl leading-relaxed">
              Een eerste gesprek is altijd vrijblijvend. Vertel kort wat er
              speelt, dan wordt er gekeken of en hoe er geholpen kan worden.
            </p>
          </FadeUp>

          <FadeUp
            delay={0.1}
            className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-16 items-start pb-28"
          >
            <ContactForm />
            <div className="space-y-8 md:pt-1">
              <div>
                <p className="text-xs tracking-widest text-[#999] uppercase mb-3">E-mail</p>
                <a
                  href="mailto:wouter@wouter.studio"
                  className="text-[#111] font-medium hover:text-[#C4714A] transition-colors"
                >
                  wouter@wouter.studio
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-[#999] uppercase mb-3">Telefoon</p>
                <p className="text-[#999]">Volgt</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-[#999] uppercase mb-3">Gevestigd in</p>
                <p className="text-[#111] font-medium">Den Haag</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
