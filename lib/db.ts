import { unstable_noStore as noStore } from 'next/cache'
import { Service } from './data/serviceData';
import { mockEventData, Event } from './data/eventData';
import { Artist, mockArtistData } from './data/artistData';
import { SocialLink, mockSocialLinks } from './data/socialLinkData';
import { mockArtistEvents } from './data/artistEventData';
import { mockTracks, Track } from './data/trackData';
import { mockServiceData } from './data/serviceData';


/**
 * Events 
 */

export async function getFeaturedEvents(): Promise<Event[]> {
  noStore()
  // Fetch featured events from your API or database
  // This data will be fetched at request time
  const featuredEvents: Promise<Event[]> = Promise.resolve(mockEventData);
  return featuredEvents;
}

/**
 * SocialLinks
 */

export function getSocialLinksByArtistId(id: string){
  return mockSocialLinks.filter(socialLink => socialLink.artistId === id);
}

/**
 * Artists 
 */

export async function getTrendingArtists(): Promise<Artist[]> {
  noStore()
  // Fetch trending artists from your API or database
  // This data will be fetched at request time
  const trendingArtists: Promise<Artist[]> = Promise.resolve(mockArtistData)
  return trendingArtists;
}

export interface ArtistWithDetails extends Artist {
  upcomingEvents: Event[];
  socialLinks: SocialLink[];
  popularTracks: Track[];
}

export async function getArtistWithDetails(id: string): Promise<ArtistWithDetails | undefined> {
  const artist = mockArtistData.find(artist => artist.id === id);
  const allArtistEvents = getEventsByArtistId(id);
  const allPopularTracks = getTracksByArtistId(id);
  const socialLinks = getSocialLinksByArtistId(id);

  // Sort events by date
  const upcomingEvents = allArtistEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Sort tracks by play count to get the most popular ones
  const sortedTracks = allPopularTracks.sort((a, b) => b.plays - a.plays)

  if(artist) return { ...artist, upcomingEvents, popularTracks: sortedTracks, socialLinks }
}

export async function getAllArtistIds(limit: number): Promise<string[]> {
  return Promise.resolve(mockArtistData.map(artist => artist.id));
}

export function getEventsByArtistId(id: string) {
  const artistEventIds = mockArtistEvents
      .filter(artistEvent => artistEvent.artistId === id)
      .map(ae => ae.eventId);
  return mockEventData.filter(event => artistEventIds.includes(event.id))
  }

/**
 * Tracks
 */


export function getTracksByArtistId(id: string) {
  return mockTracks.filter(track => track.artistId === id);
}

/**
 * Services
 */


export async function getServices(): Promise<Service[]> {
  const services: Promise<Service[]> = Promise.resolve(mockServiceData);
  return services;
}