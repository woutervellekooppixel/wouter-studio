'use client'

import { useEffect } from 'react'

type RectShape = {
  type: 'rect'
  x: number; y: number
  w: number; h: number
  rot: number; vr: number
  vx: number; vy: number
  alpha: number
}

type CircleShape = {
  type: 'circle'
  x: number; y: number
  r: number
  vx: number; vy: number
  alpha: number
}

type LineShape = {
  type: 'line'
  x1: number; y1: number
  x2: number; y2: number
  vx1: number; vx2: number
  alpha: number; lw: number
}

type Shape = RectShape | CircleShape | LineShape

export default function HeroCanvas() {
  // Shapes animation
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const canvas = document.getElementById('shapes-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const shapes: Shape[] = [
      {
        type: 'rect',
        x: 0.68, y: -0.08,
        w: 0.36, h: 0.58,
        rot: 0.18, vr: 0.00015,
        vx: 0.00004, vy: 0.00006,
        alpha: 1.0,
      },
      {
        type: 'rect',
        x: 0.82, y: 0.45,
        w: 0.26, h: 0.40,
        rot: -0.22, vr: -0.00010,
        vx: -0.00005, vy: -0.00004,
        alpha: 0.07,
      },
      {
        type: 'circle',
        x: 0.90, y: 0.10,
        r: 0.13,
        vx: -0.00008, vy: 0.00010,
        alpha: 0.09,
      },
      {
        type: 'line',
        x1: 0.50, y1: 0.0,
        x2: 0.68, y2: 1.0,
        vx1: 0.00006, vx2: -0.00004,
        alpha: 0.08, lw: 1.5,
      },
      {
        type: 'line',
        x1: 0.54, y1: 0.0,
        x2: 0.72, y2: 1.0,
        vx1: 0.00003, vx2: -0.00007,
        alpha: 0.05, lw: 2.5,
      },
    ]

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      shapes.forEach(s => {
        ctx.save()
        ctx.globalAlpha = s.alpha

        if (s.type === 'rect') {
          s.rot += s.vr
          s.x += s.vx
          s.y += s.vy
          if (s.x > 1.2 || s.x < 0.35) s.vx *= -1
          if (s.y > 1.1 || s.y < -0.4) s.vy *= -1
          ctx.translate(s.x * W, s.y * H)
          ctx.rotate(s.rot)
          ctx.fillStyle = '#111'
          ctx.fillRect(-s.w * W / 2, -s.h * H / 2, s.w * W, s.h * H)

        } else if (s.type === 'circle') {
          s.x += s.vx
          s.y += s.vy
          if (s.x > 1.15 || s.x < 0.55) s.vx *= -1
          if (s.y > 0.5 || s.y < -0.1) s.vy *= -1
          ctx.beginPath()
          ctx.arc(s.x * W, s.y * H, s.r * Math.min(W, H), 0, Math.PI * 2)
          ctx.fillStyle = '#111'
          ctx.fill()

        } else if (s.type === 'line') {
          s.x1 += s.vx1
          s.x2 += s.vx2
          if (s.x1 > 0.72 || s.x1 < 0.42) s.vx1 *= -1
          if (s.x2 > 0.82 || s.x2 < 0.55) s.vx2 *= -1
          ctx.beginPath()
          ctx.moveTo(s.x1 * W, 0)
          ctx.lineTo(s.x2 * W, H)
          ctx.strokeStyle = '#111'
          ctx.lineWidth = s.lw
          ctx.stroke()
        }

        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Grain animation
  useEffect(() => {
    const canvas = document.getElementById('grain-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let timer: ReturnType<typeof setTimeout>

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const renderGrain = () => {
      const W = canvas.width
      const H = canvas.height
      const imageData = ctx.createImageData(W, H)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = Math.random() * 14
      }

      ctx.putImageData(imageData, 0, 0)
      timer = setTimeout(renderGrain, 90)
    }

    renderGrain()
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas id="shapes-canvas" className="absolute inset-0 w-full h-full" />
      <canvas id="grain-canvas" className="absolute inset-0 w-full h-full pointer-events-none" />
    </>
  )
}
