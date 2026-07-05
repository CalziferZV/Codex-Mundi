'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

interface XpWindowProps {
  title: string
  children: React.ReactNode
  className?: string
  onClose?: () => void
  icon?: string
  defaultWidth?: string
  defaultHeight?: string
  maximizable?: boolean
}

export function XpWindow({
  title,
  children,
  className,
  onClose,
  icon = '📄',
  defaultWidth = '600px',
  defaultHeight = '400px',
  maximizable = true,
}: XpWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <div
      className={cn(
        'xp-window flex flex-col',
        isMaximized ? 'fixed inset-0 bottom-9 z-50' : '',
        className
      )}
      style={!isMaximized ? { width: defaultWidth, height: defaultHeight } : undefined}
    >
      <div className="xp-title-bar">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xs">{icon}</span>
          <span className="xp-title-bar-text truncate">{title}</span>
        </div>
        <div className="flex gap-0.5">
          {maximizable && (
            <button
              className="bg-[var(--color-xp-silver)] border border-[var(--color-xp-silver-dark)] 
                         w-4 h-4 flex items-center justify-center text-[10px] leading-none
                         hover:bg-[var(--color-xp-silver-dark)] cursor-pointer"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              {isMaximized ? '❐' : '□'}
            </button>
          )}
          {onClose && (
            <button
              className="bg-[var(--color-xp-silver)] border border-[var(--color-xp-silver-dark)] 
                         w-4 h-4 flex items-center justify-center text-[10px] leading-none
                         hover:bg-red-500 hover:text-white cursor-pointer"
              onClick={onClose}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export function XpWindowBody({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('xp-content-area flex-1', className)}>{children}</div>
}

export function XpWindowToolbar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('xp-toolbar', className)}>{children}</div>
}

export function XpWindowStatusBar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('xp-status-bar', className)}>{children}</div>
}
