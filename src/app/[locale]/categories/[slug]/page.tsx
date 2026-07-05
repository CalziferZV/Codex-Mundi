'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { seedData } from '@/lib/seed'
import { truncate } from '@/lib/utils'

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const slug = params.slug as string
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    getDictionary(locale).then(setDict)
  }, [locale])

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const category = seedData.categories.find(c => c.slug === slug)
  const entries = seedData.entries.filter(e => e.categoryId === category?.id)

  if (!dict) return null

  if (!category) {
    return (
      <div className="flex flex-col h-full">
        <Desktop>
          <div className="flex items-center justify-center h-full">
            <XpWindow title="⚠️ Error" defaultWidth="400px" defaultHeight="150px">
              <XpWindowBody>
                <p>{locale === 'es' ? 'Categoría no encontrada' : 'Category not found'}</p>
                <button className="xp-button mt-4" onClick={() => router.push(`/${locale}`)}>
                  {t('common.back')}
                </button>
              </XpWindowBody>
            </XpWindow>
          </div>
        </Desktop>
        <Taskbar locale={locale} />
      </div>
    )
  }

  const categoryName = locale === 'es' ? category.name_es : category.name_en
  const categoryDesc = locale === 'es' ? category.description_es : category.description_en

  return (
    <div className="flex flex-col h-full">
      <Desktop>
        <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-4">
          <XpWindow
            title={`${category.icon} ${categoryName}`}
            defaultWidth="600px"
            defaultHeight="450px"
          >
            <XpWindowBody>
              <p className="text-xs text-gray-600 mb-4">{categoryDesc}</p>

              {entries.length === 0 ? (
                <p className="text-sm text-gray-500 italic">- {t('categories.noEntries')} -</p>
              ) : (
                <div className="flex flex-col gap-2">
                  {entries.map((entry) => {
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
                        <div className="text-[10px] text-gray-400 mt-1">
                          <span className="bg-gray-100 px-1 py-0.5 rounded">
                            {getNestedValue(dict, `reality.${entry.realityStatus}`)}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              <button
                className="xp-button mt-4"
                onClick={() => router.push(`/${locale}`)}
              >
                ← {t('categories.backToCategories')}
              </button>
            </XpWindowBody>
            <XpWindowStatusBar>
              <span>{entries.length} {t('home.totalEntries')}</span>
            </XpWindowStatusBar>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
