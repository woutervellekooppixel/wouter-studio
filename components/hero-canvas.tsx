'use client'
import { useEffect, useRef } from 'react'

type Soort = 'triangle' | 'rect' | 'diamond'
type Vorm = {
  type: Soort
  x: number; y: number; rot: number; scale: number
  tx: number; ty: number; trot: number | null; tscale: number
  size: number; w: number; h: number; alpha: number; lijn?: boolean
  z: number
}
type Doel = { x: number; y: number; scale?: number }

// Composities per woord, als fracties van de hero (x, y). Tekst staat links,
// dus het zwaartepunt ligt rechts; trot null = vorm draait mee met de muis.
const composities: Record<string, { punten: Doel[]; recht: boolean; gelijk?: number }> = {
  // Een losse groep die samen optrekt
  team: {
    recht: false,
    punten: [
      { x: 0.66, y: 0.30 }, { x: 0.74, y: 0.24 }, { x: 0.82, y: 0.33 }, { x: 0.70, y: 0.44 },
      { x: 0.79, y: 0.47 }, { x: 0.88, y: 0.42 }, { x: 0.64, y: 0.58 }, { x: 0.73, y: 0.62 },
      { x: 0.83, y: 0.60 }, { x: 0.91, y: 0.55 }, { x: 0.77, y: 0.74 }, { x: 0.68, y: 0.76 },
    ],
  },
  // Alles schuift in elkaar tot één beeldmerk
  merk: {
    recht: true,
    punten: [
      { x: 0.76, y: 0.42, scale: 1.6 }, { x: 0.79, y: 0.47, scale: 1.3 }, { x: 0.73, y: 0.50, scale: 1.2 },
      { x: 0.77, y: 0.53, scale: 1 }, { x: 0.80, y: 0.40, scale: 0.9 }, { x: 0.72, y: 0.43, scale: 0.9 },
      { x: 0.75, y: 0.47, scale: 1.4 }, { x: 0.78, y: 0.50, scale: 0.8 }, { x: 0.74, y: 0.45, scale: 1.1 },
      { x: 0.77, y: 0.44, scale: 0.7 }, { x: 0.76, y: 0.51, scale: 0.9 }, { x: 0.79, y: 0.45, scale: 1 },
    ],
  },
  // Twee groepen die half in elkaar schuiven
  fusie: {
    recht: false,
    punten: [
      { x: 0.62, y: 0.30 }, { x: 0.68, y: 0.26 }, { x: 0.66, y: 0.38 }, { x: 0.73, y: 0.34 },
      { x: 0.70, y: 0.44 }, { x: 0.77, y: 0.42 },
      { x: 0.80, y: 0.50 }, { x: 0.86, y: 0.47 }, { x: 0.83, y: 0.58 }, { x: 0.90, y: 0.55 },
      { x: 0.87, y: 0.66 }, { x: 0.93, y: 0.63 },
    ],
  },
  // Wijd uitgewaaierd; de vormen wisselen ook van soort
  rebranding: {
    recht: false,
    punten: [
      { x: 0.06, y: 0.16 }, { x: 0.52, y: 0.07 }, { x: 0.95, y: 0.12 }, { x: 0.62, y: 0.32, scale: 1.3 },
      { x: 0.86, y: 0.36 }, { x: 0.12, y: 0.86 }, { x: 0.70, y: 0.55, scale: 1.4 }, { x: 0.95, y: 0.62 },
      { x: 0.40, y: 0.92 }, { x: 0.80, y: 0.84, scale: 1.2 }, { x: 0.58, y: 0.75 }, { x: 0.30, y: 0.08 },
    ],
  },
  // Een strak raster: vier kolommen, drie rijen
  organisatie: {
    recht: true,
    gelijk: 64,
    punten: Array.from({ length: 12 }, (_, i) => ({
      x: 0.62 + (i % 4) * 0.095,
      y: 0.30 + Math.floor(i / 4) * 0.2,
      scale: 0.75,
    })),
  },
}

