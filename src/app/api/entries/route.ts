import { NextResponse } from 'next/server'
import { seedData } from '@/lib/seed'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const q = searchParams.get('q')

  let entries = seedData.entries

  if (category) {
    entries = entries.filter(e => e.categoryId === category)
  }

  if (q) {
    const query = q.toLowerCase()
    entries = entries.filter(e =>
      e.title_es.toLowerCase().includes(query) ||
      e.title_en.toLowerCase().includes(query) ||
      e.content_es.toLowerCase().includes(query) ||
      e.content_en.toLowerCase().includes(query)
    )
  }

  return NextResponse.json({ entries })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({
      message: 'Entry received',
      entry: body,
      note: 'Connect Supabase to persist entries',
    }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
