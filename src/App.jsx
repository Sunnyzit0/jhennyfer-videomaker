import { useEffect, useRef, useState } from 'react'
import { contato } from './data/contato'
import { precos } from './data/precos'
import { videos } from './data/videos'
import { BotaoWhatsapp } from './components/BotaoWhatsapp'
import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Portfolio } from './components/Portfolio'
import { Processo } from './components/Processo'
import { Servicos } from './components/Servicos'
import { Sobre } from './components/Sobre'
import { Valores } from './components/Valores'
import './index.css'
import './pricing.css'

const portfolio = [
  { title: 'Ensaio em movimento', category: 'Ensaios', image: '/imagens/ensaio-1.webp', width: 1067, height: 1600 },
  { title: 'Um dia para lembrar', category: 'Casamentos', image: '/imagens/casamento-1.webp', width: 1200, height: 1600 },
  { title: 'Entre nós', category: 'Casamentos', image: '/imagens/casamento-2.webp', width: 1200, height: 1600 },
  { title: 'Retrato autoral', category: 'Ensaios', image: '/imagens/ensaio-3.webp', width: 1200, height: 1600 },
  { title: 'Olhar e presença', category: 'Ensaios', image: '/imagens/ensaio-2.webp', width: 1200, height: 1600 },
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

  const restoreFocusAfterClose = () => {
    const target = lastFocusedElement.current
    if (target?.isConnected) target.focus()
    else document.querySelector('.filter-button.active')?.focus()
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
        requestAnimationFrame(restoreFocusAfterClose)
        setMenuOpen(false)
      }
      if (!selectedImage) return
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        const direction = event.key === 'ArrowLeft' ? -1 : 1
        const currentIndex = filteredPortfolio.findIndex((item) => item.title === selectedImage.title)
        const nextIndex = (currentIndex + direction + filteredPortfolio.length) % filteredPortfolio.length
        setSelectedImage(filteredPortfolio[nextIndex])
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
  }, [filteredPortfolio, selectedImage])

  useEffect(() => {
    if (selectedImage) lightboxCloseRef.current?.focus()
  }, [selectedImage])

  useEffect(() => {
    document.body.style.overflow = selectedImage || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage, menuOpen])

  const openLightbox = (item, event) => { lastFocusedElement.current = event.currentTarget; setSelectedImage(item) }
  const closeLightbox = () => { setSelectedImage(null); requestAnimationFrame(restoreFocusAfterClose) }
  const navigateLightbox = (direction) => {
    const currentIndex = filteredPortfolio.findIndex((item) => item.title === selectedImage?.title)
    const nextIndex = (currentIndex + direction + filteredPortfolio.length) % filteredPortfolio.length
    setSelectedImage(filteredPortfolio[nextIndex])
  }

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero whatsappLink={whatsappLink} />
        <Sobre />
        <Servicos />
        <Portfolio category={category} categories={categories} filteredPortfolio={filteredPortfolio} setCategory={setCategory} openLightbox={openLightbox} videos={videos} instagramLink={contato.instagramLink} />
        <Processo />
        <Valores precos={precos} whatsappLink={whatsappLink} />
        <Contato contato={contato} whatsappLink={whatsappLink} />
      </main>
      <Footer />
      <BotaoWhatsapp whatsappLink={whatsappLink} />
      {selectedImage && <Lightbox image={selectedImage} dialogRef={lightboxRef} closeRef={lightboxCloseRef} close={closeLightbox} navigate={navigateLightbox} />}
    </div>
  )
}

export default App