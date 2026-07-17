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

      <aside className="video-walk__identity" aria-label="Identidad de Inteligente11 Lab">
        <strong className="video-walk__identity-name">INTELIGENTE11 LAB</strong>
        <span className="video-walk__identity-detail video-walk__identity-detail--full">
          IA · Automatización · Software
        </span>
        <span className="video-walk__identity-detail video-walk__identity-detail--compact">
          IA · Software
        </span>
      </aside>

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
          <a
            className="video-walk__button video-walk__button--secondary"
            href="https://wa.me/5491131772207?text=Hola%20Sebasti%C3%A1n.%0A%0AVi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: 'center', textDecoration: 'none' }}
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  )
}
