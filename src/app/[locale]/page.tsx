'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DisclaimerModal } from '@/components/retro/DisclaimerModal'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { StartMenu } from '@/components/retro/StartMenu'
import { XpWindow, XpWindowBody, XpWindowStatusBar } from '@/components/retro/XpWindow'
import { XpButton } from '@/components/retro/XpButton'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'

export default function HomePage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [dict, setDict] = useState<any>(null)
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  useEffect(() => {
    getDictionary(locale).then(setDict)
  }, [locale])

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  const openWindow = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id])
    }
    setActiveWindow(id)
  }

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w !== id))
    if (activeWindow === id) {
      setActiveWindow(openWindows.filter(w => w !== id).pop() || null)
    }
  }

  const desktopIcons = [
    { label: locale === 'es' ? 'Categorías' : 'Categories', icon: '📁', onClick: () => openWindow('categories') },
    { label: locale === 'es' ? 'Buscar' : 'Search', icon: '🔍', onClick: () => openWindow('search') },
    { label: locale === 'es' ? 'Admin' : 'Admin', icon: '⚙️', onClick: () => router.push(`/${locale}/admin`) },
  ]

  const startMenuItems = [
    { label: t('nav.categories'), icon: '📁', onClick: () => openWindow('categories') },
    { label: t('nav.search'), icon: '🔍', onClick: () => openWindow('search') },
  ]

  const taskbarItems = openWindows.map(id => ({
    id,
    label: id === 'categories' ? t('nav.categories') : t('nav.search'),
    active: activeWindow === id,
    onClick: () => setActiveWindow(id),
  }))

  if (!dict) {
    return (
      <div className="xp-desktop flex items-center justify-center">
        <div className="text-white text-sm animate-pulse">{t('common.loading')}</div>
      </div>
    )
  }

  return (
    <>
      {!disclaimerAccepted && (
        <DisclaimerModal
          onAccept={() => setDisclaimerAccepted(true)}
          locale={locale}
          dictionary={dict}
        />
      )}

      <Desktop icons={desktopIcons}>
        {activeWindow === 'categories' && (
          <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-8">
            <XpWindow
              title={`📁 ${t('nav.categories')}`}
              onClose={() => closeWindow('categories')}
              defaultWidth="500px"
              defaultHeight="350px"
            >
              <XpWindowBody>
                <p className="mb-4 text-xs text-gray-600">
                  {locale === 'es'
                    ? 'Explora las categorías del conocimiento:'
                    : 'Explore the categories of knowledge:'}
                </p>
                <div className="flex flex-col gap-2">
                  <div
                    className="xp-tree-item cursor-pointer text-sm"
                    onClick={() => router.push(`/${locale}/categories/religion-mythology`)}
                  >
                    📖 {locale === 'es' ? 'Religión y Mitología' : 'Religion & Mythology'}
                  </div>
                  <div
                    className="xp-tree-item cursor-pointer text-sm"
                    onClick={() => router.push(`/${locale}/categories/history`)}
                  >
                    📜 {locale === 'es' ? 'Historia' : 'History'}
                  </div>
                  <div
                    className="xp-tree-item cursor-pointer text-sm"
                    onClick={() => router.push(`/${locale}/categories/philosophy`)}
                  >
                    🧠 {locale === 'es' ? 'Filosofía' : 'Philosophy'}
                  </div>
                  <div
                    className="xp-tree-item cursor-pointer text-sm"
                    onClick={() => router.push(`/${locale}/categories/conspiracy`)}
                  >
                    🕵️ {locale === 'es' ? 'Teorías' : 'Theories'}
                  </div>
                </div>
              </XpWindowBody>
              <XpWindowStatusBar>
                <span>
                  {locale === 'es' ? '4 categorías disponibles' : '4 categories available'}
                </span>
              </XpWindowStatusBar>
            </XpWindow>
          </div>
        )}

        {activeWindow === 'search' && (
          <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-8">
            <XpWindow
              title={`🔍 ${t('nav.search')}`}
              onClose={() => closeWindow('search')}
              defaultWidth="500px"
              defaultHeight="250px"
            >
              <XpWindowBody>
                <p className="mb-3 text-xs text-gray-600">
                  {t('search.searchIn')}:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="xp-input flex-1"
                    placeholder={t('search.placeholder')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        router.push(`/${locale}/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`)
                      }
                    }}
                  />
                  <XpButton
                    variant="primary"
                    onClick={() => {
                      const input = document.querySelector('.xp-input') as HTMLInputElement
                      if (input?.value.trim()) {
                        router.push(`/${locale}/search?q=${encodeURIComponent(input.value.trim())}`)
                      }
                    }}
                  >
                    {t('search.title')}
                  </XpButton>
                </div>
              </XpWindowBody>
            </XpWindow>
          </div>
        )}
      </Desktop>

      {showStartMenu && (
        <StartMenu
          items={startMenuItems}
          onClose={() => setShowStartMenu(false)}
          locale={locale}
        />
      )}

      <Taskbar
        items={taskbarItems}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        showStartMenu={showStartMenu}
        locale={locale}
      />
    </>
  )
}
