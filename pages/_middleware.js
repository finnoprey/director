import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req, ev) {
  const PERMITTED = ['/dashboard', '/']

  let path = req.nextUrl.pathname

  if (PERMITTED.includes(path)) {
    return
  }

  console.log()
  return NextResponse.redirect('https://finn.so')
}