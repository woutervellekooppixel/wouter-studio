'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const hero = canvas.parentElement!
    let W = 0, H = 0
    let mouseX = 0, mouseY = 0
    let animId: number

    const resize = () => {
      W = canvas.width = hero.offsetWidth
      H = canvas.height = hero.offsetHeight
      mouseX = W * 0.7
      mouseY = H * 0.3
    }
    resize()
    window.addEventListener('resize', resize)

    hero.addEventListener('mousemove', (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    })

    const shapes = [
      // Links
      { type: 'triangle', x: W*0.06, y: H*0.18, size: 130, rot: 0.5,  alpha: 0.045 },
      { type: 'rect',     x: W*0.14, y: H*0.62, w: 90,   h: 120, rot: 0.4,  alpha: 0.04  },
      { type: 'diamond',  x: W*0.22, y: H*0.88, size: 70,  rot: 1.2,  alpha: 0.03  },
      { type: 'rect',     x: W*0.30, y: H*0.38, w: 160,  h: 110, rot: -0.3, alpha: 0.05  },
      { type: 'triangle', x: W*0.10, y: H*0.45, size: 55,  rot: 2.1,  alpha: 0.03  },
      { type: 'diamond',  x: W*0.38, y: H*0.08, size: 90,  rot: 0.7,  alpha: 0.04  },
      // Rechts
      { type: 'triangle', x: W*0.75, y: H*0.10, size: 220, rot: 0.2,  alpha: 0.06  },
      { type: 'rect',     x: W*0.88, y: H*0.55, w: 160,  h: 220, rot: -0.15, alpha: 0.05  },
      { type: 'diamond',  x: W*0.60, y: H*0.78, size: 180, rot: 0.1,  alpha: 0.045 },
      { type: 'triangle', x: W*0.96, y: H*0.28, size: 95,  rot: 1.9,  alpha: 0.04  },
      { type: 'rect',     x: W*0.52, y: H*0.05, w: 85,   h: 115, rot: 0.6,  alpha: 0.035 },
      { type: 'diamond',  x: W*0.72, y: H*0.68, size: 135, rot: 0.8,  alpha: 0.03  },
    ] as any[]

    function drawShape(s: any) {
      ctx.save()
      ctx.globalAlpha = s.alpha
      ctx.fillStyle = '#111'
      ctx.translate(s.x, s.y)
      ctx.rotate(s.rot)
      if (s.type === 'triangle') {
        ctx.beginPath()
        ctx.moveTo(0, -s.size * 0.67)
        ctx.lineTo(s.size * 0.58, s.size * 0.33)
        ctx.lineTo(-s.size * 0.58, s.size * 0.33)
        ctx.closePath()
        ctx.fill()
      } else if (s.type === 'rect') {
        ctx.fillRect(-s.w / 2, -s.h / 2, s.w, s.h)
      } else {
        ctx.beginPath()
        ctx.moveTo(0, -s.size)
        ctx.lineTo(s.size * 0.6, 0)
        ctx.lineTo(0, s.size)
        ctx.lineTo(-s.size * 0.6, 0)
        ctx.closePath()
        ctx.fill()
      }
      ctx.restore()
    }

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)
      shapes.forEach((s, i) => {
        s.x += Math.sin(t * 0.006 + i * 2) * 0.25
        s.y += Math.cos(t * 0.005 + i * 1.5) * 0.2

        const angleToMouse = Math.atan2(mouseY - s.y, mouseX - s.x)
        const targetRot = angleToMouse - Math.PI / 2
        let diff = targetRot - s.rot
        while (diff > Math.PI) diff -= Math.PI * 2
        while (diff < -Math.PI) diff += Math.PI * 2
        s.rot += diff * 0.07

        drawShape(s)
      })
      t++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
