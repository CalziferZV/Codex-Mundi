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

export default function TermsPage() {
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
            <h1>⚖️ {t('terms.title')}</h1>
            <p className="cm-meta mb-6">{t('terms.lastUpdate')}</p>
            <p>{t('terms.intro')}</p>
            <h2>{t('terms.contentNature')}</h2>
            <p>{t('terms.contentNatureDesc')}</p>
            <h2>{t('terms.userConduct')}</h2>
            <p>{t('terms.userConductDesc')}</p>
            <h2>{t('terms.contributions')}</h2>
            <p>{t('terms.contributionsDesc')}</p>
            <h2>{t('terms.disclaimer')}</h2>
            <p>{t('terms.disclaimerDesc')}</p>
            <h2>{t('terms.termination')}</h2>
            <p>{t('terms.terminationDesc')}</p>
            <hr className="cm-divider" />
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}</a>
          </div>
        </main>
      </div>
    </>
  )
}
