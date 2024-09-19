import { type NextRequest, NextResponse } from 'next/server';
import { showLandingPageMiddleware, showNewArtistProfilePage } from './middleware/flags';

export const config = { matcher: ['/', '/artist/:id*']};

type Middleware = (request: NextRequest) => Promise<NextResponse | undefined> | NextResponse | undefined;


export function composeMiddleware(...middlewares: Middleware[]) {
    return async (request: NextRequest) => {
        for (const middleware of middlewares) {
            const result = await middleware(request);
            if(result) {
                return result;
            }
        }
        return NextResponse.next();
    }
}

export async function middleware(request: NextRequest) {
    const flagsMiddleware = composeMiddleware(
        showLandingPageMiddleware,
        showNewArtistProfilePage,
    );
    const result = await flagsMiddleware(request);
    if(result) return result;

    return NextResponse.next();
}