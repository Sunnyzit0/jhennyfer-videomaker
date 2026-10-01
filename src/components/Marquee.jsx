const itens = ['Videomaker', 'Fotografia', 'Criação de conteúdo', 'Divulgação']

export function Marquee() {
  const grupo = (oculto) => (
    <div className="marquee-group" aria-hidden={oculto || undefined}>
      {itens.map((item) => (
        <span className="marquee-item" key={item}>{item}<span className="marquee-star" aria-hidden="true">✺</span></span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <div className="marquee-track">
        {grupo(false)}
        {grupo(true)}
      </div>
    </div>
  )
}
