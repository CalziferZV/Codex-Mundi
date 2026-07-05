'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { isAdminAuthenticated } from '@/lib/admin-auth'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const params = useParams()
  const locale = (params.locale as string) || 'es'
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.replace(`/${locale}/auth/login?redirect=admin`)
    } else {
      setAuthorized(true)
    }
  }, [locale, router])

  if (!authorized) return null

  return <>{children}</>
}
