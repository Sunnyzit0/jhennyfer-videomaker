import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useRef } from 'react'

const pad = (value) => String(value).padStart(2, '0')

export function Lightbox({ image, position, total, dialogRef, closeRef, close, navigate }) {
  const touchStart = useRef(null)

  // Deslizar para o lado troca a foto; toques curtos ou verticais são ignorados.
  const onTouchStart = (event) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }
  const onTouchEnd = (event) => {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) navigate(dx < 0 ? 1 : -1)
  }

  return (
    <div className="lightbox" ref={dialogRef} role="dialog" aria-modal="true" aria-label={`Visualizando ${image.title}`} onClick={close} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <span className="lightbox-counter" aria-live="polite">{pad(position)} / {pad(total)}</span>
      <button className="lightbox-close" ref={closeRef} type="button" onClick={close} aria-label="Fechar imagem"><X size={22} /></button>
      <button className="lightbox-nav lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); navigate(-1) }} aria-label="Imagem anterior"><ArrowLeft size={22} /></button>
      <figure className="lightbox-figure" key={image.title} onClick={(event) => event.stopPropagation()}>
        <img src={image.image} alt={image.title} width={image.width} height={image.height} />
      </figure>
      <button className="lightbox-nav lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); navigate(1) }} aria-label="Próxima imagem"><ArrowRight size={22} /></button>
      <div className="lightbox-caption"><span>{image.category}</span><strong>{image.title}</strong></div>
    </div>
  )
}
