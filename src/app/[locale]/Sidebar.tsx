'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { seedData } from '@/lib/seed'
import { isAdminAuthenticated, adminLogout } from '@/lib/admin-auth'

interface SidebarProps {
  locale: string
  router: ReturnType<typeof useRouter>
  t: (path: string) => string
}

export default function Sidebar({ locale, router, t }: SidebarProps) {
  const pathname = usePathname()
  const rootCategories = seedData.categories.filter(c => !c.parentId)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(isAdminAuthenticated())
  }, [pathname])

  const handleLogout = () => {
    adminLogout()
    setIsAdmin(false)
    router.push(`/${locale}`)
  }

  return (
    <aside className="cm-sidebar">
      <div className="cm-sidebar-section">
        <div className="cm-sidebar-title">{t('nav.categories')}</div>
        <a
          className={`cm-sidebar-item ${pathname === `/${locale}` ? 'active' : ''}`}
          onClick={() => router.push(`/${locale}`)}
        >
          {t('nav.home')}
        </a>

        {rootCategories.map((cat) => {
          const name = locale === 'es' ? cat.name_es : cat.name_en
          const subCats = seedData.categories.filter(sc => sc.parentId === cat.id)
          return (
            <div key={cat.id}>
              <a
                className={`cm-sidebar-item ${pathname.includes(cat.slug) ? 'active' : ''}`}
                onClick={() => router.push(`/${locale}/categories/${cat.slug}`)}
              >
                {cat.icon} {name}
              </a>
              {subCats.map((sub) => {
                const subName = locale === 'es' ? sub.name_es : sub.name_en
                return (
                  <a
                    key={sub.id}
                    className={`cm-sidebar-item ml-3 text-[12px] ${pathname.includes(sub.slug) ? 'active' : ''}`}
                    onClick={() => router.push(`/${locale}/categories/${sub.slug}`)}
                  >
                    {sub.icon} {subName}
                  </a>
                )
              })}
            </div>
          )
        })}

        {isAdmin && (
          <>
            <div className="cm-sidebar-title mt-4">⚙️ Admin</div>
            <a
              className={`cm-sidebar-item ${pathname.includes('/admin') ? 'active' : ''}`}
              onClick={() => router.push(`/${locale}/admin`)}
            >
              {t('nav.admin')}
            </a>
            <a className="cm-sidebar-item text-red-600" onClick={handleLogout}>
              {t('nav.logout')}
            </a>
          </>
        )}

        {!isAdmin && (
          <>
            <div className="cm-sidebar-title mt-4">{t('nav.contributions')}</div>
            <a className="cm-sidebar-item" onClick={() => router.push(`/${locale}/auth/login`)}>
              {t('nav.login')}
            </a>
          </>
        )}
      </div>
    </aside>
  )
}
