import { useEffect, useRef } from 'react'

const FPS = 24
const pad = (value) => String(value).padStart(2, '0')

// Timecode de câmera (HH:MM:SS:FF) contando desde a abertura da página.
export function Timecode({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const start = performance.now()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tick = () => {
      const totalFrames = Math.floor(((performance.now() - start) / 1000) * FPS)
      const frames = totalFrames % FPS
      const seconds = Math.floor(totalFrames / FPS)
      if (ref.current) {
        ref.current.textContent = `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}:${pad(frames)}`
      }
    }
    tick()
    const interval = setInterval(tick, reduced ? 1000 : 1000 / FPS)
    return () => clearInterval(interval)
  }, [])

  return <span className={`timecode ${className}`} ref={ref} aria-hidden="true">00:00:00:00</span>
}
