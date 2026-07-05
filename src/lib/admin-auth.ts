export async function verifyAdminPassword(password: string): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/verify-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    return data.valid === true
  } catch {
    return false
  }
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
