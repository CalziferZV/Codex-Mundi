import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title_es, title_en, content_es, content_en, category_id, reality_status, slug } = body

    if (!title_es || !title_en || !slug) {
      return NextResponse.json({
        error: 'Missing required fields: title_es, title_en, slug',
      }, { status: 400 })
    }

    return NextResponse.json({
      message: 'Entry received from AI agent',
      entry: {
        title_es,
        title_en,
        slug,
        excerpt_es: body.excerpt_es || '',
        excerpt_en: body.excerpt_en || '',
        content_es: content_es || '',
        content_en: content_en || '',
        category_id: category_id || null,
        reality_status: reality_status || 'unclassified',
      },
      note: 'Connect Supabase to persist AI-generated entries',
    }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({
    name: 'Codex Mundi AI API',
    version: '1.0',
    description: 'Endpoint for AI agents to submit content to Codex Mundi',
    endpoints: {
      POST: '/api/ai - Submit a new entry',
    },
    required_fields: ['title_es', 'title_en', 'slug'],
    optional_fields: ['content_es', 'content_en', 'excerpt_es', 'excerpt_en', 'category_id', 'reality_status'],
    reality_statuses: [
      'historical', 'scientific', 'hypothesis', 'theoretical',
      'mythological', 'speculative', 'conspiratorial', 'fiction',
      'philosophical', 'unclassified',
    ],
  })
}
