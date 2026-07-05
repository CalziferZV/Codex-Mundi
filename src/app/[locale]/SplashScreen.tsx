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
    <div
      className={`splash-overlay ${fadingOut ? 'splash-fade-out' : ''}`}
      onClick={handleEnter}
      style={{
        background: 'linear-gradient(135deg, #1a3a6a 0%, #2a5aaa 30%, #3a7ada 50%, #2a5aaa 70%, #1a3a6a 100%)',
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'opacity 0.8s ease',
        fontFamily: 'Tahoma, sans-serif',
      }}
    >
      <div className="splash-content" style={{
        textAlign: 'center', padding: 40, position: 'relative', zIndex: 2,
      }}>
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.2s ease',
          marginBottom: 20,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 80, height: 80,
            background: 'linear-gradient(135deg, #3a7ada, #1a3a6a)',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.4)',
          }}>
            <span style={{ fontSize: 36 }}>📖</span>
          </div>
        </div>

        <h1 style={{
          fontFamily: 'Tahoma, sans-serif', fontSize: 52, fontWeight: 'bold',
          color: '#ffffff', letterSpacing: 8, textTransform: 'uppercase',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 40px rgba(58,122,218,0.3)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.5s ease',
          margin: '0 0 12px 0',
        }}>
          Codex Mundi
        </h1>

        <div style={{
          width: visible ? 200 : 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          margin: '0 auto 20px',
          transition: 'width 1.5s ease 0.5s',
        }} />

        <p style={{
          fontFamily: 'Georgia, serif', fontSize: 17, fontStyle: 'italic',
          color: '#b8d4f8', opacity: phraseVisible ? 1 : 0,
          transform: phraseVisible ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 1.2s ease', maxWidth: 500, margin: '0 auto 28px',
          lineHeight: 1.6, textShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}>
          &ldquo;{randomPhrase}&rdquo;
        </p>

        <p style={{
          fontFamily: '"Courier New", monospace', fontSize: 11,
          color: 'rgba(255,255,255,0.4)', letterSpacing: 3, textTransform: 'uppercase',
          opacity: hintVisible ? 1 : 0, transition: 'all 1s ease',
        }}>
          {subtitle}
        </p>

        <div style={{
          position: 'absolute', bottom: -60, left: 0, right: 0,
          textAlign: 'center', opacity: hintVisible ? 0.3 : 0,
          transition: 'opacity 1s ease',
          fontFamily: 'Tahoma, sans-serif', fontSize: 10, color: '#8ab4f8',
          letterSpacing: 1,
        }}>
          Windows XP
        </div>
      </div>
    </div>
  )
}
