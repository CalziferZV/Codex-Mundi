const ADMIN_EMAIL = 'carlosrebollar09@gmail.com'
const STORAGE_KEY = 'codex_admin'

export interface AdminSession {
  email: string
  loggedInAt: number
}

export function adminLogin(email: string): boolean {
  if (email.toLowerCase().trim() !== ADMIN_EMAIL) return false
  const session: AdminSession = { email: ADMIN_EMAIL, loggedInAt: Date.now() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  return true
}

export function adminLogout(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getAdminSession(): AdminSession | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function isAdminAuthenticated(): boolean {
  return getAdminSession() !== null
}
