import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer section-padding">
      <p className="footer-wordmark" aria-hidden="true">Jhennyfer</p>
      <div className="footer-row">
        <a href="#inicio" className="back-top">voltar ao topo <ArrowUp size={15} /></a>
      </div>
      <p className="assinatura">By Arthur</p>
    </footer>
  )
}
