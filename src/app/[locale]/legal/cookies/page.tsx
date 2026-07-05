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

export default function CookiesPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => getDictValue(dict, path, path)

  const items: { name: string; purpose: string; type: string; duration: string }[] =
    (dict as any)?.cookiesPolicy?.items || []

  return (
    <>
      <Header locale={locale} router={router} t={t} />
      <div className="cm-body">
        <Sidebar locale={locale} router={router} t={t} />
        <main className="cm-main">
          <div className="cm-content-box">
            <h1>🍪 {t('cookiesPolicy.title')}</h1>
            <p>{t('cookiesPolicy.intro')}</p>
            <h2>{t('cookiesPolicy.cookieList')}</h2>
            <table className="w-full border-collapse mb-4 text-sm">
              <thead>
                <tr className="bg-[var(--color-cm-sidebar-bg)]">
                  <th className="border border-[var(--color-cm-border)] p-2 text-left font-bold font-mono">Cookie</th>
                  <th className="border border-[var(--color-cm-border)] p-2 text-left font-bold font-mono">{locale === 'es' ? 'Propósito' : 'Purpose'}</th>
                  <th className="border border-[var(--color-cm-border)] p-2 text-left font-bold font-mono">{locale === 'es' ? 'Tipo' : 'Type'}</th>
                  <th className="border border-[var(--color-cm-border)] p-2 text-left font-bold font-mono">{locale === 'es' ? 'Duración' : 'Duration'}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td className="border border-[var(--color-cm-border)] p-2 font-mono">{item.name}</td>
                    <td className="border border-[var(--color-cm-border)] p-2">{item.purpose}</td>
                    <td className="border border-[var(--color-cm-border)] p-2">{item.type}</td>
                    <td className="border border-[var(--color-cm-border)] p-2">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>{t('cookiesPolicy.consent')}</p>
            <p>{t('cookiesPolicy.manage')}</p>
            <hr className="cm-divider" />
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}</a>
          </div>
        </main>
      </div>
    </>
  )
}
