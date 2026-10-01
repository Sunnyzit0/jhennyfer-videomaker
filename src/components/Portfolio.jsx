import { ArrowUpRight, Play } from 'lucide-react'
import { Kicker } from './Kicker'
import { Titulo } from './Titulo'

const youtubeEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url)
    const videoId = parsedUrl.searchParams.get('v') || parsedUrl.pathname.split('/').filter(Boolean).pop()
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : url
  } catch {
    return url
  }
}

const pad = (value) => String(value).padStart(2, '0')

export function Portfolio({ category, categories, portfolio, filteredPortfolio, setCategory, openLightbox, videos, instagramLink }) {
  const contar = (item) => (item === 'Todos' ? portfolio.length : portfolio.filter((foto) => foto.category === item).length)

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="portfolio-heading">
        <div>
          <Kicker numero="04">meu olhar</Kicker>
          <Titulo linhas={['Feito de histórias', <em key="f">que merecem ficar.</em>]} />
        </div>
        <p data-reveal>Uma seleção de momentos, pessoas e encontros que tive a alegria de registrar.</p>
      </div>

      <div className="filter-row" role="group" aria-label="Filtrar portfólio" data-reveal>
        {categories.map((item) => (
          <button type="button" className={category === item ? 'filter-button active' : 'filter-button'} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>
            {item}<sup>{pad(contar(item))}</sup>
          </button>
        ))}
      </div>

      <div className="portfolio-grid" key={category}>
        {filteredPortfolio.map((item, index) => (
          <button type="button" className="portfolio-item" key={item.title} onClick={(event) => openLightbox(item, event)} data-cursor="ver" style={{ '--d': `${index * 90}ms` }}>
            <span className="portfolio-media">
              <img src={item.image} alt={`${item.title}, categoria ${item.category}`} width={item.width} height={item.height} loading="eager" decoding="async" style={item.posicao ? { objectPosition: item.posicao } : undefined} />
            </span>
            <span className="portfolio-frame" aria-hidden="true">FR {pad(index + 1)}</span>
            <span className="portfolio-overlay">
              <span>{item.category}</span>
              <strong>{item.title}</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {videos.length > 0 ? (
        <div className="video-grid">
          {videos.map((video) => video.tipo === 'youtube'
            ? <iframe key={video.url} src={youtubeEmbedUrl(video.url)} title={video.titulo} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            : <a className="video-link-card" key={video.url} href={video.url} target="_blank" rel="noreferrer">{video.capa && <img src={video.capa} alt="" loading="lazy" />}<span>{video.titulo}</span><ArrowUpRight size={20} /></a>)}
        </div>
      ) : (
        <a className="video-placeholder" href={instagramLink} target="_blank" rel="noreferrer" data-reveal data-cursor="play">
          <span className="sprockets" aria-hidden="true" />
          <span className="video-placeholder-body">
            <span className="play-icon" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
            <span className="video-placeholder-copy">
              <span className="eyebrow">em breve · em edição</span>
              <strong>Vídeos e reels selecionados</strong>
            </span>
            <span className="placeholder-note">ver no Instagram <ArrowUpRight size={16} aria-hidden="true" /></span>
          </span>
          <span className="sprockets" aria-hidden="true" />
        </a>
      )}
    </section>
  )
}
