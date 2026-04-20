'use client'

import { useEffect, useRef } from 'react'

export default function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
