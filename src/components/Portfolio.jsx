import { ArrowUpRight, Play } from 'lucide-react'

const youtubeEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url)
    const videoId = parsedUrl.searchParams.get('v') || parsedUrl.pathname.split('/').pop()
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : url
  } catch {
    return url
  }
}

export function Portfolio({ category, categories, filteredPortfolio, setCategory, openLightbox, videos, instagramLink }) {
  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="portfolio-heading">
        <div><div className="section-kicker"><span>04</span><span>meu olhar</span></div><h2>Feito de histórias<br /><em>que merecem ficar.</em></h2></div>
        <p>Uma seleção de momentos, pessoas e encontros que tive a alegria de registrar.</p>
      </div>
      <div className="filter-row" role="group" aria-label="Filtrar portfólio">
        {categories.map((item) => <button className={category === item ? 'filter-button active' : 'filter-button'} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
      </div>
      <div className={`portfolio-grid ${category !== 'Todos' ? `is-filtered count-${filteredPortfolio.length}` : ''}`}>
        {filteredPortfolio.map((item, index) => <button className={`portfolio-item item-${index + 1}`} key={item.title} onClick={() => openLightbox(item)}><img src={item.image} alt={`${item.title}, categoria ${item.category}`} width={item.width} height={item.height} loading="eager" decoding="async" style={item.title === 'Um dia para lembrar' ? { objectPosition: 'center 22%' } : undefined} /><span className="portfolio-overlay"><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight size={20} /></span></button>)}
      </div>
      {videos.length > 0 ? <div className="video-grid">{videos.map((video) => video.tipo === 'youtube' ? <iframe key={video.url} src={youtubeEmbedUrl(video.url)} title={video.titulo} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <a className="video-link-card" key={video.url} href={video.url} target="_blank" rel="noreferrer">{video.capa && <img src={video.capa} alt="" loading="lazy" />}<span>{video.titulo}</span><ArrowUpRight size={20} /></a>)}</div> : <div className="video-placeholder"><div className="play-icon"><Play size={17} fill="currentColor" /></div><div><span className="eyebrow">em breve</span><p>Vídeos e reels selecionados</p></div><a className="placeholder-note" href={instagramLink} target="_blank" rel="noreferrer">Instagram</a></div>}
    </section>
  )
}