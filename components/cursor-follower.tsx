'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [visible, setVisible] = useState(false)
  const x1 = useSpring(-100, { damping: 25, stiffness: 200 })
  const y1 = useSpring(-100, { damping: 25, stiffness: 200 })
  const x2 = useSpring(-100, { damping: 35, stiffness: 120 })
  const y2 = useSpring(-100, { damping: 35, stiffness: 120 })

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true)
      x1.set(e.clientX - 6)
      y1.set(e.clientY - 6)
      x2.set(e.clientX - 20)
      y2.set(e.clientY - 20)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x1, y1, x2, y2, visible])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null

  return (
    <>
      <motion.div
        style={{
          x: x1,
          y: y1,
          mixBlendMode: 'difference',
          backgroundColor: 'white',
          opacity: visible ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
      />
      <motion.div
        style={{ x: x2, y: y2, opacity: visible ? 0.4 : 0 }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#111] pointer-events-none z-[9999]"
      />
    </>
  )
}
