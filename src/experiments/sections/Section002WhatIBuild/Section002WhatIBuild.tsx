import { type SyntheticEvent, useEffect, useRef, useState } from 'react'
import './Section002WhatIBuild.css'

const services = [
  {
    title: 'Páginas Web',
    description: 'Sitios rápidos, modernos y optimizados para convertir visitantes en clientes.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: 'Automatizaciones',
    description: 'Procesos inteligentes que trabajan por vos las 24 horas.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8.2 5.3A7.5 7.5 0 0 1 19 9l2-1v5h-5l2-1a5.5 5.5 0 0 0-9.1-4.8M15.8 18.7A7.5 7.5 0 0 1 5 15l-2 1v-5h5l-2 1a5.5 5.5 0 0 0 9.1 4.8" />
        <path d="m10.5 9 4 3-4 3Z" />
      </svg>
    ),
  },
  {
    title: 'Aplicaciones',
    description: 'Software a medida diseñado para hacer crecer tu negocio.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="2.5" width="14" height="19" rx="3" />
        <path d="M9 6h6M8.5 10h7v6h-7zM11 18.5h2" />
      </svg>
    ),
  },
]

export function Section002WhatIBuild() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
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
      { threshold: 0.18 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncVideoPlayback = () => {
      const video = videoRef.current

      if (!video) {
        return
      }

      if (motionPreference.matches) {
        video.pause()
        video.currentTime = 0
        return
      }

      void video.play()
    }

    syncVideoPlayback()
    motionPreference.addEventListener('change', syncVideoPlayback)

    return () => motionPreference.removeEventListener('change', syncVideoPlayback)
  }, [])

  const handleVideoTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget

    if (video.currentTime >= 7) {
      video.currentTime = 0
      void video.play()
    }
  }

  return (
    <section
      className={`what-i-build${isVisible ? ' what-i-build--visible' : ''}`}
      ref={sectionRef}
      aria-labelledby="what-i-build-title"
    >
      <video
        className="what-i-build__media"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onTimeUpdate={handleVideoTimeUpdate}
      >
        <source src="/videos/backgrounds/what-i-build-background.mp4" type="video/mp4" />
      </video>

      <div className="what-i-build__overlay" aria-hidden="true" />

      <div className="what-i-build__inner">
        <header className="what-i-build__header">
          <h2 className="what-i-build__label" id="what-i-build-title">
            SERVICIOS
          </h2>
        </header>

        <div className="what-i-build__grid">
          {services.map((service) => (
            <article className="what-i-build__card" key={service.title}>
              <div className="what-i-build__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="what-i-build__arrow" aria-hidden="true">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
