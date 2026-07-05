'use client'

import { Suspense, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { XpButton } from '@/components/retro/XpButton'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { seedData } from '@/lib/seed'
import { truncate } from '@/lib/utils'

function SearchContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const query = searchParams.get('q') || ''
  const dict = getDictionary(locale)
  const [searchText, setSearchText] = useState(query)

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const results = query
    ? seedData.entries.filter((entry) => {
        const titleEs = entry.title_es.toLowerCase()
        const titleEn = entry.title_en.toLowerCase()
        const contentEs = entry.content_es.toLowerCase()
        const contentEn = entry.content_en.toLowerCase()
        const q = query.toLowerCase()
        return (
          titleEs.includes(q) ||
          titleEn.includes(q) ||
          contentEs.includes(q) ||
          contentEn.includes(q)
        )
      })
    : []

  return (
    <Desktop>
      <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-4">
        <XpWindow
          title={`🔍 ${t('search.title')}`}
          defaultWidth="600px"
          defaultHeight="450px"
        >
          <XpWindowBody>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                className="xp-input flex-1"
                placeholder={t('search.placeholder')}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchText.trim()) {
                    router.push(`/${locale}/search?q=${encodeURIComponent(searchText.trim())}`)
                  }
                }}
              />
              <XpButton
                variant="primary"
                onClick={() => {
                  if (searchText.trim()) {
                    router.push(`/${locale}/search?q=${encodeURIComponent(searchText.trim())}`)
                  }
                }}
              >
                {t('search.title')}
              </XpButton>
            </div>

            {query && (
              <p className="text-xs text-gray-600 mb-3">
                {t('search.resultsFor')} &ldquo;{query}&rdquo;: {results.length} {t('home.totalEntries')}
              </p>
            )}

            {query && results.length === 0 && (
              <p className="text-sm text-gray-500 italic">- {t('search.noResults')} -</p>
            )}

            <div className="flex flex-col gap-2">
              {results.map((entry) => {
                const title = locale === 'es' ? entry.title_es : entry.title_en
                const excerpt = locale === 'es' ? entry.excerpt_es : entry.excerpt_en
                return (
                  <div
                    key={entry.id}
                    className="border border-[var(--color-xp-silver-dark)] p-2 
                              cursor-pointer hover:bg-blue-50"
                    onClick={() => router.push(`/${locale}/entry/${entry.slug}`)}
                  >
                    <div className="font-bold text-sm">{title}</div>
                    {excerpt && (
                      <div className="text-xs text-gray-600 mt-1">{truncate(excerpt, 150)}</div>
                    )}
                  </div>
                )
              })}
            </div>

            <button
              className="xp-button mt-4"
              onClick={() => router.push(`/${locale}`)}
            >
              ← {t('common.back')}
            </button>
          </XpWindowBody>
        </XpWindow>
      </div>
    </Desktop>
  )
}

export default function SearchPage() {
  const params = useParams()
  const locale = (params.locale as Locale) || 'es'

  return (
    <div className="flex flex-col h-full">
      <Suspense fallback={
        <Desktop>
          <div className="flex items-center justify-center h-full text-white text-sm">
            Loading...
          </div>
        </Desktop>
      }>
        <SearchContent />
      </Suspense>
      <Taskbar locale={locale} />
    </div>
  )
}
