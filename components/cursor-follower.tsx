'use client'

import { useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const x1 = useSpring(0, { damping: 25, stiffness: 200 })
  const y1 = useSpring(0, { damping: 25, stiffness: 200 })
  const x2 = useSpring(0, { damping: 35, stiffness: 120 })
  const y2 = useSpring(0, { damping: 35, stiffness: 120 })

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const onMove = (e: MouseEvent) => {
      x1.set(e.clientX - 6)
      y1.set(e.clientY - 6)
      x2.set(e.clientX - 20)
      y2.set(e.clientY - 20)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x1, y1, x2, y2])

  return (
    <>
      <motion.div
        style={{
          x: x1,
          y: y1,
          mixBlendMode: 'difference',
          backgroundColor: 'white',
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#111] opacity-40 pointer-events-none z-[9999]"
      />
    </>
  )
}
