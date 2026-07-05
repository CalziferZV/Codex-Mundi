'use client'

interface DesktopIcon {
  label: string
  icon: string
  onClick: () => void
}

interface DesktopProps {
  icons?: DesktopIcon[]
  children?: React.ReactNode
}

export function Desktop({ icons = [], children }: DesktopProps) {
  return (
    <div className="xp-desktop">
      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
        {icons.map((item, i) => (
          <div key={i} className="xp-icon" onClick={item.onClick}>
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="break-words leading-tight">{item.label}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  )
}
