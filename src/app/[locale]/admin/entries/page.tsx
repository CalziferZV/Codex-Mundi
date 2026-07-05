'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import { seedData } from '@/lib/seed'
import type { Locale } from '@/lib/i18n/config'

export default function AdminEntriesPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    getDictionary(locale).then(setDict)
  }, [locale])

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  if (!dict) return null

  return (
    <div className="flex flex-col h-full">
      <Desktop>
        <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-4">
          <XpWindow
            title={`📝 ${t('admin.manageEntries')}`}
            defaultWidth="600px"
            defaultHeight="450px"
          >
            <XpWindowBody>
              <div className="flex flex-col gap-2">
                {seedData.entries.map((entry) => {
                  const title = locale === 'es' ? entry.title_es : entry.title_en
                  return (
                    <div
                      key={entry.id}
                      className="border border-[var(--color-xp-silver-dark)] p-2 flex justify-between items-center"
                    >
                      <span className="text-sm">{title}</span>
                      <div className="flex gap-2">
                        <button className="xp-button text-xs py-0 px-2">{t('admin.edit')}</button>
                        <button className="xp-button text-xs py-0 px-2">{t('admin.delete')}</button>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="xp-button green mt-4">{t('admin.createEntry')}</button>
              <button
                className="xp-button mt-4 ml-2"
                onClick={() => router.push(`/${locale}/admin`)}
              >
                ← {t('common.back')}
              </button>
            </XpWindowBody>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
