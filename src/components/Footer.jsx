import { ArrowUpRight } from 'lucide-react'
import { mostrarCreditoPrototipo } from '../data/config'

export function Footer() {
  return <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-mark">J</span><span>Jhennyfer</span></a>{mostrarCreditoPrototipo && <span className="prototype-credit">prototype by Arthur</span>}<a href="#inicio" className="back-top">voltar ao topo <ArrowUpRight size={15} /></a></footer>
}