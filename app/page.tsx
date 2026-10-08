import Image from 'next/image'

const namen = [
  'Ahoy',
  'Bouwinvest',
  'World Trade Center Rotterdam',
  'World Trade Center The Hague',
  'Olympisch Stadion',
  'Cushman & Wakefield',
  'Rijksoverheid',
  'Gemeente Den Haag',
  'Greenpeace',
  'Vrije Academie',
  '538',
  'TROS',
  'Haags Sportgala',
  'Luminiscence',
  'Dutch Classics',
  'LUSTR',
  'ZZP All Day',
]

const werk = [
  { naam: 'World Trade Center Rotterdam & The Hague', jaren: '2020 tot nu', wat: 'Het merk, ruim 800 uitingen' },
  { naam: 'Vrije Academie', jaren: '2021 tot nu', wat: 'Huisstijl en het magazine, twaalf edities' },
  { naam: 'Bouwinvest', jaren: '2023 tot nu', wat: 'Onderzoek, gidsen, gebouwmerken' },
  { naam: 'Olympisch Stadion', jaren: '2024 tot nu', wat: 'Logo en uitingen in het stadion' },
  { naam: 'Cushman & Wakefield', jaren: '2026', wat: 'Brandguide FIRST Rotterdam' },
  { naam: 'Rijksoverheid', jaren: '2026', wat: 'Twee eventstijlen binnen de rijkshuisstijl' },
  { naam: 'Ahoy', jaren: '2025', wat: 'Beleidsdocumenten, waaronder het AI-beleid' },
  { naam: 'Haags Sportgala', jaren: '2022 tot 2024', wat: 'Vormgeving en motion van de show' },
]

const situaties = [
  {
    titel: 'De creatieve leiding valt weg.',
    tekst: 'Je creatief directeur vertrekt, of de rol heeft nooit bestaan. Ik neem het over, houd het werk op niveau en draag het netjes over.',
  },
  {
    titel: 'Een merk moet veranderen.',
    tekst: 'Een fusie, een nieuwe koers of een merk dat niet meer past. Ik trek het traject van eerste richting tot de laatste uiting.',
  },
  {
    titel: 'Het werk kan beter.',
    tekst: 'Ik schrijf de briefing, beoordeel wat er binnenkomt en zorg dat bureau en organisatie dezelfde taal spreken.',
  },
  {
    titel: 'AI in het creatieve werk.',
    tekst: 'Ik gebruik AI elke dag in mijn eigen productie. Ik help teams het in te zetten waar het tijd wint, en het weg te laten waar het kwaliteit kost.',
  },
]

const samenwerken = [
  {
    titel: 'Per uur of interim.',
    tekst: 'Een paar uur voor een beoordeling of een sessie met je team, of een aantal dagen per week voor langere tijd. We spreken af wat past.',
  },
  { titel: 'Snel aan tafel.', tekst: 'Een kennismaking, een korte intake, en we kunnen beginnen.' },
  { titel: 'Direct.', tekst: 'Geen accountmanager en geen junior die het overneemt. Je werkt met mij.' },
  { titel: 'Netjes afgerond.', tekst: 'Als ik vertrek, is alles vastgelegd en overgedragen. Het team kan zonder mij verder.' },
]

