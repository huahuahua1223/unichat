import { NextResponse } from 'next/server';

// Don't invoke Middleware on some paths
 export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
 };

// Default middleware function that returns a valid Response
 export default function middleware() {
   return NextResponse.next();
 };
