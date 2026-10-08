'use client'
import { useEffect, useRef } from 'react'

// Een ontwerpraster achter de hero. Het raster ligt op de breedte van het tekstblok
// en op de boven- en onderkant van de kop, tekent zich in bij het laden en springt
// per woord naar een andere indeling. Alleen dunne zwarte lijnen.

type Lijn = { x1: number; y1: number; x2: number; y2: number; a: number }
type Maat = { W: number; H: number; x0: number; x1: number; kopTop: number; kopOnder: number; tekstOnder: number; mobiel: boolean }

const N = 34 // vast aantal lijnen, zodat elke indeling vloeiend in de volgende overloopt
const ZACHT = 0.08
const STERK = 0.2

const verticaal = (x: number, m: Maat, a = ZACHT): Lijn => ({ x1: x, y1: 0, x2: x, y2: m.H, a })
const horizontaal = (y: number, m: Maat, a = ZACHT): Lijn => ({ x1: 0, y1: y, x2: m.W, y2: y, a })

// De kop "klikt vast": lijnen langs boven- en onderkant van de kop en de linkerkant van het tekstblok
const ankers = (m: Maat): Lijn[] => [
  horizontaal(m.kopTop, m, STERK),
  horizontaal(m.kopOnder, m, STERK),
  verticaal(m.x0, m, STERK),
]

const indelingen: Record<string, (m: Maat) => Lijn[]> = {
  // Twaalf gelijke kolommen
  team: (m) => {
    const k = m.mobiel ? 6 : 12
    const w = (m.x1 - m.x0) / k
    return [...ankers(m), ...Array.from({ length: k }, (_, i) => verticaal(m.x0 + (i + 1) * w, m)), horizontaal(m.tekstOnder, m)]
  },
  // Constructielijnen: gulden snede en diagonalen, zoals bij het tekenen van een beeldmerk
  merk: (m) => {
    const g = 0.382
    const bx0 = m.mobiel ? m.x0 : m.x0 + (m.x1 - m.x0) * 0.52
    const bw = m.x1 - bx0
    const by0 = m.mobiel ? m.tekstOnder + 20 : m.kopTop
    const by1 = m.mobiel ? m.H - 20 : m.tekstOnder
    const bh = by1 - by0
    return [
      ...ankers(m),
      verticaal(bx0, m), verticaal(bx0 + bw * g, m), verticaal(bx0 + bw * (1 - g), m), verticaal(m.x1, m),
      horizontaal(by0 + bh * g, m), horizontaal(by0 + bh * (1 - g), m), horizontaal(by1, m),
      { x1: bx0, y1: by0, x2: m.x1, y2: by1, a: ZACHT * 1.4 },
      { x1: m.x1, y1: by0, x2: bx0, y2: by1, a: ZACHT * 1.4 },
      { x1: bx0 + bw / 2, y1: by0, x2: bx0 + bw / 2, y2: by1, a: ZACHT * 1.4 },
    ]
  },
  // Twee rasters die half over elkaar liggen
  fusie: (m) => {
    const k = m.mobiel ? 4 : 7
    const w = (m.x1 - m.x0) / (k + 2)
    const a = Array.from({ length: k + 1 }, (_, i) => verticaal(m.x0 + i * w, m))
    const b = Array.from({ length: k + 1 }, (_, i) => verticaal(m.x0 + w * 2.5 + i * w, m))
    return [...ankers(m), ...a, ...b]
  },
  // Het raster kantelt
  rebranding: (m) => {
    const hoek = (14 * Math.PI) / 180
    const dx = Math.tan(hoek) * m.H
    const k = m.mobiel ? 8 : 16
    const stap = (m.W + dx) / k
    return [
      ...ankers(m),
      ...Array.from({ length: k }, (_, i) => {
        const x = -dx + i * stap
        return { x1: x, y1: m.H, x2: x + dx, y2: 0, a: ZACHT }
      }),
    ]
  },
  // Modulair raster: kolommen en rijen
  organisatie: (m) => {
    const k = m.mobiel ? 4 : 8
    const r = m.mobiel ? 8 : 6
    const w = (m.x1 - m.x0) / k
    const h = m.H / r
    return [
      ...ankers(m),
      ...Array.from({ length: k }, (_, i) => verticaal(m.x0 + (i + 1) * w, m)),
      ...Array.from({ length: r - 1 }, (_, i) => horizontaal((i + 1) * h, m)),
    ]
  },
}

// Aanvullen tot N lijnen; ongebruikte lijnen zijn onzichtbaar en liggen op een bestaande lijn
const vul = (lijnen: Lijn[]): Lijn[] => {
  const uit = lijnen.slice(0, N)
  while (uit.length < N) {
    const bron = uit[uit.length % Math.max(1, lijnen.length)] ?? { x1: 0, y1: 0, x2: 0, y2: 0, a: 0 }
    uit.push({ ...bron, a: 0 })
  }
  return uit
}

