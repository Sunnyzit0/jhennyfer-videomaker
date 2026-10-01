import { ArrowUpRight, Camera, Clapperboard, Megaphone, PenLine } from 'lucide-react'
import { linkWhatsapp } from '../data/contato'
import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

const services = [
  { icon: Clapperboard, number: '01', title: 'Videomaker', text: 'Vídeos que traduzem a energia do seu momento e fazem sua história continuar em movimento.' },
  { icon: Camera, number: '02', title: 'Fotografia', text: 'Registros leves e cheios de intenção para guardar aquilo que merece ser revisto.' },
  { icon: PenLine, number: '03', title: 'Criação de conteúdo', text: 'Conteúdo pensado para aproximar sua marca das pessoas certas, com naturalidade.' },
  { icon: Megaphone, number: '04', title: 'Divulgação', text: 'Uma presença mais clara e bonita para você aparecer, comunicar e ser lembrada.' },
]

export function Servicos() {
  return (
    <section className="services-section section-padding" id="servicos">
      <div className="section-head">
        <Kicker numero="03">o que eu faço</Kicker>
        <Titulo linhas={['Seu momento,', <em key="j">do seu jeito.</em>]} />
      </div>
      <ul className="services-list">
        {services.map(({ icon: Icon, number, title, text }, index) => (
          <li key={title} data-reveal style={{ '--d': `${index * 80}ms` }}>
            <a className="service-row" href={linkWhatsapp(`Oi, Jhennyfer! Vim pelo seu site e tenho interesse em ${title.toLowerCase()}.`)} target="_blank" rel="noreferrer">
              <span className="service-num">{number}</span>
              <h3 className="service-title">{title}</h3>
              <p className="service-text">{text}</p>
              <span className="service-cta"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><span>orçar</span><ArrowUpRight size={18} aria-hidden="true" /></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
