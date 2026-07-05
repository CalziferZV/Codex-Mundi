'use client'

import { useState, useEffect } from 'react'

interface CookieBannerProps {
  locale: string
}

export default function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('codex_cookies_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('codex_cookies_consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  const text = locale === 'es'
    ? 'Codex Mundi utiliza cookies estrictamente funcionales (idioma, autenticación). Al continuar navegando, aceptas su uso.'
    : 'Codex Mundi uses strictly functional cookies (language, authentication). By continuing, you accept their use.'

  const linkText = locale === 'es' ? 'Más información' : 'More info'

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <span className="text-sm">
          {text}{' '}
          <a href={`/${locale}/legal/cookies`} className="cm-link underline text-xs">{linkText}</a>
        </span>
        <button className="cm-btn cm-btn-primary text-xs ml-3" onClick={accept}>
          {locale === 'es' ? 'Aceptar' : 'Accept'}
        </button>
      </div>
    </div>
  )
}
