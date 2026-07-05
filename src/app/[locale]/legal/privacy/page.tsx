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

export default function PrivacyPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => getDictValue(dict, path, path)
  const d = dict || {} as Dictionary

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
            <h2>{t('privacy.dataWeCollect')}</h2>
            <p>{t('privacy.dataWeCollectDesc')}</p>
            <h2>{t('privacy.howWeUse')}</h2>
            <p>{t('privacy.howWeUseDesc')}</p>
            <h2>{t('privacy.cookies')}</h2>
            <p>{t('privacy.cookiesDesc')}</p>
            <h2>{t('privacy.yourRights')}</h2>
            <p>{t('privacy.yourRightsDesc')}</p>
            <h2>{t('privacy.thirdParty')}</h2>
            <p>{t('privacy.thirdPartyDesc')}</p>
            <h2>{t('privacy.changes')}</h2>
            <p>{t('privacy.changesDesc')}</p>

            <hr className="cm-divider" />
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}</a>
          </div>
        </main>
      </div>
    </>
  )
}
