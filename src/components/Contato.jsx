import { IconeInstagram } from './IconeInstagram'
import { IconeWhatsapp } from './IconeWhatsapp'
import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

const faixa = 'vamos gravar? ● '.repeat(6)

export function Contato({ contato, whatsappLink }) {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-marquee" aria-hidden="true">
        <div className="contact-marquee-track"><span>{faixa}</span><span>{faixa}</span></div>
      </div>
      <div className="contact-card section-padding">
        <Kicker numero="07">vamos conversar</Kicker>
        <Titulo linhas={['Tem uma ideia', <em key="c">na cabeça?</em>]} />
        <p className="contact-text" data-reveal>Me conta. A gente transforma em algo bonito, real e com a sua cara.</p>
        <div className="contact-actions" data-reveal>
          <a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer"><IconeWhatsapp size={18} /> <span className="button-label">WhatsApp</span></a>
          <a className="button button-outline" href={contato.instagramLink} target="_blank" rel="noreferrer"><IconeInstagram size={18} /> <span className="button-label">Instagram</span></a>
        </div>
        <span className="contact-detail" data-reveal>{contato.instagramHandle} · <span className="phone-nowrap">{contato.whatsappDisplay}</span></span>
      </div>
    </section>
  )
}
