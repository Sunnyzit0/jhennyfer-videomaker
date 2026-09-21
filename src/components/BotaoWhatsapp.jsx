import { MessageCircle } from 'lucide-react'

export function BotaoWhatsapp({ whatsappLink }) {
  return <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com Jhennyfer pelo WhatsApp"><MessageCircle size={22} /></a>
}