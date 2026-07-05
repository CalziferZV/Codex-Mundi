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
    <div style={{
      background: 'linear-gradient(135deg, rgba(20,40,80,0.95), rgba(40,70,140,0.95))',
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Tahoma, sans-serif',
    }}>
      <div style={{
        background: '#ece9d8',
        border: '3px solid',
        borderColor: '#ffffff #808080 #808080 #ffffff',
        maxWidth: 520, width: '90%',
        boxShadow: '6px 6px 20px rgba(0,0,0,0.5)',
        fontFamily: 'Tahoma, sans-serif',
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #0a2c7a, #316ac5)',
          padding: '6px 12px',
          color: 'white',
          fontSize: 13,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span>📜</span>
          <span>{title}</span>
        </div>

        <div style={{ padding: 20 }}>
          <p style={{
            fontStyle: 'italic', color: '#555', fontSize: 12, marginBottom: 14,
          }}>
            {subtitle}
          </p>

          <div style={{
            border: '2px dashed #cc3333',
            background: '#fff5f5',
            padding: '12px 14px',
            marginBottom: 14,
          }}>
            <p style={{ fontWeight: 'bold', color: '#cc3333', fontSize: 12, marginBottom: 6 }}>
              {locale === 'es' ? '⚠ AVISO IMPORTANTE' : '⚠ IMPORTANT NOTICE'}
            </p>
            <p style={{ fontSize: 11, lineHeight: 1.6, color: '#333' }}>
              {disclaimer}
            </p>
          </div>

          <p style={{ fontSize: 11, color: '#666', marginBottom: 16, lineHeight: 1.5 }}>
            {locale === 'es' ? (
              <>Al continuar, aceptas nuestros{' '}
                <a style={{ color: '#0000cc', textDecoration: 'underline', cursor: 'pointer' }}
                   onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>
                  Términos de Uso</a>
                {' '}y{' '}
                <a style={{ color: '#0000cc', textDecoration: 'underline', cursor: 'pointer' }}
                   onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>
                  Política de Privacidad</a>.
              </>
            ) : (
              <>By continuing, you agree to our{' '}
                <a style={{ color: '#0000cc', textDecoration: 'underline', cursor: 'pointer' }}
                   onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/terms`) }}>
                  Terms of Service</a>
                {' '}and{' '}
                <a style={{ color: '#0000cc', textDecoration: 'underline', cursor: 'pointer' }}
                   onClick={(e) => { e.stopPropagation(); router.push(`/${locale}/legal/privacy`) }}>
                  Privacy Policy</a>.
              </>
            )}
          </p>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onAccept}
              style={{
                border: '3px solid',
                borderColor: '#ffffff #808080 #808080 #ffffff',
                background: '#3c9c30',
                color: 'white',
                padding: '6px 30px',
                fontFamily: 'Tahoma, sans-serif',
                fontSize: 14,
                fontWeight: 'bold',
                cursor: 'pointer',
                outline: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#4bbc3e' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3c9c30' }}
              onMouseDown={(e) => {
                e.currentTarget.style.borderColor = '#808080 #ffffff #ffffff #808080'
                e.currentTarget.style.background = '#2a7a20'
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.borderColor = '#ffffff #808080 #808080 #ffffff'
                e.currentTarget.style.background = '#4bbc3e'
              }}
            >
              {dict?.common?.accept || 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
