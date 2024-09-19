import { showArtistProfilePageVar, showFallLandingPage } from "@/lib/flags";
import { type NextRequest, NextResponse } from "next/server";

export async function showLandingPageMiddleware (request: NextRequest) {
    if(request.nextUrl.pathname === '/') {
        const landingPage = await showFallLandingPage();

        const version = landingPage ? '/fall-landing-page' : '/';
    
        const nextUrl = new URL(version, request.url);
    
        return NextResponse.rewrite(nextUrl);
    }
}

export async function showNewArtistProfilePage (request: NextRequest) {
    const artistMatch = request.nextUrl.pathname.match(/^\/artist\/([^/]+)/);
    if(artistMatch) {
        const artistProfilePage = await showArtistProfilePageVar();

        if(artistProfilePage) {
            const artistId = artistMatch[1];
            const url = new URL(`/artist-profile-var/${artistId}`, request.url);
            return NextResponse.rewrite(url);
        }
    }
}