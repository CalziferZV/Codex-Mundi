'use client'

import { useRouter } from 'next/navigation'

interface FooterProps {
  locale: string
  t: (path: string) => string
}

export default function Footer({ locale, t }: FooterProps) {
  const router = useRouter()

  return (
    <div className="cm-footer">
      <div className="flex justify-center gap-4 mb-2 flex-wrap">
        <a className="cm-link text-xs" onClick={() => router.push(`/${locale}/legal/privacy`)}>
          {locale === 'es' ? 'Privacidad' : 'Privacy'}
        </a>
        <a className="cm-link text-xs" onClick={() => router.push(`/${locale}/legal/cookies`)}>
          {locale === 'es' ? 'Cookies' : 'Cookies'}
        </a>
        <a className="cm-link text-xs" onClick={() => router.push(`/${locale}/legal/terms`)}>
          {locale === 'es' ? 'Términos' : 'Terms'}
        </a>
        <a className="cm-link text-xs" onClick={() => router.push(`/${locale}/legal/notice`)}>
          {locale === 'es' ? 'Aviso legal' : 'Legal notice'}
        </a>
      </div>
      {t('site.title')} &mdash; {t('site.subtitle')}
    </div>
  )
}
