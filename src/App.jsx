import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, AtSign, Camera, Check, Clapperboard, Menu, MessageCircle, Megaphone, PenLine, Play, Sparkles, X } from 'lucide-react'
import { contato } from './data/contato'
import { precos } from './data/precos'
import './index.css'
import './pricing.css'

const imagePath = (name) => `/imagens/${name}`

const services = [
  { icon: Clapperboard, number: '01', title: 'Videomaker', text: 'Vídeos que traduzem a energia do seu momento e fazem sua história continuar em movimento.' },
  { icon: Camera, number: '02', title: 'Fotografia', text: 'Registros leves e cheios de intenção para guardar aquilo que merece ser revisto.' },
  { icon: PenLine, number: '03', title: 'Criação de conteúdo', text: 'Conteúdo pensado para aproximar sua marca das pessoas certas, com naturalidade.' },
  { icon: Megaphone, number: '04', title: 'Divulgação', text: 'Uma presença mais clara e bonita para você aparecer, comunicar e ser lembrada.' },
]

const portfolio = [
  { title: 'Ensaio em movimento', category: 'Ensaios', image: imagePath('ensaio-1.webp'), width: 1067, height: 1600 },
  { title: 'Um dia para lembrar', category: 'Casamentos', image: imagePath('casamento-1.webp'), width: 1200, height: 1600 },
  { title: 'Entre nós', category: 'Casamentos', image: imagePath('casamento-2.webp'), width: 1200, height: 1600 },
  { title: 'Retrato autoral', category: 'Ensaios', image: imagePath('ensaio-3.webp'), width: 1200, height: 1600 },
  { title: 'Olhar e presença', category: 'Ensaios', image: imagePath('ensaio-2.webp'), width: 1200, height: 1600 },
]

