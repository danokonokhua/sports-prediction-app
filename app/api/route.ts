import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Handle GET requests
export async function GET(_request: NextRequest) {
  // Add actual async operation here
  const data = await Promise.resolve({ message: 'Hello World' })
  return NextResponse.json(data)
}

// Handle POST requests (if needed)
export async function POST(request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({ message: 'Success', data: body })
}
