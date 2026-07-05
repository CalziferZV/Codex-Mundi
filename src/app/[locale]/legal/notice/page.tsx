'use client'

import { useParams, useRouter } from 'next/navigation'
import { getDictionary, getNestedValue, type Dictionary } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import Header from '../../Header'
import Sidebar from '../../Sidebar'

function getDictValue(dict: Dictionary | null, path: string, fallback: string): string {
  if (!dict) return fallback
  const val = getNestedValue(dict, path)
  return val && val !== path ? val : fallback
}

export default function LegalNoticePage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => getDictValue(dict, path, path)

  return (
    <>
      <Header locale={locale} router={router} t={t} />
      <div className="cm-body">
        <Sidebar locale={locale} router={router} t={t} />
        <main className="cm-main">
          <div className="cm-content-box">
            <h1>📋 {t('legal.title')}</h1>
            <h2>{t('legal.responsible')}</h2>
            <p>{t('legal.responsibleDesc')}</p>
            <h2>{locale === 'es' ? 'Contacto' : 'Contact'}</h2>
            <p>{t('legal.contact')}</p>
            <h2>{locale === 'es' ? 'Propósito' : 'Purpose'}</h2>
            <p>{t('legal.purpose')}</p>
            <h2>{t('legal.intellectualProperty')}</h2>
            <p>{t('legal.intellectualPropertyDesc')}</p>
            <hr className="cm-divider" />
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}</a>
          </div>
        </main>
      </div>
    </>
  )
}
