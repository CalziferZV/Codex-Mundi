'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
  locale: string
  dict: any
}

export default function SplashScreen({ onComplete, locale, dict }: SplashScreenProps) {
  const [visible, setVisible] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [phraseVisible, setPhraseVisible] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  const phrases = dict?.site?.splashPhrases || []
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
  const subtitle = dict?.site?.splashSubtitle || ''

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 300)
    const t2 = setTimeout(() => setPhraseVisible(true), 1800)
    const t3 = setTimeout(() => setHintVisible(true), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const handleEnter = () => {
    setFadingOut(true)
    setTimeout(onComplete, 800)
  }

  return (
    <div className={`splash-xp ${fadingOut ? 'splash-fade-out' : ''}`} onClick={handleEnter}>
      <div className="splash-xp-inner">
        <div className={`splash-xp-icon-box ${visible ? 'splash-visible' : ''}`}>
          <div className="splash-xp-icon">
            <span>📖</span>
          </div>
        </div>

        <h1 className={`splash-xp-title ${visible ? 'splash-visible' : ''}`}>
          Codex Mundi
        </h1>

        <div className={`splash-xp-line ${visible ? 'splash-visible' : ''}`} />

        <p className={`splash-xp-phrase ${phraseVisible ? 'splash-visible' : ''}`}>
          &ldquo;{randomPhrase}&rdquo;
        </p>

        <p className={`splash-xp-hint ${hintVisible ? 'splash-visible' : ''}`}>
          {subtitle}
        </p>
      </div>

      <div className={`splash-xp-brand ${hintVisible ? 'splash-visible' : ''}`}>
        Windows XP
      </div>
    </div>
  )
}
