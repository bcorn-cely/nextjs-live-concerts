import { IconName } from '@/components/landing/AnimatedServices';
import { unstable_noStore as noStore } from 'next/cache'

export async function getFeaturedEvents() {
  noStore()
  // Fetch featured events from your API or database
  // This data will be fetched at request time
  const featuredEvents = await fetch(`${process.env.VERCEL_URL}/api/events/featured-events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(data => data.json());
  return featuredEvents;
}

export async function getTrendingArtists() {
  noStore()
  // Fetch trending artists from your API or database
  // This data will be fetched at request time
  const trendingArtists = await fetch(`${process.env.VERCEL_URL}/api/artists/trending-artists`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(data => data.json());
  return trendingArtists;
}

export async function getServices(): Promise<{title: string, description: string, icon: IconName}[]> {
  const services = await fetch(`${process.env.VERCEL_URL}/api/services`, { 
    method: "POST", 
    headers: { 
      'Content-Type': 'application/json'
    }
  }).then(data => data.json());
  return services;
}