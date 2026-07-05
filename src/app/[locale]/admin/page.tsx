'use client'

import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'

export default function AdminPage() {
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
            title={`⚙️ ${t('admin.dashboard')}`}
            defaultWidth="500px"
            defaultHeight="400px"
          >
            <XpWindowBody>
              <p className="text-xs text-gray-600 mb-4">
                {locale === 'es'
                  ? 'Panel de administración de Codex Mundi'
                  : 'Codex Mundi administration panel'}
              </p>
              <div className="flex flex-col gap-2">
                <div
                  className="xp-tree-item text-sm"
                  onClick={() => router.push(`/${locale}/admin/entries`)}
                >
                  📝 {t('admin.manageEntries')}
                </div>
                <div
                  className="xp-tree-item text-sm"
                  onClick={() => router.push(`/${locale}/admin/categories`)}
                >
                  📁 {t('admin.manageCategories')}
                </div>
                <div
                  className="xp-tree-item text-sm"
                  onClick={() => router.push(`/${locale}/admin/contributions`)}
                >
                  💬 {t('admin.manageContributions')}
                </div>
              </div>
            </XpWindowBody>
            <XpWindowStatusBar>
              <span>{locale === 'es' ? 'Modo administrador' : 'Admin mode'}</span>
            </XpWindowStatusBar>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
