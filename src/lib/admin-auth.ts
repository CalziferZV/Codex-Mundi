const ADMIN_PASSWORD = 'CodexMundi2026'

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem('codex_admin_auth') === 'true'
}

export function setAdminAuthenticated(): void {
  sessionStorage.setItem('codex_admin_auth', 'true')
}

export function clearAdminAuth(): void {
  sessionStorage.removeItem('codex_admin_auth')
}
