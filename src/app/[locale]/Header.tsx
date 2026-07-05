'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAdminAuthenticated, adminLogout } from '@/lib/admin-auth'

interface HeaderProps {
  locale: string
  router: ReturnType<typeof useRouter>
  t: (path: string) => string
}

export default function Header({ locale, router, t }: HeaderProps) {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(isAdminAuthenticated())
  }, [])

  const handleLogout = () => {
    adminLogout()
    setIsAdmin(false)
    router.push(`/${locale}`)
  }

  return (
    <header className="cm-header">
      <div className="cm-header-title">
        <span className="text-lg">📖</span>
        <a href={`/${locale}`}>{t('site.title')}</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="cm-search-bar">
          <input
            type="text"
            className="cm-input"
            placeholder={t('search.placeholder')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                router.push(`/${locale}/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`)
              }
            }}
          />
          <button
            className="cm-btn cm-btn-primary"
            onClick={() => {
              const input = document.querySelector('.cm-search-bar input') as HTMLInputElement
              if (input?.value.trim()) {
                router.push(`/${locale}/search?q=${encodeURIComponent(input.value.trim())}`)
              }
            }}
          >
            {t('search.title')}
          </button>
        </div>

        <div className="cm-header-nav">
          {isAdmin ? (
            <>
              <a href={`/${locale}/admin`}>{t('nav.admin')}</a>
              <a style={{ cursor: 'pointer' }} onClick={handleLogout}>
                {t('nav.logout')}
              </a>
            </>
          ) : (
            <a href={`/${locale}/auth/login`}>{t('nav.login')}</a>
          )}
          <a href={locale === 'es' ? '/en' : '/es'}>
            {locale === 'es' ? 'English' : 'Español'}
          </a>
        </div>
      </div>
    </header>
  )
}
