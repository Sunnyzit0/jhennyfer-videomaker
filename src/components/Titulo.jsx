// Título com cada linha revelada por máscara ao entrar na tela.
export function Titulo({ as: Tag = 'h2', linhas, className = '' }) {
  return (
    <Tag className={`titulo ${className}`} data-reveal="lines">
      {linhas.map((linha, index) => (
        <span className="line" key={index} style={{ '--i': index }}>
          <span>{linha}</span>
        </span>
      ))}
    </Tag>
  )
}
