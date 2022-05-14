import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req, ev) {
  const PERMITTED = ['/dashboard', '/', '/login']

  let path = req.nextUrl.pathname

  if (PERMITTED.includes(path)) {
    return
  }
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

  const response = await fetch(supabaseUrl + '/rest/v1/redirects', {
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': 'Bearer ' + supabaseKey,
    }
  })

  if (response) {
    const data = await response.json()

    if (data) {
      const redirect = data.find((r) => {
        return r.from == path.replace('/', '')
      })
      return NextResponse.redirect(redirect.to)
    }
  }
}