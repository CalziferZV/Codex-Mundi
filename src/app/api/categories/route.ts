import { NextResponse } from 'next/server'
import { seedData } from '@/lib/seed'

export async function GET() {
  return NextResponse.json({ categories: seedData.categories })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({
      message: 'Category received',
      category: body,
      note: 'Connect Supabase to persist categories',
    }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
