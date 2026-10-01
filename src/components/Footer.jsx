import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer section-padding">
      <p className="footer-wordmark" aria-hidden="true">Jhennyfer</p>
      <div className="footer-row">
        <span>© {new Date().getFullYear()} Jhennyfer · videomaker &amp; criadora de conteúdo</span>
        <a href="#inicio" className="back-top">voltar ao topo <ArrowUp size={15} /></a>
      </div>
    </footer>
  )
}
