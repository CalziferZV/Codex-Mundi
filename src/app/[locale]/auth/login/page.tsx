'use client'

import { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { adminLogin } from '@/lib/admin-auth'
import Header from '@/app/[locale]/Header'
import Sidebar from '@/app/[locale]/Sidebar'

function LoginForm() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const redirect = searchParams.get('redirect') || ''

  const handleLogin = async () => {
    setError('')
    if (!email.trim() || !password.trim()) {
      setError(locale === 'es' ? 'Completa todos los campos' : 'Fill in all fields')
      return
    }
    if (adminLogin(email)) {
      router.push(redirect === 'admin' ? `/${locale}/admin` : `/${locale}`)
    } else {
      setError(locale === 'es'
        ? 'Credenciales incorrectas. El admin solo está disponible para el administrador.'
        : 'Invalid credentials. Admin is only available for the administrator.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <main className="cm-main" style={{ margin: '0 auto', maxWidth: 500 }}>
      <div className="cm-content-box">
        <h1>🔐 {t('auth.loginTitle')}</h1>
        {error && (
          <div className="p-3 mb-4 border border-red-300 bg-red-50 text-red-700 text-sm">
            {error}
          </div>
        )}
        <div className="flex flex-col gap-4" onKeyDown={handleKeyDown}>
          <div>
            <label className="text-sm block mb-1">{t('auth.email')}</label>
            <input type="email" className="cm-input w-full" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm block mb-1">{t('auth.password')}</label>
            <input type="password" className="cm-input w-full" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="cm-btn cm-btn-primary w-full" onClick={handleLogin}>
            {t('auth.submitLogin')}
          </button>
          <p className="text-xs text-gray-500 text-center">
            {locale === 'es'
              ? 'Solo el administrador puede iniciar sesión. Los visitantes no necesitan cuenta.'
              : 'Only the administrator can log in. Visitors do not need an account.'}
          </p>
          <p className="text-sm text-center text-gray-600">
            <a className="cm-link" onClick={() => router.push(`/${locale}`)}>
              ← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default function LoginPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  return (
    <>
      <Header locale={locale} router={router} t={t} />
      <div className="cm-body">
        <Sidebar locale={locale} router={router} t={t} />
        <Suspense fallback={<div className="cm-main" />}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  )
}
