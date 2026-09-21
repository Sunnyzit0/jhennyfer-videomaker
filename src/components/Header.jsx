import { ArrowUpRight, Menu, X } from 'lucide-react'

export function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Jhennyfer, voltar ao início">
        <span className="brand-mark">J</span>
        <span>Jhennyfer</span>
      </a>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
        <a href="#processo" onClick={closeMenu}>Como funciona</a>
        <a href="#valores" onClick={closeMenu}>Valores</a>
        <a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}