const steps = [
  ['01', 'Contato', 'Você me conta um pouco do que está imaginando e a gente marca uma conversa.'],
  ['02', 'Conversa e briefing', 'Entendo sua história, referências e o que precisa ser sentido no resultado.'],
  ['03', 'Orçamento', 'Você recebe uma proposta clara, feita para o seu momento e objetivo.'],
  ['04', 'Produção', 'Planejamos cada detalhe e vivemos o dia com leveza, presença e direção.'],
  ['05', 'Entrega', 'Seu material chega cuidado, organizado e pronto para ganhar o mundo.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState(null)
  const lastFocusedElement = useRef(null)
  const lightboxRef = useRef(null)
  const lightboxCloseRef = useRef(null)
  const whatsappLink = `https://wa.me/${contato.whatsappNumber}?text=${encodeURIComponent(contato.whatsappMessage)}`
  const categories = ['Todos', 'Casamentos', 'Ensaios']
  const filteredPortfolio = category === 'Todos' ? portfolio : portfolio.filter((item) => item.category === category)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') { closeLightbox(); setMenuOpen(false) }
      if (!selectedImage) return
      if (event.key === 'ArrowLeft') { event.preventDefault(); navigateLightbox(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); navigateLightbox(1) }
      if (event.key === 'Tab') {
        const focusable = lightboxRef.current?.querySelectorAll('button')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  useEffect(() => {
    if (selectedImage) lightboxCloseRef.current?.focus()
  }, [selectedImage])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  const closeMenu = () => setMenuOpen(false)
  const openLightbox = (item) => { lastFocusedElement.current = document.activeElement; setSelectedImage(item) }
  const closeLightbox = () => { setSelectedImage(null); requestAnimationFrame(() => lastFocusedElement.current?.focus()) }
  const navigateLightbox = (direction) => {
    const currentIndex = filteredPortfolio.findIndex((item) => item.title === selectedImage?.title)
    const nextIndex = (currentIndex + direction + filteredPortfolio.length) % filteredPortfolio.length
    setSelectedImage(filteredPortfolio[nextIndex])
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Jhennyfer, voltar ao início"><span className="brand-mark">J</span><span>Jhennyfer</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#portfolio" onClick={closeMenu}>Portfólio</a><a href="#processo" onClick={closeMenu}>Como funciona</a><a href="#valores" onClick={closeMenu}>Valores</a><a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-padding" id="inicio">
          <div className="hero-copy reveal"><p className="eyebrow"><Sparkles size={15} /> imagem com intenção</p><h1>Histórias que<br /><em>ganham vida.</em></h1><p className="hero-lede">Vídeos, fotos e conteúdo para transformar momentos reais em memórias que ficam.</p><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Quero criar algo <ArrowUpRight size={17} /></a><div className="hero-note"><span>01</span><span>videomaker & criadora de conteúdo</span></div></div>
          <div className="hero-image-wrap reveal reveal-delay"><img src={imagePath('videomaker.webp')} alt="Jhennyfer segurando uma câmera e um celular" width="1050" height="1400" fetchPriority="high" /><span className="image-caption">presença por trás<br />de cada frame</span></div>
          <a className="scroll-cue" href="#sobre" aria-label="Rolar para saber mais"><ArrowDownRight size={20} /></a>
        </section>

        <section className="intro-band section-padding" id="sobre"><div className="section-kicker"><span>02</span><span>sobre mim</span></div><div className="about-grid"><div className="about-image"><img src={imagePath('videomaker-2.webp')} alt="Retrato em preto e branco de Jhennyfer" width="1050" height="1400" loading="lazy" /><span>prazer, Jhennyfer</span></div><div className="about-copy"><p className="eyebrow">olhar atento, processo leve</p><h2>Oi, eu sou a <em>Jhennyfer.</em></h2><p>Eu acredito que os melhores registros acontecem quando a gente se sente à vontade para ser quem é. Meu trabalho é criar esse espaço: observar com carinho, dirigir quando precisa e deixar a verdade aparecer. (descrição gerada por IA.)</p><p>Seja em um casamento, um ensaio ou na comunicação de uma marca, eu estou aqui para transformar intenção em imagem.</p><a className="text-link" href="#contato">Vamos criar juntas <ArrowUpRight size={16} /></a></div></div></section>

        <section className="services-section section-padding" id="servicos"><div className="section-heading"><div className="section-kicker"><span>03</span><span>o que eu faço</span></div><h2>Seu momento,<br /><em>do seu jeito.</em></h2></div><div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><div className="service-top"><Icon size={22} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div></section>

        <section className="portfolio-section section-padding" id="portfolio"><div className="portfolio-heading"><div><div className="section-kicker"><span>04</span><span>meu olhar</span></div><h2>Feito de histórias<br /><em>que merecem ficar.</em></h2></div><p>Uma seleção de momentos, pessoas e encontros que tive a alegria de registrar.</p></div><div className="filter-row" role="group" aria-label="Filtrar portfólio">{categories.map((item) => <button className={category === item ? 'filter-button active' : 'filter-button'} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div><div className="portfolio-grid">{filteredPortfolio.map((item, index) => <button className={`portfolio-item item-${index + 1}`} key={item.title} onClick={() => openLightbox(item)}><img src={item.image} alt={`${item.title}, categoria ${item.category}`} width={item.width} height={item.height} loading="lazy" style={item.title === 'Um dia para lembrar' ? { objectPosition: 'center 22%' } : undefined} /><span className="portfolio-overlay"><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={20} /></span></button>)}</div><div className="video-placeholder"><div className="play-icon" style={{ flexShrink: 0, aspectRatio: '1 / 1' }}><Play size={17} fill="currentColor" /></div><div><span className="eyebrow">em breve</span><p>Vídeos e reels selecionados</p></div><span className="placeholder-note">Instagram</span></div></section>

        <section className="process-section section-padding" id="processo"><div className="process-intro"><div className="section-kicker"><span>05</span><span>como funciona</span></div><h2>Do primeiro oi<br />à <em>entrega.</em></h2><p>Um processo simples, transparente e feito para você se sentir segura em cada etapa.</p></div><div className="steps-list">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={18} /></div>)}</div></section>

        <section className="pricing-section section-padding" id="valores"><div className="pricing-heading"><div className="section-kicker"><span>06</span><span>investimento</span></div><h2>Investimento,<br /><em>sem complicação.</em></h2></div><div className="pricing-table-wrap"><table className="pricing-table"><caption className="sr-only">Valores de exemplo por serviço</caption><thead><tr><th scope="col">Serviço</th><th scope="col">O que inclui</th><th scope="col">Valor</th></tr></thead><tbody>{precos.map((item) => <tr key={item.servico}><th scope="row">{item.servico}</th><td><ul>{item.inclui.map((incluso, index) => <li key={`${item.servico}-${index}`}>{incluso}</li>)}</ul></td><td><span className="price-placeholder">{item.valor}</span></td></tr>)}</tbody></table></div><div className="pricing-note"><p>Valores personalizados conforme o projeto. Fale comigo para receber um orçamento.</p><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={17} /></a></div></section>

        <section className="contact-section section-padding" id="contato"><div className="contact-card"><span className="eyebrow">07 · vamos conversar</span><h2>Tem uma ideia<br /><em>na cabeça?</em></h2><p>Me conta. A gente transforma em algo bonito, real e com a sua cara.</p><div className="contact-actions"><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a className="button button-outline-light" href={contato.instagramLink} target="_blank" rel="noreferrer"><AtSign size={18} /> Instagram</a></div><span className="contact-detail">{contato.instagramHandle} · {contato.whatsappDisplay}</span></div></section>
      </main>

      <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-mark">J</span><span>Jhennyfer</span></a><a href="#inicio" className="back-top">voltar ao topo <ArrowUpRight size={15} /></a></footer><a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com Jhennyfer pelo WhatsApp"><MessageCircle size={22} /></a>
      {selectedImage && <div className="lightbox" ref={lightboxRef} role="dialog" aria-modal="true" aria-label={`Visualizando ${selectedImage.title}`} onClick={closeLightbox}><button className="lightbox-close" ref={lightboxCloseRef} type="button" onClick={closeLightbox} aria-label="Fechar imagem"><X size={22} /></button><button className="lightbox-nav lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); navigateLightbox(-1) }} aria-label="Imagem anterior"><ArrowLeft size={22} /></button><img src={selectedImage.image} alt={selectedImage.title} width={selectedImage.width} height={selectedImage.height} onClick={(event) => event.stopPropagation()} /><button className="lightbox-nav lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); navigateLightbox(1) }} aria-label="Próxima imagem"><ArrowRight size={22} /></button><div className="lightbox-caption"><span>{selectedImage.category}</span><strong>{selectedImage.title}</strong></div></div>}
    </div>
  )
}

export default App