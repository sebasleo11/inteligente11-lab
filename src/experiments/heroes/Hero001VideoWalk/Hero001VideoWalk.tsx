import './Hero001VideoWalk.css'

export function Hero001VideoWalk() {
  return (
    <section className="video-walk" aria-labelledby="video-walk-title">
      <video
        className="video-walk__media"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero/hero-background.mp4" type="video/mp4" />
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
