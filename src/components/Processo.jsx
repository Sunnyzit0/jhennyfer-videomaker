import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

const steps = [
  ['01', 'Contato', 'Você me conta um pouco do que está imaginando e a gente marca uma conversa.'],
  ['02', 'Conversa e briefing', 'Entendo sua história, referências e o que precisa ser sentido no resultado.'],
  ['03', 'Orçamento', 'Você recebe uma proposta clara, feita para o seu momento e objetivo.'],
  ['04', 'Produção', 'Planejamos cada detalhe e vivemos o dia com leveza, presença e direção.'],
  ['05', 'Entrega', 'Seu material chega cuidado, organizado e pronto para ganhar o mundo.'],
]

const marcas = ['00:00', '00:15', '00:30', '00:45', '01:00', '01:15']

export function Processo() {
  return (
    <section className="process-section section-padding" id="processo">
      <div className="process-intro">
        <div>
          <Kicker numero="05">como funciona</Kicker>
          <Titulo linhas={['Do primeiro oi', <span key="e">à <em>entrega.</em></span>]} />
        </div>
        <p data-reveal>Um processo simples, transparente e feito para você se sentir segura em cada etapa.</p>
      </div>

      <div className="timeline" data-reveal>
        <div className="timeline-ruler" aria-hidden="true">
          {marcas.map((marca) => <span key={marca}>{marca}</span>)}
        </div>
        <ol className="timeline-track">
          {steps.map(([number, title, text], index) => (
            <li className="clip" key={number} style={{ '--d': `${index * 120}ms` }}>
              <span className="clip-bar" aria-hidden="true"><span>CLIP_{number}.MOV</span></span>
              <span className="clip-wave" aria-hidden="true" />
              <span className="clip-num">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <span className="timeline-playhead" aria-hidden="true" />
      </div>
    </section>
  )
}
