'use client'

import { useState } from 'react'
import { XpWindow, XpWindowBody } from './XpWindow'
import { XpButton } from './XpButton'

interface DisclaimerModalProps {
  onAccept: () => void
  locale?: string
  dictionary?: {
    site: { title: string; subtitle: string; disclaimer: string }
    common: { accept: string }
  }
}

export function DisclaimerModal({
  onAccept,
  locale = 'es',
  dictionary,
}: DisclaimerModalProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleAccept = () => {
    setIsVisible(false)
    onAccept()
  }

  if (!isVisible) return null

  const title = dictionary?.site?.title || 'Codex Mundi'
  const subtitle = dictionary?.site?.subtitle || ''
  const disclaimer = dictionary?.site?.disclaimer || ''
  const acceptText = dictionary?.common?.accept || 'Accept'

  return (
    <div className="xp-disclaimer-overlay">
      <XpWindow
        title={`⚠️ ${title}`}
        defaultWidth="550px"
        defaultHeight="auto"
        maximizable={false}
      >
        <XpWindowBody>
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">📜</div>
            <h1 className="text-lg font-bold mb-1">{title}</h1>
            <p className="text-[11px] text-gray-600 italic">{subtitle}</p>
          </div>

          <div className="border-2 border-dashed border-red-400 bg-red-50 p-3 mb-4 text-xs leading-relaxed">
            <p className="font-bold text-red-700 mb-1">
              {locale === 'es' ? '⚠️ AVISO IMPORTANTE' : '⚠️ IMPORTANT NOTICE'}
            </p>
            <p className="text-gray-800">{disclaimer}</p>
          </div>

          <div className="flex justify-center">
            <XpButton variant="green" onClick={handleAccept}>
              {acceptText}
            </XpButton>
          </div>
        </XpWindowBody>
      </XpWindow>
    </div>
  )
}
