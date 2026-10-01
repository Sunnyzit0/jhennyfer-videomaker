import { ArrowUpRight } from 'lucide-react'
import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

export function Valores({ precos, whatsappLink }) {
  return (
    <section className="pricing-section section-padding" id="valores">
      <div className="pricing-heading">
        <Kicker numero="06">investimento</Kicker>
        <Titulo linhas={['Investimento,', <em key="s">sem complicação.</em>]} />
      </div>
      <div className="pricing-table-wrap" data-reveal>
        <table className="pricing-table">
          <caption className="sr-only">Valores de exemplo por serviço</caption>
          <thead><tr><th scope="col">Serviço</th><th scope="col">O que inclui</th><th scope="col">Valor</th></tr></thead>
          <tbody>
            {precos.map((item, index) => (
              <tr key={item.servico}>
                <th scope="row"><span className="pricing-index" aria-hidden="true">0{index + 1}</span>{item.servico}</th>
                <td><ul>{item.inclui.map((incluso, i) => <li key={`${item.servico}-${i}`}>{incluso}</li>)}</ul></td>
                <td><span className="price-tag">{item.valor}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pricing-note" data-reveal>
        <p>Valores personalizados conforme o projeto. Fale comigo para receber um orçamento.</p>
        <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer"><span className="button-label">Falar no WhatsApp</span> <ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}
