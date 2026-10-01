export const CHAVE_ABERTURA = 'jhennyfer-abertura'

// A abertura toca uma vez por sessão e nunca com movimento reduzido.
export const deveTocarAbertura = () => {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem(CHAVE_ABERTURA)
  } catch {
    return false
  }
}
