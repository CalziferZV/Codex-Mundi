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
  { titleKey: 'privacy.dataWeCollect', descKey: 'privacy.dataWeCollectDesc' },
  { titleKey: 'privacy.howWeUse', descKey: 'privacy.howWeUseDesc' },
  { titleKey: 'privacy.cookies', descKey: 'privacy.cookiesDesc' },
  { titleKey: 'privacy.yourRights', descKey: 'privacy.yourRightsDesc' },
  { titleKey: 'privacy.retention', descKey: 'privacy.retentionDesc' },
  { titleKey: 'privacy.thirdParty', descKey: 'privacy.thirdPartyDesc' },
  { titleKey: 'privacy.security', descKey: 'privacy.securityDesc' },
  { titleKey: 'privacy.changes', descKey: 'privacy.changesDesc' },
]

export default function PrivacyPage() {
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
            <h1>🔒 {t('privacy.title')}</h1>
            <p className="cm-meta mb-6">{t('privacy.lastUpdate')}</p>
            <p>{t('privacy.intro')}</p>
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