const volgende: Record<Soort, Soort> = { triangle: 'diamond', diamond: 'rect', rect: 'triangle' }

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const hero = canvas.parentElement!
    let W = 0, H = 0
    let mouseX = 0, mouseY = 0
    let animId = 0
    let woord = 'team'

    let mobiel = false
    const resize = () => {
      W = canvas.width = hero.offsetWidth
      H = canvas.height = hero.offsetHeight
      mobiel = W < 768
      mouseX = W * 0.7
      mouseY = H * 0.3
    }
    resize()

    // Desktop: compositie rechts naast de tekst. Mobiel: kleiner, in een strook
    // onder de knoppen (de hero heeft daar extra ruimte voor).
    const plaats = (p: Doel) => {
      if (!mobiel) return { x: p.x * W, y: p.y * H }
      const spreid = woord === 'rebranding'
      const x = spreid ? p.x : 0.1 + ((p.x - 0.58) / 0.38) * 0.8
      const y = H - 210 + Math.min(1, Math.max(0, (p.y - 0.15) / 0.75)) * 170
      return { x: Math.min(0.97, Math.max(0.03, x)) * W, y }
    }

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    }

    // Drie grijstinten, en drie vormen alleen omlijnd
    const tint = [0.035, 0.06, 0.09]
    const basis: Pick<Vorm, 'type' | 'size' | 'w' | 'h' | 'alpha' | 'lijn' | 'z'>[] = [
      { type: 'triangle', size: 130, w: 0, h: 0, alpha: tint[1], z: 1.4 },
      { type: 'rect', size: 0, w: 90, h: 120, alpha: tint[0], z: 0.6 },
      { type: 'diamond', size: 70, w: 0, h: 0, alpha: 0.4, lijn: true, z: 1.0 },
      { type: 'rect', size: 0, w: 160, h: 110, alpha: tint[2], z: 1.0 },
      { type: 'triangle', size: 55, w: 0, h: 0, alpha: tint[0], z: 0.6 },
      { type: 'diamond', size: 90, w: 0, h: 0, alpha: 0.35, lijn: true, z: 1.4 },
      { type: 'triangle', size: 200, w: 0, h: 0, alpha: tint[0], z: 0.6 },
      { type: 'rect', size: 0, w: 140, h: 190, alpha: tint[1], z: 1.4 },
      { type: 'diamond', size: 150, w: 0, h: 0, alpha: tint[1], z: 1.0 },
      { type: 'triangle', size: 95, w: 0, h: 0, alpha: 0.35, lijn: true, z: 1.0 },
      { type: 'rect', size: 0, w: 85, h: 115, alpha: tint[2], z: 0.6 },
      { type: 'diamond', size: 120, w: 0, h: 0, alpha: tint[0], z: 1.4 },
    ]

    const start = composities.team.punten
    const vormen: Vorm[] = basis.map((b, i) => {
      const p = plaats(start[i])
      return { ...b, x: p.x, y: p.y, rot: i * 0.7, scale: 1, tx: p.x, ty: p.y, trot: null, tscale: 1 }
    })

    const zetDoel = (nieuw: string) => {
      const c = composities[nieuw]
      if (!c) return
      if (nieuw === 'rebranding') vormen.forEach((v) => { v.type = volgende[v.type]; v.scale = 0.4 })
      woord = nieuw
      vormen.forEach((v, i) => {
        const p = plaats(c.punten[i])
        v.tx = p.x
        v.ty = p.y
        v.tscale = c.gelijk ? c.gelijk / maat(v) : c.punten[i].scale ?? 1
        v.trot = c.recht ? 0 : null
      })
    }

    function maat(v: Vorm) {
      return v.type === 'rect' ? Math.max(v.w || v.size * 0.8, v.h || v.size) : (v.size || Math.max(v.w, v.h)) * 1.3
    }

    const onWoord = (e: Event) => zetDoel((e as CustomEvent<string>).detail)
    const onResize = () => { resize(); zetDoel(woord) }

    let scrollY = 0
    const onScroll = () => { scrollY = window.scrollY }

    function teken(v: Vorm) {
      ctx.save()
      // Diepte: ver = kleiner, lichter, wazig; dichtbij = groter, donkerder, met schaduw
      const z = v.z
      ctx.globalAlpha = v.lijn ? v.alpha * (0.5 + z * 0.4) : v.alpha * (0.45 + z * 0.65)
      if (z < 0.8) ctx.filter = 'blur(3px)'
      else if (z < 1.2) ctx.filter = 'blur(0.6px)'
      if (z > 1.2 && !v.lijn) {
        ctx.shadowColor = 'rgba(0,0,0,0.5)'
        ctx.shadowBlur = mobiel ? 18 : 40
        ctx.shadowOffsetY = mobiel ? 8 : 18
      }
      const px = (mouseX - W / 2) * (z - 1) * 0.06
      const py = (mouseY - H / 2) * (z - 1) * 0.06 - scrollY * (z - 1) * (mobiel ? 0.1 : 0.35)
      ctx.fillStyle = '#111'
      ctx.strokeStyle = '#111'
      ctx.lineWidth = 1 / (v.scale * (0.7 + v.z * 0.3) * (mobiel ? 0.38 : 1))
      ctx.translate(v.x + px, v.y + py)
      ctx.rotate(v.rot)
      const sc = v.scale * (0.7 + z * 0.3) * (mobiel ? 0.38 : 1)
      ctx.scale(sc, sc)
      if (v.type === 'triangle') {
        const s = v.size || Math.max(v.w, v.h)
        ctx.beginPath()
        ctx.moveTo(0, -s * 0.67)
        ctx.lineTo(s * 0.58, s * 0.33)
        ctx.lineTo(-s * 0.58, s * 0.33)
        ctx.closePath()
        if (v.lijn) ctx.stroke(); else ctx.fill()
      } else if (v.type === 'rect') {
        const w = v.w || v.size * 0.8, h = v.h || v.size
        if (v.lijn) ctx.strokeRect(-w / 2, -h / 2, w, h); else ctx.fillRect(-w / 2, -h / 2, w, h)
      } else {
        const s = v.size || Math.max(v.w, v.h) * 0.7
        ctx.beginPath()
        ctx.moveTo(0, -s)
        ctx.lineTo(s * 0.6, 0)
        ctx.lineTo(0, s)
        ctx.lineTo(-s * 0.6, 0)
        ctx.closePath()
        if (v.lijn) ctx.stroke(); else ctx.fill()
      }
      ctx.restore()
    }

    let t = 0
    function frame() {
      ctx.clearRect(0, 0, W, H)
      vormen.forEach((v, i) => {
        // Rustig naar het doel, met een klein beetje zweven
        const zweef = composities[woord].recht ? 0 : 6
        const dx = v.tx + Math.sin(t * 0.012 + i * 2) * zweef
        const dy = v.ty + Math.cos(t * 0.01 + i * 1.5) * zweef
        v.x += (dx - v.x) * 0.045
        v.y += (dy - v.y) * 0.045
        v.scale += (v.tscale - v.scale) * 0.06

        const doelRot = v.trot ?? Math.atan2(mouseY - v.y, mouseX - v.x) - Math.PI / 2
        let diff = doelRot - v.rot
        while (diff > Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        v.rot += diff * 0.07
      })
      volgorde.forEach(teken)
      t++
      animId = requestAnimationFrame(frame)
    }

    const volgorde = [...vormen].sort((a, b) => a.z - b.z)

    const stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (stil) {
      volgorde.forEach(teken)
    } else {
      window.addEventListener('hero-woord', onWoord)
      hero.addEventListener('mousemove', onMove)
      window.addEventListener('scroll', onScroll, { passive: true })
      frame()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hero-woord', onWoord)
      hero.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
