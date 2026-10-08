export const revalidate = 3600

const body = `# Wouter Vellekoop

> Wouter Vellekoop is creatief directeur en ontwerper in Den Haag, werkzaam door heel Nederland, met twintig jaar ervaring. Hij werkt freelance per uur of interim, direct met directie en marketing. Gewerkt voor onder meer Ahoy, Bouwinvest, World Trade Center Rotterdam en The Hague, Olympisch Stadion, Cushman & Wakefield, de Rijksoverheid, Gemeente Den Haag en de Vrije Academie. Hij gebruikt AI dagelijks in zijn productie en helpt teams het verantwoord in te zetten.

## Links

- [wouter.studio](https://wouter.studio): website van Wouter Vellekoop, creatief directeur.
- [LinkedIn](https://www.linkedin.com/in/woutervellekoop/)
`

export async function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