export default function HeroRaster() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const hero = canvas.parentElement as HTMLElement
    const stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dpr = 1
    let m: Maat = { W: 0, H: 0, x0: 0, x1: 0, kopTop: 0, kopOnder: 0, tekstOnder: 0, mobiel: false }
    let woord = 'team'

    const meet = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const hr = hero.getBoundingClientRect()
      const kop = hero.querySelector('h1')
      const blok = kop?.closest('div.relative') as HTMLElement | null
      const tekst = blok?.querySelector('p')
      const br = blok?.getBoundingClientRect()
      const kr = kop?.getBoundingClientRect()
      const tr = tekst?.getBoundingClientRect()
      const pad = blok ? parseFloat(getComputedStyle(blok).paddingLeft) : 24
      m = {
        W: hr.width,
        H: hr.height,
        x0: br ? br.left - hr.left + pad : 24,
        x1: br ? br.right - hr.left - pad : hr.width - 24,
        kopTop: kr ? kr.top - hr.top : hr.height * 0.3,
        kopOnder: kr ? kr.bottom - hr.top : hr.height * 0.5,
        tekstOnder: tr ? tr.bottom - hr.top : hr.height * 0.6,
        mobiel: hr.width < 768,
      }
      canvas.width = Math.round(m.W * dpr)
      canvas.height = Math.round(m.H * dpr)
    }
    meet()

    let huidig = vul(indelingen.team(m))
    let doel = huidig.map((l) => ({ ...l }))
    const start = performance.now()
    // Intekenen: elke lijn groeit vanuit zijn begin, kort na elkaar
    const groei = huidig.map((_, i) => ({ vanaf: start + 200 + i * 45 }))

    const zet = (w: string) => {
      const f = indelingen[w]
      if (!f) return
      woord = w
      doel = vul(f(m))
    }
    const onWoord = (e: Event) => zet((e as CustomEvent<string>).detail)
    const onResize = () => {
      meet()
      zet(woord)
      huidig = doel.map((l) => ({ ...l }))
    }

    const snijteken = (x: number, y: number, sx: number, sy: number) => {
      const l = 14
      ctx.beginPath()
      ctx.moveTo(x + sx * 6, y)
      ctx.lineTo(x + sx * (6 + l), y)
      ctx.moveTo(x, y + sy * 6)
      ctx.lineTo(x, y + sy * (6 + l))
      ctx.stroke()
    }

    let laatst = performance.now()
    let raf = 0
    const teken = (nu: number) => {
      const dt = Math.min(0.05, (nu - laatst) / 1000)
      laatst = nu
      // Vloeiend naar de nieuwe indeling, onafhankelijk van de schermverversing
      const f = stil ? 1 : 1 - Math.exp(-dt * 5)
      for (let i = 0; i < N; i++) {
        const a = huidig[i], b = doel[i]
        a.x1 += (b.x1 - a.x1) * f; a.y1 += (b.y1 - a.y1) * f
        a.x2 += (b.x2 - a.x2) * f; a.y2 += (b.y2 - a.y2) * f
        a.a += (b.a - a.a) * f
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, m.W, m.H)
      ctx.lineWidth = 1
      for (let i = 0; i < N; i++) {
        const l = huidig[i]
        if (l.a < 0.004) continue
        const p = stil ? 1 : Math.min(1, Math.max(0, (nu - groei[i].vanaf) / 900))
        const e = 1 - Math.pow(1 - p, 3)
        if (e <= 0) continue
        ctx.strokeStyle = `rgba(17,17,17,${l.a})`
        ctx.beginPath()
        // Halve pixel voor scherpe 1px-lijnen
        const ox = l.x1 === l.x2 ? 0.5 : 0, oy = l.y1 === l.y2 ? 0.5 : 0
        ctx.moveTo(Math.round(l.x1) + ox, Math.round(l.y1) + oy)
        ctx.lineTo(Math.round(l.x1 + (l.x2 - l.x1) * e) + ox, Math.round(l.y1 + (l.y2 - l.y1) * e) + oy)
        ctx.stroke()
      }

      // Snijtekens in de hoeken van het tekstblok
      const sp = stil ? 1 : Math.min(1, Math.max(0, (nu - start - 1200) / 600))
      if (sp > 0) {
        ctx.strokeStyle = `rgba(17,17,17,${0.45 * sp})`
        const top = 24, onder = m.H - 24
        snijteken(m.x0, top, -1, -1)
        snijteken(m.x1, top, 1, -1)
        snijteken(m.x0, onder, -1, 1)
        snijteken(m.x1, onder, 1, 1)
      }
      raf = requestAnimationFrame(teken)
    }
    raf = requestAnimationFrame(teken)

    window.addEventListener('hero-woord', onWoord)
    window.addEventListener('resize', onResize)
    // Na het laden van de lettertypes kan de kop iets verschuiven
    document.fonts?.ready.then(onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('hero-woord', onWoord)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
