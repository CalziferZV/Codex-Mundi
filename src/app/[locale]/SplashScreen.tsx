'use client'

interface SplashScreenProps {
  onComplete: () => void
  locale: string
  dict: any
}

export default function SplashScreen({ onComplete, locale, dict }: SplashScreenProps) {
  const phrases = dict?.site?.splashPhrases || ['El conocimiento es la luz del mundo']
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
  const subtitle = dict?.site?.splashSubtitle || 'Haz clic para entrar'

  return (
    <div onClick={onComplete} className="splash-overlay">
      <div className="splash-content">
        <h1 className="splash-title">Codex Mundi</h1>
        <div className="splash-line" />
        <p className="splash-phrase" suppressHydrationWarning>
          &ldquo;{randomPhrase}&rdquo;
        </p>
        <p className="splash-hint">{subtitle}</p>
        <p className="splash-brand">Windows XP</p>
      </div>
    </div>
  )
}
