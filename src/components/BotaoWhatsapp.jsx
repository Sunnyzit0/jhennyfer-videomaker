import { useEffect, useState } from 'react'
import { IconeWhatsapp } from './IconeWhatsapp'

export function BotaoWhatsapp({ whatsappLink }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const targets = ['#inicio', '#contato'].map((id) => document.querySelector(id)).filter(Boolean)
    if (!targets.length) return undefined

    const visible = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      })
      setHidden(visible.size > 0)
    }, { threshold: 0.2 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <a
      className={`floating-whatsapp${hidden ? ' is-hidden' : ''}`}
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Jhennyfer pelo WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <IconeWhatsapp size={22} />
    </a>
  )
}
