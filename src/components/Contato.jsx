import { AtSign } from 'lucide-react'
import { IconeWhatsapp } from './IconeWhatsapp'

export function Contato({ contato, whatsappLink }) {
  return (
    <section className="contact-section section-padding" id="contato">
      <div className="contact-card"><span className="eyebrow">07 · vamos conversar</span><h2>Tem uma ideia<br /><em>na cabeça?</em></h2><p>Me conta. A gente transforma em algo bonito, real e com a sua cara.</p><div className="contact-actions"><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer"><IconeWhatsapp size={18} /> WhatsApp</a><a className="button button-outline-light" href={contato.instagramLink} target="_blank" rel="noreferrer"><AtSign size={18} /> Instagram</a></div><span className="contact-detail">{contato.instagramHandle} · <span className="phone-nowrap">{contato.whatsappDisplay}</span></span></div>
    </section>
  )
}