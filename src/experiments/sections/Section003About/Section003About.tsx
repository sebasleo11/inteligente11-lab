import { useEffect, useRef, useState } from 'react'
import './Section003About.css'

export function Section003About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`about-sebastian${isVisible ? ' about-sebastian--visible' : ''}`}
      ref={sectionRef}
      aria-labelledby="about-sebastian-title"
    >
      <div className="about-sebastian__inner">
        <div className="about-sebastian__portrait">
          <img
            src="/images/about/sebastian-acuna-studio.png"
            alt="Sebastián Acuña"
            width="1086"
            height="1448"
          />
        </div>

        <div className="about-sebastian__divider" aria-hidden="true" />

        <div className="about-sebastian__content">
          <h2 id="about-sebastian-title">¿Quién está detrás de todo esto?</h2>

          <div className="about-sebastian__copy">
            <p className="about-sebastian__lead">Hola, soy Sebastián Acuña.</p>
            <p>
              Después de más de 30 años trabajando en gastronomía decidí reinventarme por
              completo para dedicarme al desarrollo de software y la Inteligencia Artificial.
            </p>
            <p>
              Hoy acompaño a empresas y emprendedores a transformar ideas en soluciones reales
              utilizando automatización, IA y tecnología moderna.
            </p>
            <p>Mi objetivo no es vender una página web o una aplicación.</p>
            <p>Mi objetivo es ayudarte a hacer crecer tu negocio.</p>
          </div>

          <a
            className="video-walk__button video-walk__button--primary about-sebastian__cta"
            href="https://wa.me/5491131772207?text=Hola%20Sebastián,%20vi%20tu%20sitio%20web%20y%20quiero%20contarte%20una%20idea."
            target="_blank"
            rel="noopener noreferrer"
          >
            Contame tu idea
          </a>

          <p className="about-sebastian__closing">
            Todas las grandes soluciones comenzaron con una simple conversación.
          </p>
        </div>
      </div>
    </section>
  )
}
