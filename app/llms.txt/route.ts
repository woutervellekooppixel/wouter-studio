export const revalidate = 3600

const body = `# Wouter Vellekoop

> Wouter Vellekoop is creatief strateeg en interim creatief directeur, gebaseerd in Den Haag en werkzaam door heel Nederland, met twintig jaar ervaring in het vak. Via wouter.studio biedt hij creatieve aansturing bij rebranding, fusies en reorganisaties — solo, zonder bureau en zonder overhead. Diensten: interim creatief directeur, rebranding & huisstijl, bureaubegeleiding en advies over AI & design.

## Links

- [wouter.studio](https://wouter.studio): Website van Wouter Vellekoop — creatief strateeg & interim creatief directeur.
`

export async function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
