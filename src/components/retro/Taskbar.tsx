'use client'

import { XpButton } from './XpButton'
import { cn } from '@/lib/utils'

interface TaskbarItem {
  id: string
  label: string
  active?: boolean
  onClick?: () => void
}

interface TaskbarProps {
  items?: TaskbarItem[]
  onStartClick?: () => void
  showStartMenu?: boolean
  locale?: string
}

export function Taskbar({
  items = [],
  onStartClick,
  showStartMenu,
  locale = 'es',
}: TaskbarProps) {
  const startLabel = locale === 'es' ? 'Inicio' : 'Start'
  const time = new Date().toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="xp-taskbar relative">
      <button
        className={cn(
          'xp-start-button',
          showStartMenu && 'border-color-[#2d4e04]'
        )}
        onClick={onStartClick}
      >
        <span className="text-sm">◆</span>
        <span>{startLabel}</span>
      </button>

      <div className="flex-1 flex gap-1 overflow-x-auto px-1">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn('xp-taskbar-item', item.active && 'active')}
            onClick={item.onClick}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="text-white text-[11px] font-[Courier] px-2 whitespace-nowrap">
        {time}
      </div>
    </div>
  )
}
