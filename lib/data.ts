import { unstable_noStore as noStore } from 'next/cache'

export async function getFeaturedEvents() {
  noStore()
  // Fetch featured events from your API or database
  // This data will be fetched at request time
  return [ { id: '', name: '', date: ''}];
}

export async function getTrendingArtists() {
  noStore()
  // Fetch trending artists from your API or database
  // This data will be fetched at request time

  return [{ name: '', genre: '', image: '' }]
}

export async function getServices() {
  const services = await fetch(`${process.env.VERCEL_URL}/api/services`, { method: "POST", headers: { 'Content-Type': 'application/json'}})
  .then(data => data.json());
  return services;
}