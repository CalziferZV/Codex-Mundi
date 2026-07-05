'use client'

import { useParams, useRouter } from 'next/navigation'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import Header from '@/app/[locale]/Header'
import Sidebar from '@/app/[locale]/Sidebar'

export default function RegisterPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  return (
    <>
      <Header locale={locale} router={router} t={t} />
      <div className="cm-body">
        <Sidebar locale={locale} router={router} t={t} />
        <main className="cm-main" style={{ margin: '0 auto', maxWidth: 500 }}>
          <div className="cm-content-box text-center">
            <h1>🔐 {t('auth.registerTitle')}</h1>
            <p className="text-gray-500 my-4">
              {locale === 'es'
                ? 'El registro de usuarios no está disponible por ahora.'
                : 'User registration is not available at this time.'}
            </p>
            <button className="cm-btn cm-btn-primary" onClick={() => router.push(`/${locale}`)}>
              ← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
