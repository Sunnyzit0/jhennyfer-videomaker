import { useEffect, useRef } from 'react'

// Anel que segue o mouse; cresce em links e mostra um rótulo em [data-cursor].
export function Cursor() {
  const ref = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const element = ref.current
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || !finePointer || reduced) return undefined

    let x = -100
    let y = -100
    let currentX = x
    let currentY = y
    let frame = 0

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      element.classList.add('is-active')
    }
    const onOver = (event) => {
      const target = event.target instanceof Element ? event.target : null
      const labelled = target?.closest('[data-cursor]')
      labelRef.current.textContent = labelled?.dataset.cursor ?? ''
      element.classList.toggle('has-label', Boolean(labelled))
      element.classList.toggle('is-link', !labelled && Boolean(target?.closest('a, button')))
    }
    const onLeave = () => element.classList.remove('is-active')
    const loop = () => {
      currentX += (x - currentX) * 0.2
      currentY += (y - currentY) * 0.2
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span className="cursor-ring"><span className="cursor-label" ref={labelRef} /></span>
    </div>
  )
}
