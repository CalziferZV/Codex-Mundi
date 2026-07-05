'use client'

import { useParams, useRouter } from 'next/navigation'
import { getDictionary, getNestedValue, type Dictionary } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import CookieBanner from '../../CookieBanner'

function getDictValue(dict: Dictionary | null, path: string, fallback: string): string {
  if (!dict) return fallback
  const val = getNestedValue(dict, path)
  return val && val !== path ? val : fallback
}

const sections = [
  { titleKey: 'terms.contentNature', descKey: 'terms.contentNatureDesc' },
  { titleKey: 'terms.eligibility', descKey: 'terms.eligibilityDesc' },
  { titleKey: 'terms.userConduct', descKey: 'terms.userConductDesc' },
  { titleKey: 'terms.contributions', descKey: 'terms.contributionsDesc' },
  { titleKey: 'terms.disclaimer', descKey: 'terms.disclaimerDesc' },
  { titleKey: 'terms.termination', descKey: 'terms.terminationDesc' },
  { titleKey: 'terms.applicableLaw', descKey: 'terms.applicableLawDesc' },
]

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
            {sections.map((s) => (
              <div key={s.titleKey}>
                <h2>{t(s.titleKey)}</h2>
                <p>{t(s.descKey)}</p>
              </div>
            ))}
            <hr className="cm-divider" />
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>
              ← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
            </a>
          </div>
          <Footer locale={locale} t={t} />
        </main>
      </div>
      <CookieBanner locale={locale} />
    </>
  )
}
