import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react'

export function Hero({ whatsappLink }) {
  return (
    <section className="hero section-padding" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow"><Sparkles size={15} /> imagem com intenção</p>
        <h1>Histórias que<br /><em>ganham vida.</em></h1>
        <p className="hero-lede">Vídeos, fotos e conteúdo para transformar momentos reais em memórias que ficam.</p>
        <a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Quero criar algo <ArrowUpRight size={17} /></a>
        <div className="hero-note"><span>01</span><span>videomaker & criadora de conteúdo</span></div>
      </div>
      <div className="hero-image-wrap reveal reveal-delay">
        <img src="/imagens/videomaker.webp" srcSet="/imagens/videomaker-mobile.webp 700w, /imagens/videomaker.webp 1050w" sizes="(max-width: 760px) 100vw, 50vw" alt="Jhennyfer segurando uma câmera e um celular" width="1050" height="1400" fetchPriority="high" />
        <span className="image-caption">presença por trás<br />de cada frame</span>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Rolar para saber mais"><ArrowDownRight size={20} /></a>
    </section>
  )
}