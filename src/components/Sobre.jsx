import { ArrowUpRight } from 'lucide-react'
import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

export function Sobre() {
  return (
    <section className="about-section section-padding" id="sobre">
      <Kicker numero="02">sobre mim</Kicker>
      <div className="about-grid">
        <div className="about-image" data-reveal="clip">
          <div className="film-strip reveal-clip">
            <img src="/imagens/videomaker-2.webp" srcSet="/imagens/videomaker-2-mobile.webp 700w, /imagens/videomaker-2.webp 1050w" sizes="(max-width: 860px) 86vw, 38vw" alt="Retrato em preto e branco de Jhennyfer" width="1050" height="1400" loading="lazy" />
          </div>
          <svg className="spin-badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="badge-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
            <text><textPath href="#badge-circle">prazer, Jhennyfer · prazer, Jhennyfer · </textPath></text>
            <circle cx="60" cy="60" r="5" />
          </svg>
        </div>
        <div className="about-copy">
          <p className="eyebrow" data-reveal>olhar atento, processo leve</p>
          <Titulo linhas={['Oi, eu sou', <em key="n">a Jhennyfer.</em>]} />
          <p className="about-lead" data-reveal>Eu acredito que os melhores registros acontecem quando a gente se sente à vontade para ser <em>quem é.</em></p>
          <p data-reveal>Meu trabalho é criar esse espaço: observar com carinho, dirigir quando precisa e deixar a verdade aparecer. Seja em um casamento, um ensaio ou na comunicação de uma marca, eu estou aqui para transformar intenção em imagem.</p>
          <a className="text-link" href="#contato" data-reveal>Vamos criar juntas <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}
