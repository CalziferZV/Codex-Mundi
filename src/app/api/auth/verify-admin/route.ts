import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ valid: false, error: 'Admin password not configured' }, { status: 500 })
    }

    const valid = password === adminPassword
    return NextResponse.json({ valid })
  } catch {
    return NextResponse.json({ valid: false, error: 'Invalid request' }, { status: 400 })
  }
}
