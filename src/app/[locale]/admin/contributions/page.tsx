'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'

export default function AdminContributionsPage() {
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
            title={`💬 ${t('admin.manageContributions')}`}
            defaultWidth="600px"
            defaultHeight="350px"
          >
            <XpWindowBody>
              <p className="text-xs text-gray-600 mb-4 italic">
                {locale === 'es'
                  ? 'No hay contribuciones pendientes por revisar.'
                  : 'No pending contributions to review.'}
              </p>
              <button className="xp-button" onClick={() => router.push(`/${locale}/admin`)}>
                ← {t('common.back')}
              </button>
            </XpWindowBody>
            <XpWindowStatusBar>
              <span>{t('admin.pendingContributions')}: 0</span>
            </XpWindowStatusBar>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
