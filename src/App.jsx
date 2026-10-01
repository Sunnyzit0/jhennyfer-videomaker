import { useEffect, useRef, useState } from 'react'
import { contato, linkWhatsapp } from './data/contato'
import { categorias, portfolio } from './data/portfolio'
import { precos } from './data/precos'
import { videos } from './data/videos'
import { useReveal } from './hooks/useReveal'
import { deveTocarAbertura } from './utils/abertura'
import { Abertura } from './components/Abertura'
import { BotaoWhatsapp } from './components/BotaoWhatsapp'
import { Contato } from './components/Contato'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Marquee } from './components/Marquee'
import { Portfolio } from './components/Portfolio'
import { Processo } from './components/Processo'
import { Servicos } from './components/Servicos'
import { Sobre } from './components/Sobre'
import { Valores } from './components/Valores'

const whatsappLink = linkWhatsapp()

function App() {
  const [tocarAbertura] = useState(deveTocarAbertura)
  const [ready, setReady] = useState(!tocarAbertura)
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState(null)
  const lastFocusedElement = useRef(null)
  const lightboxRef = useRef(null)
  const lightboxCloseRef = useRef(null)
  const filteredPortfolio = category === 'Todos' ? portfolio : portfolio.filter((item) => item.category === category)

  useReveal()

  const restoreFocusAfterClose = () => {
    const target = lastFocusedElement.current
    if (target?.isConnected) target.focus()
    else document.querySelector('.filter-button.active')?.focus()
  }

  const openLightbox = (item, event) => { lastFocusedElement.current = event.currentTarget; setSelectedImage(item) }
  const closeLightbox = () => { setSelectedImage(null); requestAnimationFrame(restoreFocusAfterClose) }
  const navigateLightbox = (direction) => {
    const currentIndex = filteredPortfolio.findIndex((item) => item.title === selectedImage?.title)
    const nextIndex = (currentIndex + direction + filteredPortfolio.length) % filteredPortfolio.length
    setSelectedImage(filteredPortfolio[nextIndex])
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        if (selectedImage) closeLightbox()
      }
      if (!selectedImage) return
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        navigateLightbox(event.key === 'ArrowLeft' ? -1 : 1)
      }
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
  })

  useEffect(() => {
    if (selectedImage) lightboxCloseRef.current?.focus()
  }, [selectedImage])

  useEffect(() => {
    document.body.style.overflow = selectedImage || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage, menuOpen])

  return (
    <div className={`site-shell${ready ? ' is-ready' : ''}`}>
      {tocarAbertura && <Abertura onAbrir={() => setReady(true)} />}
      <div className="scroll-progress" aria-hidden="true" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero whatsappLink={whatsappLink} />
        <Marquee />
        <Sobre />
        <Servicos />
        <Portfolio category={category} categories={categorias} portfolio={portfolio} filteredPortfolio={filteredPortfolio} setCategory={setCategory} openLightbox={openLightbox} videos={videos} instagramLink={contato.instagramLink} />
        <Processo />
        <Valores precos={precos} whatsappLink={whatsappLink} />
        <Contato contato={contato} whatsappLink={whatsappLink} />
      </main>
      <Footer />
      <BotaoWhatsapp whatsappLink={whatsappLink} />
      <Cursor />
      {selectedImage && <Lightbox image={selectedImage} position={filteredPortfolio.findIndex((item) => item.title === selectedImage.title) + 1} total={filteredPortfolio.length} dialogRef={lightboxRef} closeRef={lightboxCloseRef} close={closeLightbox} navigate={navigateLightbox} />}
    </div>
  )
}

export default App
