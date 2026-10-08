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

export function RotatingTypewriter({
  prefix,
  words,
  suffix = '.',
  speed = 40,
  deleteSpeed = 28,
  hold = 2200,
  startDelay = 0.3,
}: {
  prefix: string
  words: string[]
  suffix?: string
  speed?: number
  deleteSpeed?: number
  hold?: number
  startDelay?: number
}) {
  const [shown, setShown] = useState('')
  const [suffixShown, setSuffixShown] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(prefix + words[0])
      setSuffixShown(true)
      return
    }
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms)
      })

    const run = async () => {
      await wait(startDelay * 1000)
      for (let i = 1; i <= prefix.length + words[0].length; i++) {
        if (cancelled) return
        setShown((prefix + words[0]).slice(0, i))
        await wait(speed)
      }
      setSuffixShown(true)
      let w = 0
      while (!cancelled) {
        await wait(hold)
        const word = words[w]
        for (let i = word.length - 1; i >= 0; i--) {
          if (cancelled) return
          setShown(prefix + word.slice(0, i))
          await wait(deleteSpeed)
        }
        w = (w + 1) % words.length
        const next = words[w]
        await wait(250)
        for (let i = 1; i <= next.length; i++) {
          if (cancelled) return
          setShown(prefix + next.slice(0, i))
          await wait(speed)
        }
      }
    }
    run()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [prefix, words, speed, deleteSpeed, hold, startDelay])

  return (
    <>
      <span className="sr-only">{prefix + words[0] + suffix}</span>
      <span aria-hidden="true">
        {shown}
        <span className="typewriter-cursor">|</span>
        {suffixShown && suffix}
      </span>
    </>
  )
}
