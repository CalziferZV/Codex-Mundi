'use client'

interface StartMenuItem {
  label: string
  icon?: string
  onClick: () => void
}

interface StartMenuProps {
  items: StartMenuItem[]
  username?: string
  onClose: () => void
  locale?: string
}

export function StartMenu({ items, username, onClose, locale = 'es' }: StartMenuProps) {
  const subtitle = locale === 'es' ? 'Codex Mundi - Archivo del Conocimiento' : 'Codex Mundi - Archive of Knowledge'

  return (
    <div className="xp-start-menu">
      <div
        className="bg-[var(--color-xp-blue-dark)] text-white px-3 py-2 mb-1 
                    font-[Courier] text-xs flex items-center gap-2"
      >
        <span className="text-lg">📖</span>
        <div>
          <div className="font-bold">{username || 'Invitado'}</div>
          <div className="text-[10px] opacity-80">{subtitle}</div>
        </div>
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          className="xp-start-menu-item"
          onClick={() => {
            item.onClick()
            onClose()
          }}
        >
          <span className="text-sm w-5 text-center">{item.icon || '📄'}</span>
          <span>{item.label}</span>
        </div>
      ))}

      <div className="border-t border-[var(--color-xp-silver-dark)] mt-1 pt-1">
        <div className="xp-start-menu-item text-red-600" onClick={onClose}>
          <span className="text-sm w-5 text-center">🔒</span>
          <span>{locale === 'es' ? 'Cerrar sesión' : 'Log out'}</span>
        </div>
      </div>
    </div>
  )
}
