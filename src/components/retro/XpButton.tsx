'use client'

import { cn } from '@/lib/utils'
import { useRef } from 'react'

interface XpButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'default' | 'primary' | 'green'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export function XpButton({
  children,
  onClick,
  variant = 'default',
  className,
  disabled,
  type = 'button',
}: XpButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
    onClick?.()
  }

  return (
    <>
      <audio ref={audioRef} src="/sounds/click.wav" preload="none" />
      <button
        type={type}
        className={cn(
          'xp-button',
          {
            primary: variant === 'primary',
            green: variant === 'green',
          },
          className
        )}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}
