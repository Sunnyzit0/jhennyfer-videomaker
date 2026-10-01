import { useEffect, useRef, useState } from 'react'
import { CHAVE_ABERTURA } from '../utils/abertura'

const ABRIR_EM = 1450
const DURACAO_SAIDA = 950

export function Abertura({ onAbrir }) {
  const [fase, setFase] = useState('contando')
  const onAbrirRef = useRef(onAbrir)

  useEffect(() => {
    try { sessionStorage.setItem(CHAVE_ABERTURA, '1') } catch { /* sem storage, toca de novo na próxima visita */ }
    const timer = setTimeout(() => setFase('saindo'), ABRIR_EM)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (fase !== 'saindo') return undefined
    onAbrirRef.current()
    const timer = setTimeout(() => setFase('fim'), DURACAO_SAIDA)
    return () => clearTimeout(timer)
  }, [fase])

  if (fase === 'fim') return null

  return (
    <div className={`abertura${fase === 'saindo' ? ' is-saindo' : ''}`} aria-hidden="true" onClick={() => setFase('saindo')}>
      <span className="abertura-metade topo" />
      <span className="abertura-metade base" />
      <div className="abertura-leader">
        <span className="abertura-sweep" />
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="78" />
          <line x1="100" y1="0" x2="100" y2="200" />
          <line x1="0" y1="100" x2="200" y2="100" />
        </svg>
        <span className="abertura-num"><span>3</span><span>2</span><span>1</span></span>
      </div>
      <p className="abertura-slate"><span>Jhennyfer</span><span>take 01 · cena 01</span></p>
    </div>
  )
}
