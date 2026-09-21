import { ArrowLeft, ArrowRight, X } from 'lucide-react'

export function Lightbox({ image, dialogRef, closeRef, close, navigate }) {
  return (
    <div className="lightbox" ref={dialogRef} role="dialog" aria-modal="true" aria-label={`Visualizando ${image.title}`} onClick={close}>
      <button className="lightbox-close" ref={closeRef} type="button" onClick={close} aria-label="Fechar imagem"><X size={22} /></button>
      <button className="lightbox-nav lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); navigate(-1) }} aria-label="Imagem anterior"><ArrowLeft size={22} /></button>
      <img src={image.image} alt={image.title} width={image.width} height={image.height} onClick={(event) => event.stopPropagation()} />
      <button className="lightbox-nav lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); navigate(1) }} aria-label="Próxima imagem"><ArrowRight size={22} /></button>
      <div className="lightbox-caption"><span>{image.category}</span><strong>{image.title}</strong></div>
    </div>
  )
}