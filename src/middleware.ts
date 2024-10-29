import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/api/:path*',
    '/admin/:path*',
    '/profile/:path*',
    '/purchases/:path*',
  ],
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only add D1 header in production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('x-d1-database', 'DB');
  }

  return response;
}