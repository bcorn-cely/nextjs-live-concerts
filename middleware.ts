import { type NextRequest, NextResponse } from 'next/server';
import { showFallLandingPage } from './lib/flags';

export const config = { matcher: ['/']};

export async function middleware(request: NextRequest) {
    const landingPage = await showFallLandingPage();

    const version = landingPage ? '/' : '/fall-landing-page';

    const nextUrl = new URL(version, request.url);

    return NextResponse.rewrite(nextUrl);
}