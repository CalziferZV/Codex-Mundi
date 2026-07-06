'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { seedData } from '@/lib/seed'
import { truncate } from '@/lib/utils'
import RealityTag, { realityColors } from '@/components/RealityTag'
import SplashScreen from './SplashScreen'
import DisclaimerModal from './DisclaimerModal'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

type Phase = 'splash' | 'disclaimer' | 'library'

function XpPanel({ title, defaultOpen, children }: { title: string; defaultOpen: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="cm-content-box">
      <div className="cm-panel-header" onClick={() => setOpen(!open)}>
        <h1>{title}</h1>
        <span className="cm-panel-toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  )
}

export default function HomePage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const [phase, setPhase] = useState<Phase>('splash')
  const [searchQuery, setSearchQuery] = useState('')
  const [randomEntry, setRandomEntry] = useState<typeof seedData.entries[0] | null>(null)
  const [dismissNotice, setDismissNotice] = useState(false)
  const [expandedCat, setExpandedCat] = useState<string | null>(null)

  useEffect(() => {
    const idx = Math.floor(Math.random() * seedData.entries.length)
    setRandomEntry(seedData.entries[idx])
    if (localStorage.getItem('codex_intro_done') === 'true') {
      setPhase('library')
    }
  }, [])

  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const rootCategories = seedData.categories.filter(c => !c.parentId)
  const totalEntries = seedData.entries.length
  const totalCategories = seedData.categories.length
  const totalSubsections = seedData.subsections.length

  const getEntryCount = (categoryId: string) =>
    seedData.entries.filter(e => e.categoryId === categoryId).length

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
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
          {/* Breadcrumb */}
          <div className="cm-breadcrumb">
            <a onClick={() => router.push(`/${locale}`)}>{t('site.title')}</a>
            <span>▸</span>
            <span>{locale === 'es' ? 'Inicio' : 'Home'}</span>
          </div>

          {/* Quick Actions */}
          <div className="cm-quick-actions">
            <button className="cm-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {locale === 'es' ? '⬆ Subir arriba' : '⬆ Top of page'}
            </button>
            <button className="cm-btn" title={locale === 'es' ? 'Abrir una entrada al azar' : 'Open a random entry'} onClick={() => {
              const all = seedData.entries
              const r = all[Math.floor(Math.random() * all.length)]
              router.push(`/${locale}/entry/${r.slug}`)
            }}>
              🎲 {locale === 'es' ? 'Entrada aleatoria' : 'Random entry'}
            </button>
            <button className="cm-btn" title={locale === 'es' ? 'Ir a la entrada más reciente' : 'Go to the latest entry'} onClick={() => {
              const last = [...seedData.entries].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]
              router.push(`/${locale}/entry/${last.slug}`)
            }}>
              🕐 {locale === 'es' ? 'Última actualizada' : 'Latest updated'}
            </button>
            <button className="cm-btn" title={locale === 'es' ? 'Categoría de Historia' : 'History category'} onClick={() => router.push(`/${locale}/categories/history`)}>
              📜 {locale === 'es' ? 'Ir a Historia' : 'Go to History'}
            </button>
          </div>

          {/* Search on page */}
          <div className="cm-search-page">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>{t('search.title')}</button>
          </div>

          {/* Notification */}
          {!dismissNotice && (
            <div className="cm-notification">
              <span>
                {locale === 'es'
                  ? `📢 Codex Mundi contiene ${totalEntries} entradas, ${totalCategories} categorías y ${totalSubsections} subsecciones. ¡Explora y contribuye!`
                  : `📢 Codex Mundi contains ${totalEntries} entries, ${totalCategories} categories, and ${totalSubsections} subsections. Explore and contribute!`}
              </span>
              <button className="cm-notification-close" onClick={() => setDismissNotice(true)}>✕</button>
            </div>
          )}

          {/* Panel 1: Welcome + Stats + Progress */}
          <XpPanel title={locale === 'es' ? 'Bienvenido a Codex Mundi' : 'Welcome to Codex Mundi'} defaultOpen={true}>
            <p style={{ fontSize: 12, color: '#555', marginBottom: 4 }}>{t('site.subtitle')}</p>
            <p style={{ fontSize: 11, color: '#666', marginBottom: 12 }}>{t('site.description')}</p>

            <div className="cm-stats">
              <div className="cm-stat"><div className="cm-stat-number">{totalEntries}</div><div className="cm-stat-label">{t('home.totalEntries')}</div></div>
              <div className="cm-stat"><div className="cm-stat-number">{totalCategories}</div><div className="cm-stat-label">{locale === 'es' ? 'categorías' : 'categories'}</div></div>
              <div className="cm-stat"><div className="cm-stat-number">{totalSubsections}</div><div className="cm-stat-label">{locale === 'es' ? 'subsecciones' : 'subsections'}</div></div>
            </div>

            <div className="cm-progress-wrap">
              <div className="cm-progress-label">
                {locale === 'es' ? 'Progreso del archivo' : 'Archive progress'}
              </div>
              <div className="cm-progress-bar">
                {(() => {
                  const target = 350
                  const pct = Math.min(Math.round((totalEntries / target) * 100), 100)
                  return (
                    <div className="cm-progress-fill" style={{ width: `${pct}%` }}>
                      <div className="cm-progress-text">{pct}%</div>
                    </div>
                  )
                })()}
                <div className="cm-progress-text" style={{ color: '#333' }}>
                  {totalEntries}/{locale === 'es' ? '350 meta' : '350 target'}
                </div>
              </div>
            </div>
          </XpPanel>

          {/* Panel 2: New entries announcement */}
          <XpPanel title={locale === 'es' ? '🎉 Nuevas entradas añadidas' : '🎉 New entries added'} defaultOpen={true}>
            <div style={{ fontSize: 12, color: '#333', padding: '8px 12px', background: '#ffffcc', border: '1px solid #e5c100', borderRadius: 3, marginBottom: 8 }}>
              {locale === 'es'
                ? 'Se han añadido 200 nuevas entradas a Codex Mundi, ampliando las siguientes áreas:'
                : '200 new entries have been added to Codex Mundi, expanding the following areas:'}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '4px 0' }}>
              {[
                { id: 'cat-history', slug: 'history', icon: '📜', es: 'Historia', en: 'History' },
                { id: 'cat-religion', slug: 'religion-mythology', icon: '📖', es: 'Religión y Mitología', en: 'Religion & Mythology' },
                { id: 'cat-philosophy', slug: 'philosophy', icon: '🧠', es: 'Filosofía', en: 'Philosophy' },
                { id: 'cat-science', slug: 'science', icon: '🔬', es: 'Ciencia', en: 'Science' },
                { id: 'cat-technology', slug: 'technology', icon: '💻', es: 'Tecnología', en: 'Technology' },
                { id: 'cat-arts', slug: 'arts-culture', icon: '🎨', es: 'Arte y Cultura', en: 'Arts & Culture' },
                { id: 'cat-mysteries', slug: 'mysteries-phenomena', icon: '❓', es: 'Misterios y Fenómenos', en: 'Mysteries & Phenomena' },
              ].map((cat) => (
                <span
                  key={cat.id}
                  className="cm-tag"
                  style={{ cursor: 'pointer', padding: '4px 10px' }}
                  onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
                >
                  {cat.icon} {locale === 'es' ? cat.es : cat.en}
                </span>
              ))}
            </div>
          </XpPanel>

          {/* Panel 3: Categories with expand */}
          <XpPanel title={locale === 'es' ? 'Explorar categorías' : 'Browse categories'} defaultOpen={true}>
            <div className="cm-grid-2">
              {rootCategories.map((cat) => {
                const name = locale === 'es' ? cat.name_es : cat.name_en
                const desc = locale === 'es' ? cat.description_es : cat.description_en
                const subCats = seedData.categories.filter(c => c.parentId === cat.id)
                const entryCount = getEntryCount(cat.id) + subCats.reduce((s, c) => s + getEntryCount(c.id), 0)
                const isExpanded = expandedCat === cat.id
                return (
                  <div key={cat.id}>
                    <div
                      className="cm-card"
                      onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
                    >
                      <div className="cm-card-title">{cat.icon} {name}</div>
                      <div className="cm-card-excerpt">{truncate(desc, 120)}</div>
                      <div className="cm-meta mt-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{subCats.length} {locale === 'es' ? 'subcategorías' : 'subcats'} · {entryCount} {t('home.totalEntries')}</span>
                        {subCats.length > 0 && (
                          <span
                            className="cm-link"
                            style={{ fontSize: 10 }}
                            onClick={(e) => { e.stopPropagation(); setExpandedCat(isExpanded ? null : cat.id) }}
                          >
                            {isExpanded ? '▲ colapsar' : '▼ ver'}
                          </span>
                        )}
                      </div>
                    </div>
                    {isExpanded && (
                      <div className="cm-cat-expand">
                        {subCats.map((sub) => {
                          const subName = locale === 'es' ? sub.name_es : sub.name_en
                          const subCount = getEntryCount(sub.id)
                          return (
                            <div
                              key={sub.id}
                              className="cm-cat-expand-item"
                              onClick={() => router.push(`/${locale}/categories/${sub.slug}`)}
                            >
                              {sub.icon} {subName} ({subCount})
                            </div>
                          )
                        })}
                        {seedData.entries.filter(e => e.categoryId === cat.id).map((entry) => {
                          const title = locale === 'es' ? entry.title_es : entry.title_en
                          return (
                            <div
                              key={entry.id}
                              className="cm-cat-expand-item"
                              style={{ paddingLeft: 16 }}
                              onClick={() => router.push(`/${locale}/entry/${entry.slug}`)}
                            >
                              📄 {title}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </XpPanel>

          {/* Random Entry Card */}
          {randomEntry && (
            <div className="cm-random-card">
              <div className="cm-random-card-icon">📖</div>
              <div className="cm-random-card-body">
                <div className="cm-random-card-title" onClick={() => router.push(`/${locale}/entry/${randomEntry.slug}`)}>
                  {locale === 'es' ? randomEntry.title_es : randomEntry.title_en}
                </div>
                <div className="cm-random-card-excerpt">
                  {truncate(locale === 'es' ? randomEntry.excerpt_es : randomEntry.excerpt_en, 200)}
                </div>
                <div className="cm-meta" style={{ marginTop: 4 }}>
                  <RealityTag status={randomEntry.realityStatus} dict={dict} />
                  <span style={{ marginLeft: 8 }}>
                    {locale === 'es' ? 'Entrada aleatoria' : 'Random entry'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Panel 3: Recent Entries */}
          <XpPanel title={t('home.recentEntries')} defaultOpen={true}>
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
                {[...seedData.entries].slice(0, 1000).map((entry) => {
                  const title = locale === 'es' ? entry.title_es : entry.title_en
                  const excerpt = locale === 'es' ? entry.excerpt_es : entry.excerpt_en
                  const cat = seedData.categories.find(c => c.id === entry.categoryId)
                  return (
                    <tr key={entry.id} className="cm-card" style={{ cursor: 'pointer', borderBottom: '1px solid #ece9d8' }}
                        onClick={() => router.push(`/${locale}/entry/${entry.slug}`)}>
                      <td style={{ padding: '8px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: 12 }}>{title}</div>
                        <div className="cm-card-excerpt">{truncate(excerpt, 100)}</div>
                      </td>
                      <td style={{ padding: '8px', fontSize: 11, color: '#666', verticalAlign: 'top' }}>
                        {cat?.icon} {cat ? (locale === 'es' ? cat.name_es : cat.name_en) : ''}
                      </td>
                      <td style={{ padding: '8px', verticalAlign: 'top' }}>
                        <RealityTag status={entry.realityStatus} dict={dict} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </XpPanel>

          {/* Panel 4: Knowledge Map */}
          <XpPanel title={locale === 'es' ? '🗺️ Mapa del conocimiento' : '🗺️ Knowledge map'} defaultOpen={false}>
            <div className="cm-map">
              {rootCategories.map((cat) => {
                const catName = locale === 'es' ? cat.name_es : cat.name_en
                const subCats = seedData.categories.filter(c => c.parentId === cat.id)
                const catEntries = seedData.entries.filter(e => {
                  const ids = [cat.id, ...subCats.map(c => c.id)]
                  return ids.includes(e.categoryId)
                })
                return (
                  <div key={cat.id} className="cm-map-node">
                    <div className="cm-map-node-title" onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}>
                      {cat.icon} {catName} ({catEntries.length})
                    </div>
                    <div className="cm-map-children">
                      {subCats.map((sub) => {
                        const subName = locale === 'es' ? sub.name_es : sub.name_en
                        const subEntries = seedData.entries.filter(e => e.categoryId === sub.id)
                        return (
                          <div key={sub.id} className="cm-map-child"
                               onClick={() => router.push(`/${locale}/categories/${sub.slug}`)}>
                            {sub.icon} {subName} ({subEntries.length})
                          </div>
                        )
                      })}
                      {catEntries.filter(e => e.categoryId === cat.id).map((entry) => {
                        const title = locale === 'es' ? entry.title_es : entry.title_en
                        return (
                          <div key={entry.id} className="cm-map-child"
                               onClick={() => router.push(`/${locale}/entry/${entry.slug}`)}>
                            📄 {title}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </XpPanel>

          {/* Panel 5: Reality Legend */}
          <XpPanel title={locale === 'es' ? 'Clasificación por realidad' : 'Reality classification'} defaultOpen={false}>
            <p className="cm-meta" style={{ marginBottom: 8 }}>
              {locale === 'es'
                ? 'Cada entrada está clasificada según su nivel de verificabilidad. Pasa el ratón sobre cada una para más detalles.'
                : 'Each entry is classified by verifiability level. Hover each for details.'}
            </p>
            <div className="cm-legend">
              {Object.entries(realityColors).map(([key, color]) => (
                <div key={key} className="cm-legend-item"
                  title={locale === 'es' ? realityDescriptions.es[key] : realityDescriptions.en[key]}>
                  <div className="cm-legend-dot" style={{ background: color }} />
                  <div>
                    <div className="cm-legend-label">{getNestedValue(dict, `reality.${key}`)}</div>
                    <div className="cm-legend-desc">
                      {locale === 'es' ? realityDescriptions.es[key] : realityDescriptions.en[key]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </XpPanel>

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

const realityDescriptionsShort: Record<string, Record<string, string>> = {
  es: {
    historical: 'Evidencia documental',
    scientific: 'Método científico',
    hypothesis: 'No confirmada',
    theoretical: 'Sin validación',
    mythological: 'Tradición oral',
    speculative: 'Sin base sólida',
    conspiratorial: 'Contraoficial',
    fiction: 'Ficción / arte',
    philosophical: 'Reflexión',
    unclassified: 'Sin clasificar',
  },
  en: {
    historical: 'Documentary evidence',
    scientific: 'Scientific method',
    hypothesis: 'Unconfirmed',
    theoretical: 'No validation',
    mythological: 'Oral tradition',
    speculative: 'No solid basis',
    conspiratorial: 'Counter-official',
    fiction: 'Fiction / art',
    philosophical: 'Reflection',
    unclassified: 'Unclassified',
  },
}
