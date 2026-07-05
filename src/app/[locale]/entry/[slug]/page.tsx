'use client'

import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowToolbar, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { seedData } from '@/lib/seed'
import { formatDate } from '@/lib/utils'

export default function EntryPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const slug = params.slug as string
  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const entry = seedData.entries.find(e => e.slug === slug)
  const category = entry ? seedData.categories.find(c => c.id === entry.categoryId) : null
  const subsections = entry ? seedData.subsections.filter(s => s.entryId === entry.id) : []

  if (!entry) {
    return (
      <div className="flex flex-col h-full">
        <Desktop />
        <Taskbar locale={locale} />
      </div>
    )
  }

  const title = locale === 'es' ? entry.title_es : entry.title_en
  const content = locale === 'es' ? entry.content_es : entry.content_en
  const categoryName = category ? (locale === 'es' ? category.name_es : category.name_en) : ''
  const categorySlug = category?.slug || ''

  const subsectionTitle = (s: typeof subsections[0]) =>
    locale === 'es' ? s.title_es : s.title_en
  const subsectionContent = (s: typeof subsections[0]) =>
    locale === 'es' ? s.content_es : s.content_en

  return (
    <div className="flex flex-col h-full">
      <Desktop>
        <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-2">
          <XpWindow
            title={`📖 ${title}`}
            defaultWidth="700px"
            defaultHeight="500px"
          >
            <XpWindowToolbar>
              <button
                className="xp-toolbar-button"
                onClick={() => router.push(`/${locale}/categories/${categorySlug}`)}
              >
                ← {t('entry.backToCategory')}: {categoryName}
              </button>
            </XpWindowToolbar>

            <XpWindowBody>
              <div className="mb-3">
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 border border-gray-300">
                  {getNestedValue(dict, `reality.${entry.realityStatus}`)}
                </span>
              </div>

              {content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              {subsections.length > 0 && (
                <div className="mt-6 border-t border-[var(--color-xp-silver-dark)] pt-4">
                  <h2 className="text-sm font-bold mb-3">{t('entry.subsections')}</h2>
                  {subsections.map((sub) => (
                    <div key={sub.id} className="mb-4">
                      <h3 className="text-xs font-bold text-blue-800 mb-1">
                        ▸ {subsectionTitle(sub)}
                      </h3>
                      <div className="text-xs pl-4">
                        {subsectionContent(sub)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </XpWindowBody>

            <XpWindowStatusBar>
              <span>{t('entry.lastUpdated')}: {formatDate(entry.updatedAt, locale)}</span>
              <span>{t('entry.realityStatus')}: {getNestedValue(dict, `reality.${entry.realityStatus}`)}</span>
            </XpWindowStatusBar>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
