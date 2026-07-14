import './Hero001VideoWalk.css'

const VIDEO_WEBM = '/videos/hero/sebastian-walking.webm'
const VIDEO_MP4 = '/videos/hero/sebastian-walking.mp4'
const VIDEO_POSTER = '/images/hero/sebastian-walking-poster.webp'

export function Hero001VideoWalk() {
  return (
    <section className="video-walk" aria-labelledby="video-walk-title">
      <video
        className="video-walk__media"
        autoPlay
        loop
        muted
        playsInline
        poster={VIDEO_POSTER}
        aria-hidden="true"
      >
        <source src={VIDEO_WEBM} type="video/webm" />
        <source src={VIDEO_MP4} type="video/mp4" />
      </video>

      <div className="video-walk__overlay" aria-hidden="true" />

      <div className="video-walk__content">
        <h1 className="video-walk__title" id="video-walk-title">
          <span>No desarrollo software.</span>
          <span>
            Construyo <strong>SOLUCIONES.</strong>
          </span>
        </h1>

        <p className="video-walk__subtitle">
          Soluciones digitales para empresas y emprendedores.
        </p>

        <div className="video-walk__actions">
          <button className="video-walk__button video-walk__button--primary" type="button">
            Ver proyectos
          </button>
          <button className="video-walk__button video-walk__button--secondary" type="button">
            Hablemos
          </button>
        </div>
      </div>
    </section>
  )
}
