import { type ReactNode, useEffect } from 'react'
import './LegalPage.css'

type LegalPageProps = {
  title: string
  children: ReactNode
}

export const legalWhatsappUrl =
  'https://wa.me/5491131772207?text=Hola%20Sebasti%C3%A1n.%0A%0AVi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.'

export function LegalPage({ title, children }: LegalPageProps) {
  useEffect(() => {
    document.title = `${title} | Inteligente11 LAB`
  }, [title])

  return (
    <main className="legal-page">
      <div className="legal-page__ambient" aria-hidden="true" />

      <div className="legal-page__inner">
        <a className="legal-page__brand" href="/" aria-label="Inteligente11 LAB, volver al inicio">
          <img
            src="/images/branding/inteligente11-footer-logo.png"
            alt="Inteligente11 LAB"
            width="1536"
            height="1024"
          />
        </a>

        <header className="legal-page__header">
          <p className="legal-page__eyebrow">INTELIGENTE11 LAB</p>
          <h1>{title}</h1>
          <p className="legal-page__updated">Última actualización: 27 de julio de 2026</p>
        </header>

        <article className="legal-page__content">{children}</article>

        <a className="legal-page__back" href="/">
          <span aria-hidden="true">←</span> Volver al inicio
        </a>
      </div>
    </main>
  )
}
