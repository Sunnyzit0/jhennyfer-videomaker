import { IconeWhatsapp } from './IconeWhatsapp'

export function BotaoWhatsapp({ whatsappLink }) {
  return <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com Jhennyfer pelo WhatsApp"><IconeWhatsapp size={22} /></a>
}