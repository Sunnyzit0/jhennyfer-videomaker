export function Kicker({ numero, children }) {
  return (
    <p className="kicker" data-reveal>
      <span className="kicker-num">({numero})</span>
      <span className="kicker-line" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
