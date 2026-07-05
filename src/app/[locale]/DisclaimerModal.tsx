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
      <div className="cm-disclaimer-box">
        <div className="text-3xl mb-3">📜</div>
        <h1>{title}</h1>
        <p className="italic text-gray-600 mb-4 text-sm">{subtitle}</p>

        <div className="cm-disclaimer-warning">
          <p className="font-bold text-red-700 mb-2">
            {locale === 'es' ? '⚠️ AVISO IMPORTANTE' : '⚠️ IMPORTANT NOTICE'}
          </p>
          <p>{disclaimer}</p>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          {locale === 'es' ? (
            <>Al continuar, aceptas nuestros{' '}
              <a className="cm-link underline" onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>Términos de Uso</a>
              {' '}y{' '}
              <a className="cm-link underline" onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>Política de Privacidad</a>.
            </>
          ) : (
            <>By continuing, you agree to our{' '}
              <a className="cm-link underline" onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>Terms of Service</a>
              {' '}and{' '}
              <a className="cm-link underline" onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>Privacy Policy</a>.
            </>
          )}
        </p>

        <button className="cm-btn cm-btn-primary text-base px-8 py-2" onClick={onAccept}>
          {dict?.common?.accept || 'Accept'}
        </button>
      </div>
    </div>
  )
}
