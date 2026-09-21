const steps = [
  ['01', 'Contato', 'Você me conta um pouco do que está imaginando e a gente marca uma conversa.'],
  ['02', 'Conversa e briefing', 'Entendo sua história, referências e o que precisa ser sentido no resultado.'],
  ['03', 'Orçamento', 'Você recebe uma proposta clara, feita para o seu momento e objetivo.'],
  ['04', 'Produção', 'Planejamos cada detalhe e vivemos o dia com leveza, presença e direção.'],
  ['05', 'Entrega', 'Seu material chega cuidado, organizado e pronto para ganhar o mundo.'],
]

export function Processo() {
  return (
    <section className="process-section section-padding" id="processo">
      <div className="process-intro"><div className="section-kicker"><span>05</span><span>como funciona</span></div><h2>Do primeiro oi<br />à <em>entrega.</em></h2><p>Um processo simples, transparente e feito para você se sentir segura em cada etapa.</p></div>
      <div className="steps-list">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
    </section>
  )
}