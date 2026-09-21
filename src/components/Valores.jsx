import { ArrowUpRight } from 'lucide-react'

export function Valores({ precos, whatsappLink }) {
  return (
    <section className="pricing-section section-padding" id="valores">
      <div className="pricing-heading"><div className="section-kicker"><span>06</span><span>investimento</span></div><h2>Investimento,<br /><em>sem complicação.</em></h2></div>
      <div className="pricing-table-wrap"><table className="pricing-table"><caption className="sr-only">Valores de exemplo por serviço</caption><thead><tr><th scope="col">Serviço</th><th scope="col">O que inclui</th><th scope="col">Valor</th></tr></thead><tbody>{precos.map((item) => <tr key={item.servico}><th scope="row">{item.servico}</th><td><ul>{item.inclui.map((incluso, index) => <li key={`${item.servico}-${index}`}>{incluso}</li>)}</ul></td><td><span className="price-placeholder">{item.valor}</span></td></tr>)}</tbody></table></div>
      <div className="pricing-note"><p>Valores personalizados conforme o projeto. Fale comigo para receber um orçamento.</p><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={17} /></a></div>
    </section>
  )
}