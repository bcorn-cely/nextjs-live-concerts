import { showFallLandingPage } from "@/lib/flags";
import { type NextRequest, NextResponse } from "next/server";

export async function showLandingPageMiddleware (request: NextRequest) {
    const landingPage = await showFallLandingPage();

    const version = landingPage ? '/' : '/fall-landing-page';

    const nextUrl = new URL(version, request.url);

    return NextResponse.rewrite(nextUrl);
}