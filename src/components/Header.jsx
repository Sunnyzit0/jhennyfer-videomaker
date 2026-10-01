import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Timecode } from './Timecode'

const links = [
  ['#sobre', 'Sobre mim'],
  ['#servicos', 'Serviços'],
  ['#portfolio', 'Portfólio'],
  ['#processo', 'Como funciona'],
  ['#valores', 'Valores'],
]

export function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 420 && y > lastY)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mantém o foco dentro do cabeçalho enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return
      const focusable = headerRef.current?.querySelectorAll('a, button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const classes = ['site-header', scrolled && 'is-scrolled', hidden && !menuOpen && 'is-hidden', menuOpen && 'menu-open'].filter(Boolean).join(' ')

  return (
    <header className={classes} ref={headerRef}>
      <a className="brand" href="#inicio" onClick={closeMenu}>
        <span className="rec-dot" aria-hidden="true" />
        <span className="brand-name">Jhennyfer</span>
      </a>
      <div className="header-rec" aria-hidden="true"><span>REC</span><Timecode /></div>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="menu-principal" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="menu-principal" aria-label="Navegação principal">
        {links.map(([href, label], index) => (
          <a href={href} onClick={closeMenu} key={href} style={{ '--i': index }}>
            <span className="nav-index" aria-hidden="true">0{index + 2}</span>{label}
          </a>
        ))}
        <a className="nav-contact" href="#contato" onClick={closeMenu} style={{ '--i': links.length }}>Vamos conversar <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}
