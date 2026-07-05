import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({
      message: 'Connect Supabase to enable authentication',
      note: 'Run supabase/schema.sql in your Supabase SQL editor to set up auth',
    })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
