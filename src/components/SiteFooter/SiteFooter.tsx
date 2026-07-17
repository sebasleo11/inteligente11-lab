import { BriefcaseBusiness, Camera, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './SiteFooter.css'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sebastianacuna-creadordigital',
    Icon: BriefcaseBusiness,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/inteligente.11/',
    Icon: Camera,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@InteliGENTE11',
    Icon: Play,
  },
]

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer || !('IntersectionObserver' in window)) {
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
      { threshold: 0.2 },
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      className={`site-footer${isVisible ? ' site-footer--visible' : ''}`}
      ref={footerRef}
    >
      <div className="site-footer__inner">
        <p className="site-footer__copyright">
          © 2026 Inteligente11 — Sebastián Acuña.
          <br />
          Todos los derechos reservados.
        </p>

        <nav className="site-footer__socials" aria-label="Redes sociales">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon aria-hidden="true" strokeWidth={1.7} />
            </a>
          ))}
        </nav>

        <img
          className="site-footer__logo"
          src="/images/branding/inteligente11-footer-logo.png"
          alt="Inteligente11"
          width="1536"
          height="1024"
        />
      </div>
    </footer>
  )
}
