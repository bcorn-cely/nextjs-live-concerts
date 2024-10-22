import { VercelToolbar } from '@vercel/toolbar/next';
import { Metadata } from "next";
import './globals.css';
import AIChatbot from "@/components/ai/AiChatBot";
import { showAIChatBot } from '@/lib/flags';

export const metadata: Metadata = {
  metadataBase: new URL("https://partialprerendering.com"),
  title: "Better Ticketmaster",
  description: "A demo of Next.js using Partial Prerendering. Explore your favorite artists and events on a worldclass Next.js site.",
  openGraph: {
    title: "Better Ticketmaster",
    description: "A demo of Next.js using Partial Prerendering.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  const showBot = await showAIChatBot();

  return (
    <html lang="en" className={`[color-scheme:dark]`}>
      <head>

      </head>
      <body>
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
        {showBot && <AIChatbot /> }
      </body>

    </html>
  );
}