const woorden = [
  {
    quote:
      'Na veel vormgevers die ons concept niet konden visualiseren, bracht Wouter een frisse wind. Zijn kracht zit niet alleen in de designs, maar in hoe hij zich verdiept in de klant.',
    wie: 'Denise Nieuwdorp',
    rol: 'Marketing- en communicatieadviseur',
  },
  {
    quote:
      'Creatief, gedetailleerd, gestructureerd en zeer veelzijdig. Of het nu ging om fotografie, websites, verpakkingen of productontwerp, het resultaat was altijd uitstekend.',
    wie: 'Nathalie van Wijkvliet',
    rol: 'Communicatieadviseur',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Wouter Vellekoop</h1>
          <p className="stelling">
            Creatief directeur, tijdelijk in jouw <span className="accent">team</span>.
          </p>
          <p className="intro">
            Twintig jaar merken bouwen en bewaken, voor onder meer <strong>Ahoy</strong>,{' '}
            <strong>Bouwinvest</strong>, <strong>World Trade Center</strong> en de{' '}
            <strong>Rijksoverheid</strong>. Freelance per uur of interim, in overleg.
          </p>
          <div className="acties">
            <a className="knop" href="#contact">
              Werk met mij →
            </a>
            <a className="link-mono" href="#werk">
              Bekijk het werk
            </a>
          </div>
        </div>
      </section>

      <section className="sectie" id="namen">
        <div className="wrap">
          <p className="eyebrow">Gewerkt voor</p>
          <h2 className="kop">Namen.</h2>
          <ul className="namen">
            {namen.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sectie" id="werk">
        <div className="wrap">
          <p className="eyebrow">Werk</p>
          <h2 className="kop">
            Merken die ik <em>jarenlang</em> bewaak.
          </h2>
          <ul className="werk">
            {werk.map((w) => (
              <li key={w.naam}>
                <span className="naam">{w.naam}</span>
                <span className="jaren">{w.jaren}</span>
                <span className="wat">{w.wat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sectie" id="aanpak">
        <div className="wrap">
          <p className="eyebrow">Aanpak</p>
          <h2 className="kop">Wanneer je mij belt.</h2>
          <div className="punten">
            {situaties.map((s) => (
              <div className="punt" key={s.titel}>
                <h3>{s.titel}</h3>
                <p>{s.tekst}</p>
              </div>
            ))}
          </div>

          <h3 className="subkop">
            Hoe we <em>samenwerken</em>.
          </h3>
          <div className="punten">
            {samenwerken.map((s) => (
              <div className="punt" key={s.titel}>
                <h3>{s.titel}</h3>
                <p>{s.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectie" id="woorden">
        <div className="wrap">
          <p className="eyebrow">Wat anderen zeggen</p>
          <h2 className="kop">In hun woorden.</h2>
          <div className="woorden">
            {woorden.map((w) => (
              <figure className="woord" key={w.wie}>
                <blockquote>“{w.quote}”</blockquote>
                <figcaption>
                  <span className="wie">{w.wie}</span>
                  <span className="rol">{w.rol}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sectie" id="over">
        <div className="wrap">
          <p className="eyebrow">Over</p>
          <figure className="portret">
            <Image
              src="/wouter-portret.jpg"
              alt="Wouter Vellekoop"
              width={1279}
              height={1600}
              sizes="(max-width: 720px) 100vw, 460px"
            />
          </figure>
          <h2 className="kop">Twintig jaar merken bouwen en bewaken.</h2>
          <div className="tekst">
            <p>
              Ik ben Wouter Vellekoop. Ik ontwerp al twintig jaar merken, en blijf ze vaak jarenlang
              bewaken: zes jaar voor World Trade Center, twaalf edities van het magazine van de Vrije
              Academie.
            </p>
            <p>Ik werk direct met directie en marketing, zonder bureau ertussen.</p>
            <p>
              Ik ben ook fotograaf, voor artiesten en grote podia. Daardoor maak ik vaak zelf het beeld
              bij een merk.
            </p>
            <p>En ik werk elke dag met AI. Het neemt het productiewerk over. De keuzes maak ik zelf.</p>
          </div>
        </div>
      </section>

      <section className="sectie" id="contact">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h2 className="kop">
            Bel of <em>mail</em>.
          </h2>
          <div className="contact-regels">
            <a href="tel:+31616290418">06 16 29 04 18</a>
            <a href="mailto:mail@wouter.studio">mail@wouter.studio</a>
          </div>
          <a className="link-mono" href="https://www.linkedin.com/in/woutervellekoop/" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <p className="plaats">Den Haag. Werkzaam door heel Nederland.</p>
        </div>
      </section>
    </>
  )
}
