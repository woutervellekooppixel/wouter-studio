'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode, useState, useEffect } from 'react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ── FadeUp ──────────────────────────────────────────────
export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// ── SlideIn — left / right / bottom ─────────────────────
export function SlideIn({
  children,
  className,
  delay = 0,
  from = 'bottom',
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'left' | 'right' | 'bottom'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const hidden = {
    opacity: 0,
    x: from === 'left' ? -56 : from === 'right' ? 56 : 0,
    y: from === 'bottom' ? 48 : 0,
  }
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : hidden}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerGrid / StaggerItem ────────────────────────────
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const staggerItemVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export function StaggerGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItemVariant}>
      {children}
    </motion.div>
  )
}

// ── HeroText — mount-based ───────────────────────────────
export function HeroText({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// ── TypewriterText ───────────────────────────────────────
export function TypewriterText({
  text,
  className,
  speed = 22,
  startDelay = 0.3,
}: {
  text: string
  className?: string
  speed?: number
  startDelay?: number
}) {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let i = 0
    const start = setTimeout(
      () => {
        const interval = setInterval(() => {
          i++
          setDisplayed(text.slice(0, i))
          if (i >= text.length) {
            clearInterval(interval)
            setTimeout(() => setCursorVisible(false), 800)
          }
        }, speed)
        return () => clearInterval(interval)
      },
      startDelay * 1000,
    )
    return () => clearTimeout(start)
  }, [text, speed, startDelay])

  return (
    <span className={className}>
      {displayed}
      {cursorVisible && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

// ── Counter ──────────────────────────────────────────────
export function Counter({
  to,
  suffix = '',
  className,
}: {
  to: number
  suffix?: string
  className?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
