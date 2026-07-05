'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { isAdminAuthenticated, setAdminAuthenticated, verifyAdminPassword, clearAdminAuth } from '@/lib/admin-auth'

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const router = useRouter()
  const locale = (params.locale as string) || 'es'
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isAdminAuthenticated()) {
      setAuthorized(true)
    }
    setLoading(false)
  }, [])

  const handleSubmit = () => {
    setError('')
    if (verifyAdminPassword(password)) {
      setAdminAuthenticated()
      setAuthorized(true)
    } else {
      setError(locale === 'es' ? 'Contraseña incorrecta' : 'Incorrect password')
      setPassword('')
    }
  }

  if (loading) return null

  if (!authorized) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0a0a0a',
      }}>
        <div style={{
          background: '#f8f6ef',
          border: '3px solid #8b4513',
          padding: '32px',
          maxWidth: '380px',
          width: '100%',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔐</div>
          <h1 style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '18px',
            color: '#8b4513',
            marginBottom: '8px',
          }}>
            {locale === 'es' ? 'Acceso restringido' : 'Restricted access'}
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '13px',
            color: '#555',
            marginBottom: '16px',
          }}>
            {locale === 'es'
              ? 'Introduce la contraseña de administrador'
              : 'Enter the admin password'}
          </p>
          {error && (
            <p style={{ color: '#cc3333', fontSize: '12px', marginBottom: '8px' }}>{error}</p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
            style={{
              width: '100%',
              padding: '6px 8px',
              border: '1px solid #a09a8c',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
              marginBottom: '12px',
              boxSizing: 'border-box',
            }}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            style={{
              border: '1px solid #a09a8c',
              background: '#8b4513',
              color: 'white',
              padding: '6px 20px',
              fontFamily: '"Courier New", monospace',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {locale === 'es' ? 'Entrar' : 'Enter'}
          </button>
          <p style={{ marginTop: '16px' }}>
            <a
              onClick={() => router.push(`/${locale}`)}
              style={{ color: '#0000cc', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
            >
              ← {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
            </a>
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
