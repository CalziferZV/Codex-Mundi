'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { seedData } from '@/lib/seed'
import { truncate } from '@/lib/utils'
import SplashScreen from './SplashScreen'
import DisclaimerModal from './DisclaimerModal'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

const realityColors: Record<string, string> = {
  historical: '#2d5a8a',
  scientific: '#2d7a3a',
  hypothesis: '#8a6d2d',
  theoretical: '#6d2d8a',
  mythological: '#8a2d4a',
  speculative: '#8a5a2d',
  conspiratorial: '#8a2d2d',
  fiction: '#4a6a8a',
  philosophical: '#3a6a6a',
  unclassified: '#666666',
}

type Phase = 'splash' | 'disclaimer' | 'library'

export default function HomePage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const [phase, setPhase] = useState<Phase>('splash')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (localStorage.getItem('codex_intro_done')) {
      setPhase('library')
    }
  }, [])

  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const rootCategories = seedData.categories.filter(c => !c.parentId)
  const recentEntries = [...seedData.entries].slice(0, 4)

  const getEntryCount = (categoryId: string) =>
    seedData.entries.filter(e => e.categoryId === categoryId).length

  if (!mounted) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 99999,
        background: 'linear-gradient(135deg, #0f1f3a 0%, #1a3a6a 25%, #2a5aaa 50%, #1a3a6a 75%, #0f1f3a 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Tahoma, sans-serif',
      }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 80, height: 80,
            background: 'linear-gradient(135deg, #3a7ada, #1a3a6a)',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 16px rgba(0,0,0,0.5)',
            fontSize: 36, marginBottom: 24,
          }}>
            📖
          </div>
          <h1 style={{
            fontFamily: 'Tahoma, sans-serif', fontSize: 52, fontWeight: 'bold',
            color: '#ffffff', letterSpacing: 8, textTransform: 'uppercase',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            margin: '0 0 12px 0',
          }}>
            Codex Mundi
          </h1>
          <div style={{
            width: 200, height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            margin: '0 auto 24px',
          }} />
        </div>
      </div>
    )
  }

  if (phase === 'splash') {
    return <SplashScreen onComplete={() => setPhase('disclaimer')} locale={locale} dict={dict} />
  }

  if (phase === 'disclaimer') {
    return <DisclaimerModal onAccept={() => {
      localStorage.setItem('codex_intro_done', 'true')
      setPhase('library')
    }} locale={locale} dict={dict} />
  }

  return (
    <>
      <Header locale={locale} router={router} t={t} />
      <div className="cm-body">
        <Sidebar locale={locale} router={router} t={t} />

        <main className="cm-main">
          <div className="cm-content-box">
            <h1>{t('site.title')}</h1>
            <p className="mt-2" style={{ fontSize: 13, color: '#444' }}>{t('site.subtitle')}</p>
            <p style={{ fontSize: 11, color: '#666', marginTop: 4 }}>{t('site.description')}</p>

            <div className="cm-stats">
              <div className="cm-stat">
                <div className="cm-stat-number">{seedData.entries.length}</div>
                <div className="cm-stat-label">{t('home.totalEntries')}</div>
              </div>
              <div className="cm-stat">
                <div className="cm-stat-number">{seedData.categories.length}</div>
                <div className="cm-stat-label">{locale === 'es' ? 'categorías' : 'categories'}</div>
              </div>
              <div className="cm-stat">
                <div className="cm-stat-number">{seedData.subsections.length}</div>
                <div className="cm-stat-label">{locale === 'es' ? 'subsecciones' : 'subsections'}</div>
              </div>
            </div>
          </div>

          <div className="cm-content-box">
            <h1>{locale === 'es' ? 'Explorar categorías' : 'Browse categories'}</h1>
            <div className="cm-grid-2">
              {rootCategories.map((cat) => {
                const name = locale === 'es' ? cat.name_es : cat.name_en
                const desc = locale === 'es' ? cat.description_es : cat.description_en
                const subCats = seedData.categories.filter(c => c.parentId === cat.id)
                const entryCount = getEntryCount(cat.id) + subCats.reduce((s, c) => s + getEntryCount(c.id), 0)
                return (
                  <div
                    key={cat.id}
                    className="cm-card"
                    onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
                  >
                    <div className="cm-card-title">{cat.icon} {name}</div>
                    <div className="cm-card-excerpt">{truncate(desc, 120)}</div>
                    <div className="cm-meta mt-1">
                      {subCats.length} subcategorías · {entryCount} {t('home.totalEntries')}
                    </div>
                  </div>
                )
              })}
            </div>
            <hr className="cm-divider" />
            <div className="cm-meta">
              {locale === 'es'
                ? 'Haz clic en cualquier categoría para explorar su contenido.'
                : 'Click any category to explore its content.'}
            </div>
          </div>

          <div className="cm-content-box">
            <h1>{t('home.recentEntries')}</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #d4d0c8' }}>
                  <th style={{ textAlign: 'left', padding: '4px 8px', fontSize: 11, color: '#666' }}>
                    {locale === 'es' ? 'Entrada' : 'Entry'}
                  </th>
                  <th style={{ textAlign: 'left', padding: '4px 8px', fontSize: 11, color: '#666' }}>
                    {locale === 'es' ? 'Categoría' : 'Category'}
                  </th>
                  <th style={{ textAlign: 'left', padding: '4px 8px', fontSize: 11, color: '#666' }}>
                    {locale === 'es' ? 'Estado' : 'Status'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentEntries.map((entry) => {
                  const title = locale === 'es' ? entry.title_es : entry.title_en
                  const excerpt = locale === 'es' ? entry.excerpt_es : entry.excerpt_en
                  const cat = seedData.categories.find(c => c.id === entry.categoryId)
                  const catName = cat ? (locale === 'es' ? cat.name_es : cat.name_en) : ''
                  return (
                    <tr
                      key={entry.id}
                      className="cm-card"
                      style={{ cursor: 'pointer', borderBottom: '1px solid #ece9d8' }}
                      onClick={() => router.push(`/${locale}/entry/${entry.slug}`)}
                    >
                      <td style={{ padding: '8px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: 12 }}>{title}</div>
                        <div className="cm-card-excerpt">{truncate(excerpt, 100)}</div>
                      </td>
                      <td style={{ padding: '8px', fontSize: 11, color: '#666', verticalAlign: 'top' }}>
                        {cat?.icon} {catName}
                      </td>
                      <td style={{ padding: '8px', verticalAlign: 'top' }}>
                        <span className="cm-tag">{getNestedValue(dict, `reality.${entry.realityStatus}`)}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="cm-content-box">
            <h1>{locale === 'es' ? 'Clasificación por realidad' : 'Reality classification'}</h1>
            <p className="cm-meta" style={{ marginBottom: 8 }}>
              {locale === 'es'
                ? 'Cada entrada está clasificada según su nivel de verificabilidad:'
                : 'Each entry is classified according to its level of verifiability:'}
            </p>
            <div className="cm-legend">
              {Object.entries(realityColors).map(([key, color]) => (
                <div key={key} className="cm-legend-item">
                  <div className="cm-legend-dot" style={{ background: color }} />
                  <div>
                    <div className="cm-legend-label">
                      {getNestedValue(dict, `reality.${key}`)}
                    </div>
                    <div className="cm-legend-desc">
                      {locale === 'es'
                        ? realityDescriptions.es[key]
                        : realityDescriptions.en[key]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer locale={locale} t={t} />
        </main>
      </div>
      <CookieBanner locale={locale} />
    </>
  )
}

const realityDescriptions: Record<string, Record<string, string>> = {
  es: {
    historical: 'Respaldado por evidencia documental',
    scientific: 'Basado en el método científico',
    hypothesis: 'Propuesta no confirmada ni refutada',
    theoretical: 'Construcción sin validación empírica',
    mythological: 'Mitos, leyendas y tradición oral',
    speculative: 'Sin base sólida verificable',
    conspiratorial: 'Contradice la narrativa oficial',
    fiction: 'Literatura, arte o ficción',
    philosophical: 'Reflexión sin pretensión factual',
    unclassified: 'Pendiente de categorización',
  },
  en: {
    historical: 'Supported by documentary evidence',
    scientific: 'Based on the scientific method',
    hypothesis: 'Not yet confirmed or refuted',
    theoretical: 'No direct empirical validation',
    mythological: 'Myths, legends, and oral tradition',
    speculative: 'Without solid verifiable basis',
    conspiratorial: 'Contradicts the official narrative',
    fiction: 'From literature, art, or fiction',
    philosophical: 'No claim to factual truth',
    unclassified: 'Pending categorization',
  },
}
