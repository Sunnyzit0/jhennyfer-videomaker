import { ArrowUpRight, Camera, Clapperboard, Megaphone, PenLine } from 'lucide-react'

const services = [
  { icon: Clapperboard, number: '01', title: 'Videomaker', text: 'Vídeos que traduzem a energia do seu momento e fazem sua história continuar em movimento.' },
  { icon: Camera, number: '02', title: 'Fotografia', text: 'Registros leves e cheios de intenção para guardar aquilo que merece ser revisto.' },
  { icon: PenLine, number: '03', title: 'Criação de conteúdo', text: 'Conteúdo pensado para aproximar sua marca das pessoas certas, com naturalidade.' },
  { icon: Megaphone, number: '04', title: 'Divulgação', text: 'Uma presença mais clara e bonita para você aparecer, comunicar e ser lembrada.' },
]

export function Servicos() {
  return (
    <section className="services-section section-padding" id="servicos">
      <div className="section-heading">
        <div className="section-kicker"><span>03</span><span>o que eu faço</span></div>
        <h2>Seu momento,<br /><em>do seu jeito.</em></h2>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, number, title, text }) => (
          <article className="service-card" key={title}>
            <div className="service-top"><Icon size={22} strokeWidth={1.5} /><span>{number}</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ArrowUpRight className="service-arrow" size={20} />
          </article>
        ))}
      </div>
    </section>
  )
}