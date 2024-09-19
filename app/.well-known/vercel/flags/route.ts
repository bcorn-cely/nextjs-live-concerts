import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
 
export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });
 
  return NextResponse.json<ApiData>({
    definitions: {
      showFallLandingPage: {
        description: 'Controls whether to show the Fall 2024 landing page variation or not',
        origin: process.env.EDGE_CONFIG,
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      showArtistProfilePageVar: {
        description: 'Show a new version of the artist profile page',
        origin: process.env.EDGE_CONFIG,
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' }
        ]
      },
      showAIChatBot: {
        description: 'Testing out an AI Chat bot on the live events website',
        origin: process.env.EDGE_CONFIG,
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ]
      },
    },
  });
}