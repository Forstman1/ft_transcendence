import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.match('/not-authorized') &&
    (
      request.headers.get('origin') !== `${process.env.NEXT_PUBLIC_CLIENT_URL}` ||
      request.headers.get('referer') !== `${process.env.NEXT_PUBLIC_CLIENT_URL}/`
    )
  ) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  else if (
    request.nextUrl.pathname.match('/2fa/verify') &&
    request.headers.get('referer') !== `${process.env.NEXT_PUBLIC_CLIENT_URL}/`
  ) {
    return NextResponse.rewrite(new URL('/not-authorized', request.url))
  }
  else if (
    !request.headers.get('referer')?.startsWith(`${process.env.NEXT_PUBLIC_CLIENT_URL}/`) && 
    (
      request.nextUrl.searchParams.get('logged') || 
      request.nextUrl.searchParams.get('error') || 
      request.nextUrl.searchParams.get('unauthorized')
    )
  ) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
