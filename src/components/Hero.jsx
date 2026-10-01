import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Timecode } from './Timecode'

export function Hero({ whatsappLink }) {
  return (
    <section className="hero section-padding" id="inicio">
      <div className="hero-meta">
        <span>(01) videomaker &amp; criadora de conteúdo</span>
        <span className="hero-meta-right">take 01 · cena 01</span>
      </div>

      <h1 className="hero-title">
        <span className="line"><span>Histórias</span></span>
        <span className="line"><span>que <em>ganham</em></span></span>
        <span className="line"><span><em>vida.</em></span></span>
      </h1>

      <figure className="hero-frame">
        <div className="hero-photo">
          <img src="/imagens/videomaker.webp" srcSet="/imagens/videomaker-mobile.webp 700w, /imagens/videomaker.webp 1050w" sizes="(max-width: 860px) 92vw, 42vw" alt="Jhennyfer segurando uma câmera e um celular" width="1050" height="1400" fetchPriority="high" />
        </div>
        <div className="viewfinder" aria-hidden="true">
          <span className="vf-corner tl" /><span className="vf-corner tr" /><span className="vf-corner bl" /><span className="vf-corner br" />
          <span className="vf-rec"><span className="rec-dot" />REC</span>
          <span className="vf-format">4K · 24 FPS</span>
          <span className="vf-focus" />
          <Timecode className="vf-timecode" />
          <span className="vf-exposure">ISO 400 · f/1.8 · 1/50</span>
          <span className="vf-battery"><i /><i /><i /></span>
        </div>
        <figcaption className="hero-caption">presença por trás<br />de cada frame</figcaption>
      </figure>

      <div className="hero-bottom">
        <p className="hero-lede">Vídeos, fotos e conteúdo para transformar momentos reais em memórias que ficam.</p>
        <a className="button button-rec" href={whatsappLink} target="_blank" rel="noreferrer"><span className="button-label">Quero criar algo</span> <ArrowUpRight size={17} /></a>
      </div>

      <a className="scroll-cue" href="#sobre"><span>role</span><ArrowDown size={16} /></a>
    </section>
  )
}
