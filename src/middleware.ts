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

  // Cloudflare D1をバインドするためのヘッダーを追加
  response.headers.set('x-d1-database', 'DB');

  return response;
}