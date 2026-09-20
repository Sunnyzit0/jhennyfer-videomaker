import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, AtSign, Camera, Check, Clapperboard, Menu, MessageCircle, Megaphone, PenLine, Play, Sparkles, X } from 'lucide-react'
import { contato } from './data/contato'
import './index.css'

const imagePath = (name) => `/imagens/${name}`

const services = [
  { icon: Clapperboard, number: '01', title: 'Videomaker', text: 'Vídeos que traduzem a energia do seu momento e fazem sua história continuar em movimento.' },
  { icon: Camera, number: '02', title: 'Fotografia', text: 'Registros leves e cheios de intenção para guardar aquilo que merece ser revisto.' },
  { icon: PenLine, number: '03', title: 'Criação de conteúdo', text: 'Conteúdo pensado para aproximar sua marca das pessoas certas, com naturalidade.' },
  { icon: Megaphone, number: '04', title: 'Divulgação', text: 'Uma presença mais clara e bonita para você aparecer, comunicar e ser lembrada.' },
]

const portfolio = [
  { title: 'Ensaio em movimento', category: 'Ensaios', image: imagePath('Outra mulher 1.jpeg') },
  { title: 'Um dia para lembrar', category: 'Casamentos', image: imagePath('Casamento.jpeg') },
  { title: 'Entre nós', category: 'Casamentos', image: imagePath('Casamento 2.jpeg') },
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
  const whatsappLink = `https://wa.me/${contato.whatsappNumber}?text=${encodeURIComponent(contato.whatsappMessage)}`
  const categories = ['Todos', 'Casamentos', 'Ensaios']
  const filteredPortfolio = category === 'Todos' ? portfolio : portfolio.filter((item) => item.category === category)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') { setSelectedImage(null); setMenuOpen(false) }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Jhennyfer, voltar ao início"><span className="brand-mark">J</span><span>Jhennyfer</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#portfolio" onClick={closeMenu}>Portfólio</a><a href="#processo" onClick={closeMenu}>Como funciona</a><a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-padding" id="inicio">
          <div className="hero-copy reveal"><p className="eyebrow"><Sparkles size={15} /> imagem com intenção</p><h1>Histórias que<br /><em>ganham vida.</em></h1><p className="hero-lede">Vídeos, fotos e conteúdo para transformar momentos reais em memórias que ficam.</p><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Quero criar algo <ArrowUpRight size={17} /></a><div className="hero-note"><span>01</span><span>videomaker & criadora de conteúdo</span></div></div>
          <div className="hero-image-wrap reveal reveal-delay"><img src={imagePath('Videomaker.PNG')} alt="Jhennyfer segurando uma câmera e um celular" /><span className="image-caption">presença por trás<br />de cada frame</span></div>
          <a className="scroll-cue" href="#sobre" aria-label="Rolar para saber mais"><ArrowDownRight size={20} /></a>
        </section>

        <section className="intro-band section-padding" id="sobre"><div className="section-kicker"><span>02</span><span>sobre mim</span></div><div className="about-grid"><div className="about-image"><img src={imagePath('Videomaker 2.PNG')} alt="Retrato em preto e branco de Jhennyfer" loading="lazy" /><span style={{ transform: 'none', left: 0 }}>prazer, Jhennyfer</span></div><div className="about-copy"><p className="eyebrow">olhar atento, processo leve</p><h2>Oi, eu sou a <em>Jhennyfer.</em></h2><p>Eu acredito que os melhores registros acontecem quando a gente se sente à vontade para ser quem é. Meu trabalho é criar esse espaço: observar com carinho, dirigir quando precisa e deixar a verdade aparecer.</p><p>Seja em um casamento, um ensaio ou na comunicação de uma marca, eu estou aqui para transformar intenção em imagem.</p><a className="text-link" href="#contato">Vamos criar juntas <ArrowUpRight size={16} /></a></div></div></section>

        <section className="services-section section-padding" id="servicos"><div className="section-heading"><div className="section-kicker"><span>03</span><span>o que eu faço</span></div><h2>Seu momento,<br /><em>do seu jeito.</em></h2></div><div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><div className="service-top"><Icon size={22} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div></section>

        <section className="portfolio-section section-padding" id="portfolio"><div className="portfolio-heading"><div><div className="section-kicker"><span>04</span><span>meu olhar</span></div><h2>Feito de histórias<br /><em>que merecem ficar.</em></h2></div><p>Uma seleção de momentos, pessoas e encontros que tive a alegria de registrar.</p></div><div className="filter-row" role="group" aria-label="Filtrar portfólio">{categories.map((item) => <button className={category === item ? 'filter-button active' : 'filter-button'} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="portfolio-grid">{filteredPortfolio.map((item, index) => <button className={`portfolio-item item-${index + 1}`} key={item.title} onClick={() => setSelectedImage(item)}><img src={item.image} alt={`${item.title}, categoria ${item.category}`} loading="lazy" /><span className="portfolio-overlay"><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={20} /></span></button>)}</div><div className="video-placeholder"><div className="play-icon"><Play size={17} fill="currentColor" /></div><div><span className="eyebrow">em breve</span><p>Vídeos e reels selecionados</p></div><span className="placeholder-note">YouTube / Instagram</span></div></section>

        <section className="process-section section-padding" id="processo"><div className="process-intro"><div className="section-kicker"><span>05</span><span>como funciona</span></div><h2>Do primeiro oi<br />à <em>entrega.</em></h2><p>Um processo simples, transparente e feito para você se sentir segura em cada etapa.</p></div><div className="steps-list">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={18} /></div>)}</div></section>

        <section className="contact-section section-padding" id="contato"><div className="contact-card"><span className="eyebrow">06 · vamos conversar</span><h2>Tem uma ideia<br /><em>na cabeça?</em></h2><p>Me conta. A gente transforma em algo bonito, real e com a sua cara.</p><div className="contact-actions"><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a className="button button-outline-light" href={contato.instagramLink} target="_blank" rel="noreferrer"><AtSign size={18} /> Instagram</a></div><span className="contact-detail">{contato.instagramHandle} · {contato.whatsappDisplay}</span></div></section>
      </main>

      <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-mark">J</span><span>Jhennyfer</span></a><a href="#inicio" className="back-top">voltar ao topo <ArrowUpRight size={15} /></a></footer><a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com Jhennyfer pelo WhatsApp"><MessageCircle size={22} /></a>
      {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Visualizando ${selectedImage.title}`} onClick={() => setSelectedImage(null)}><button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Fechar imagem"><X size={22} /></button><img src={selectedImage.image} alt={selectedImage.title} onClick={(event) => event.stopPropagation()} /><div className="lightbox-caption"><span>{selectedImage.category}</span><strong>{selectedImage.title}</strong></div></div>}
    </div>
  )
}

export default App