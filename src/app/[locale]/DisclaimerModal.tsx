'use client'

import { useRouter } from 'next/navigation'

interface DisclaimerModalProps {
  onAccept: () => void
  locale: string
  dict: any
}

export default function DisclaimerModal({ onAccept, locale, dict }: DisclaimerModalProps) {
  const router = useRouter()
  const title = dict?.site?.title || 'Codex Mundi'
  const subtitle = dict?.site?.subtitle || ''
  const disclaimer = dict?.site?.disclaimer || ''

  return (
    <div className="cm-disclaimer-overlay">
      <div className="cm-disclaimer-window">
        <div className="cm-disclaimer-titlebar">
          <span>📜</span>
          <span>{title}</span>
        </div>

        <div className="cm-disclaimer-body">
          <p className="cm-disclaimer-subtitle">{subtitle}</p>

          <div className="cm-disclaimer-warning">
            <p className="cm-disclaimer-warning-title">
              {locale === 'es' ? '⚠ AVISO IMPORTANTE' : '⚠ IMPORTANT NOTICE'}
            </p>
            <p className="cm-disclaimer-warning-text">{disclaimer}</p>
          </div>

          <p className="cm-disclaimer-links">
            {locale === 'es' ? (
              <>Al continuar, aceptas nuestros{' '}
                <a onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>
                  Términos de Uso</a>
                {' '}y{' '}
                <a onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>
                  Política de Privacidad</a>.
              </>
            ) : (
              <>By continuing, you agree to our{' '}
                <a onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>
                  Terms of Service</a>
                {' '}and{' '}
                <a onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>
                  Privacy Policy</a>.
              </>
            )}
          </p>

          <div style={{ textAlign: 'center' }}>
            <button className="cm-btn-xp-accept" onClick={onAccept}>
              {dict?.common?.accept || 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
