import { NextRequest, NextResponse } from 'next/server';

export default function midleware(request: NextRequest) {
  const token = request.cookies.get('__Secure-next-auth.session-token')?.value;

  const pathname = request.nextUrl.pathname;

  const homeUrl = new URL('/', request.url);
  const authUrl = new URL('/auth', request.url);


  if (!token) {
    if (pathname === '/cart') {
      return NextResponse.redirect(authUrl);
    }
  }


  if(token){
    if (pathname === '/auth') {
      return NextResponse.redirect(homeUrl);
    }
  }
  
}

export const config = {
  matcher: ['/auth', '/cart'],
};
