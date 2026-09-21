import { ArrowUpRight } from 'lucide-react'

export function Sobre() {
  return (
    <section className="intro-band section-padding" id="sobre">
      <div className="section-kicker"><span>02</span><span>sobre mim</span></div>
      <div className="about-grid">
        <div className="about-image">
          <img src="/imagens/videomaker-2.webp" srcSet="/imagens/videomaker-2-mobile.webp 700w, /imagens/videomaker-2.webp 1050w" sizes="(max-width: 760px) 86vw, 40vw" alt="Retrato em preto e branco de Jhennyfer" width="1050" height="1400" loading="lazy" />
          <span>prazer, Jhennyfer</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">olhar atento, processo leve (gerado por IA)</p>
          <h2>Oi, eu sou a <em>Jhennyfer.</em></h2>
          <p>Eu acredito que os melhores registros acontecem quando a gente se sente à vontade para ser quem é. Meu trabalho é criar esse espaço: observar com carinho, dirigir quando precisa e deixar a verdade aparecer.</p>
          <p>Seja em um casamento, um ensaio ou na comunicação de uma marca, eu estou aqui para transformar intenção em imagem.</p>
          <a className="text-link" href="#contato">Vamos criar juntas <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}