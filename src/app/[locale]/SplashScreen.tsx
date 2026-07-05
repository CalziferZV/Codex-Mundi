'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
  locale: string
  dict: any
}

export default function SplashScreen({ onComplete, locale, dict }: SplashScreenProps) {
  const [visible, setVisible] = useState(false)
  const [phraseVisible, setPhraseVisible] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)

  const phrases = dict?.site?.splashPhrases || ['El conocimiento es la luz del mundo']
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
  const subtitle = dict?.site?.splashSubtitle || 'Haz clic para entrar'

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200)
    const t2 = setTimeout(() => setPhraseVisible(true), 1200)
    const t3 = setTimeout(() => setHintVisible(true), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div
      onClick={onComplete}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 99999, cursor: 'pointer',
        background: 'linear-gradient(135deg, #0f1f3a 0%, #1a3a6a 25%, #2a5aaa 50%, #1a3a6a 75%, #0f1f3a 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Tahoma, sans-serif',
        transition: 'opacity 0.6s ease',
        opacity: 1,
      }}
    >
      <div style={{ textAlign: 'center', padding: 40 }}>
        <h1 style={{
          fontFamily: 'Tahoma, sans-serif', fontSize: 52, fontWeight: 'bold',
          color: '#ffffff', letterSpacing: 8, textTransform: 'uppercase',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 40px rgba(58,122,218,0.3)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.5s ease',
          margin: '0 0 20px 0',
        }}>
          Codex Mundi
        </h1>

        <div style={{
          width: visible ? 200 : 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          margin: '0 auto 24px',
          transition: 'width 1.3s ease 0.3s',
        }} />

        <p style={{
          fontFamily: 'Georgia, serif', fontSize: 17, fontStyle: 'italic',
          color: '#b8d4f8',
          opacity: phraseVisible ? 1 : 0,
          transform: phraseVisible ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 1s ease',
          maxWidth: 500, margin: '0 auto 28px',
          lineHeight: 1.6, textShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}>
          &ldquo;{randomPhrase}&rdquo;
        </p>

        <p style={{
          fontFamily: '"Courier New", monospace', fontSize: 11,
          color: 'rgba(255,255,255,0.5)', letterSpacing: 3, textTransform: 'uppercase',
          opacity: hintVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}>
          {subtitle}
        </p>

        <p style={{
          position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center',
          fontFamily: 'Tahoma, sans-serif', fontSize: 10,
          color: 'rgba(138,180,248,0.3)', letterSpacing: 2,
          opacity: hintVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}>
          Windows XP
        </p>
      </div>
    </div>
  )
}
