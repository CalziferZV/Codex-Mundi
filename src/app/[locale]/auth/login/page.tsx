'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Desktop } from '@/components/retro/Desktop'
import { Taskbar } from '@/components/retro/Taskbar'
import { XpWindow, XpWindowBody } from '@/components/retro/XpWindow'
import { XpButton } from '@/components/retro/XpButton'
import { getDictionary, getNestedValue } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/config'

export default function LoginPage() {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as Locale) || 'es'
  const dict = getDictionary(locale)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const t = (path: string) => dict ? getNestedValue(dict, path) : path

  return (
    <div className="flex flex-col h-full">
      <Desktop>
        <div className="absolute inset-4 bottom-10 z-20 flex justify-center items-start pt-8">
          <XpWindow
            title={`🔐 ${t('auth.loginTitle')}`}
            defaultWidth="380px"
            defaultHeight="auto"
            maximizable={false}
          >
            <XpWindowBody>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs block mb-1">{t('auth.email')}</label>
                  <input
                    type="email"
                    className="xp-input w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs block mb-1">{t('auth.password')}</label>
                  <input
                    type="password"
                    className="xp-input w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <XpButton variant="primary" className="w-full mt-2">
                  {t('auth.submitLogin')}
                </XpButton>
                <p className="text-xs text-center text-gray-600 mt-2">
                  {t('auth.noAccount')}{' '}
                  <span
                    className="xp-link"
                    onClick={() => router.push(`/${locale}/auth/register`)}
                  >
                    {t('auth.registerLink')}
                  </span>
                </p>
              </div>
            </XpWindowBody>
          </XpWindow>
        </div>
      </Desktop>
      <Taskbar locale={locale} />
    </div>
  )
}
