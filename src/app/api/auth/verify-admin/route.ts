const DEFAULT_PASSWORD = 'CodexMundi2026'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body
    const adminPassword = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD
    const valid = password === adminPassword
    return Response.json({ valid })
  } catch {
    return Response.json({ valid: false }, { status: 400 })
  }
}
