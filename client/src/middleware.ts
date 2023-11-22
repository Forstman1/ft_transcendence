import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
  if ((request.nextUrl.pathname.match('/not-authorized')) && request.headers.get('origin') !== 'http://localhost:3000') {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  else if (request.nextUrl.pathname.match('/2fa/verify') && request.headers.get('referer') !== 'http://localhost:3000/') {
    return NextResponse.rewrite(new URL('/not-authorized', request.url))
  }
  else if ((request.nextUrl.searchParams.get('logged') || 
    request.nextUrl.searchParams.get('error') || 
    request.nextUrl.searchParams.get('unauthorized')) && 
    request.headers.get('referer') !== 'http://localhost:3000/'
  ) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
