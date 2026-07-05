'use client'

import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import { seedData } from '@/lib/seed'
import type { Locale } from '@/lib/i18n/config'

export default function AdminCategoriesPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  return (
    <div className="flex flex-col h-full">
      <Desktop>
        <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-4">
          <XpWindow
            title={`📁 ${t('admin.manageCategories')}`}
            defaultWidth="500px"
            defaultHeight="350px"
          >
            <XpWindowBody>
              <div className="flex flex-col gap-2">
                {seedData.categories.map((cat) => {
                  const name = locale === 'es' ? cat.name_es : cat.name_en
                  return (
                    <div
                      key={cat.id}
                      className="border border-[var(--color-xp-silver-dark)] p-2 flex justify-between items-center"
                    >
                      <span className="text-sm">{cat.icon} {name}</span>
                      <div className="flex gap-2">
                        <button className="xp-button text-xs py-0 px-2">{t('admin.edit')}</button>
                        <button className="xp-button text-xs py-0 px-2">{t('admin.delete')}</button>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="xp-button green mt-4">{t('admin.createCategory')}</button>
              <button className="xp-button mt-4 ml-2" onClick={() => router.push(`/${locale}/admin`)}>
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
