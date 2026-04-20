'use client'

import { useState, useEffect } from 'react'

export function TypewriterText({
  text,
  className,
  speed = 18,
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
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setTimeout(() => setCursorVisible(false), 800)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay * 1000)
    return () => clearTimeout(start)
  }, [text, speed, startDelay])

  return (
    <span className={className}>
      {displayed}
      {cursorVisible && <span className="typewriter-cursor">|</span>}
    </span>
  )
}
