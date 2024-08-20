import { unstable_noStore as noStore } from 'next/cache'

/**
 * Events 
 */

// Event Data
export interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  city: string;
  image: string;
}

export const mockEventData: Event[] = [
  {
    id: "e1",
    name: "Summer Beats Festival",
    date: "2023-07-15",
    venue: "Sunset Park Amphitheater",
    city: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e2",
    name: "Indie Rock Night",
    date: "2023-07-22",
    venue: "The Basement",
    city: "New York, NY",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e3",
    name: "Electronic Dreams",
    date: "2023-07-29",
    venue: "Neon Club",
    city: "Miami, FL",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e4",
    name: "Acoustic in the Park",
    date: "2023-08-05",
    venue: "Central Park",
    city: "New York, NY",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e5",
    name: "Hip Hop Block Party",
    date: "2023-08-12",
    venue: "Downtown Square",
    city: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e6",
    name: "Jazz & Blues Festival",
    date: "2023-08-19",
    venue: "Riverfront Park",
    city: "New Orleans, LA",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e7",
    name: "Synthwave Nights",
    date: "2023-08-26",
    venue: "Retro Lounge",
    city: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: "e8",
    name: "Rock the City",
    date: "2023-09-02",
    venue: "City Arena",
    city: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: "e9",
    name: "Soulful Sundays",
    date: "2023-09-09",
    venue: "Harmony Hall",
    city: "Detroit, MI",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e10",
    name: "Eclectic Music Fest",
    date: "2023-09-16",
    venue: "Freedom Park",
    city: "Austin, TX",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

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

export interface SocialLink {
  id: string;
  artistId: string;
  platform: string;
  url: string;
}

export const mockSocialLinks: SocialLink[] = [
  // The Melodic Waves
  { id: "s1", artistId: "a1", platform: "Instagram", url: "https://instagram.com/melodicwaves" },
  { id: "s2", artistId: "a1", platform: "Twitter", url: "https://twitter.com/melodicwaves" },
  { id: "s3", artistId: "a1", platform: "Spotify", url: "https://open.spotify.com/artist/melodicwaves" },
  
  // Neon Pulse
  { id: "s4", artistId: "a2", platform: "Instagram", url: "https://instagram.com/neonpulse" },
  { id: "s5", artistId: "a2", platform: "Twitter", url: "https://twitter.com/neonpulse" },
  { id: "s6", artistId: "a2", platform: "Spotify", url: "https://open.spotify.com/artist/neonpulse" },
  
  // Acoustic Serenity
  { id: "s7", artistId: "a3", platform: "Instagram", url: "https://instagram.com/acousticserenity" },
  { id: "s8", artistId: "a3", platform: "Twitter", url: "https://twitter.com/acousticserenity" },
  { id: "s9", artistId: "a3", platform: "Spotify", url: "https://open.spotify.com/artist/acousticserenity" },
  
  // Beats & Pieces
  { id: "s10", artistId: "a4", platform: "Instagram", url: "https://instagram.com/beatsandpieces" },
  { id: "s11", artistId: "a4", platform: "Twitter", url: "https://twitter.com/beatsandpieces" },
  { id: "s12", artistId: "a4", platform: "Spotify", url: "https://open.spotify.com/artist/beatsandpieces" },
  
  // Jazzy Jive
  { id: "s13", artistId: "a5", platform: "Instagram", url: "https://instagram.com/jazzyjive" },
  { id: "s14", artistId: "a5", platform: "Twitter", url: "https://twitter.com/jazzyjive" },
  { id: "s15", artistId: "a5", platform: "Spotify", url: "https://open.spotify.com/artist/jazzyjive" },
  
  // Electric Echo
  { id: "s16", artistId: "a6", platform: "Instagram", url: "https://instagram.com/electricecho" },
  { id: "s17", artistId: "a6", platform: "Twitter", url: "https://twitter.com/electricecho" },
  { id: "s18", artistId: "a6", platform: "Spotify", url: "https://open.spotify.com/artist/electricecho" },
  
  // The Rockin' Roots
  { id: "s19", artistId: "a7", platform: "Instagram", url: "https://instagram.com/rockinroots" },
  { id: "s20", artistId: "a7", platform: "Twitter", url: "https://twitter.com/rockinroots" },
  { id: "s21", artistId: "a7", platform: "Spotify", url: "https://open.spotify.com/artist/rockinroots" },
  
  // Soulful Serenade
  { id: "s22", artistId: "a8", platform: "Instagram", url: "https://instagram.com/soulfulserenade" },
  { id: "s23", artistId: "a8", platform: "Twitter", url: "https://twitter.com/soulfulserenade" },
  { id: "s24", artistId: "a8", platform: "Spotify", url: "https://open.spotify.com/artist/soulfulserenade" },
];

export function getSocialLinksByArtistId(id: string){
  return mockSocialLinks.filter(socialLink => socialLink.artistId === id);
}


/**
 * Artists 
 */

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
}

export const mockArtistData: Artist[] = [
  {
    id: "a1",
    name: "The Melodic Waves",
    genre: "Indie Rock",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    bio: "The Melodic Waves, formed in 2015, have quickly become one of the most exciting indie rock bands of their generation. Hailing from the vibrant music scene of Portland, Oregon, the four-piece group is known for their introspective lyrics, atmospheric sound, and captivating live performances. Their unique blend of shimmering guitars, driving rhythms, and haunting vocals has earned them a dedicated following and critical acclaim. With two studio albums and numerous EPs under their belt, The Melodic Waves continue to push the boundaries of indie rock, creating music that is both deeply personal and universally relatable."
  },
  {
    id: "a2",
    name: "Neon Pulse",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Neon Pulse is at the forefront of the synthwave movement, crafting electronic soundscapes that transport listeners to a neon-soaked, retro-futuristic world. Founded in 2018 by producer and keyboardist Alex Nova, Neon Pulse has quickly gained a reputation for their immersive live shows and meticulously crafted studio productions. Drawing inspiration from 80s pop culture, cyberpunk aesthetics, and classic electronic music, their sound is a perfect blend of nostalgia and cutting-edge production techniques. With each release, Neon Pulse continues to expand their sonic palette, pushing the boundaries of what synthwave can be."
  },
  {
    id: "a3",
    name: "Acoustic Serenity",
    genre: "Folk",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Acoustic Serenity is a folk duo that has been enchanting audiences with their heartfelt lyrics and mesmerizing harmonies since 2016. Comprising singer-songwriters Emma Larsson and Michael Thornton, the pair met at a local open mic night in their hometown of Nashville, Tennessee. Their music, characterized by delicate guitar work and poignant storytelling, draws from personal experiences and the rich tradition of American folk music. Acoustic Serenity's intimate performances and three critically acclaimed albums have earned them a devoted following and appearances at major folk festivals across the country."
  },
  {
    id: "a4",
    name: "Beats & Pieces",
    genre: "Hip Hop",
    image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Beats & Pieces is a dynamic hip hop collective that has been shaking up the scene since their formation in 2018. Based in Atlanta, Georgia, this group of five talented MCs and one innovative producer has been pushing the boundaries of what hip hop can be. Known for their razor-sharp lyricism, experimental beats, and high-energy live shows, Beats & Pieces has quickly risen from local favorites to national attention. Their music tackles social issues, personal struggles, and the joy of creation, all delivered with skillful wordplay and infectious rhythms. With two mixtapes and one studio album to their name, Beats & Pieces is poised to become one of the most influential voices in contemporary hip hop."
  },
  {
    id: "a5",
    name: "Jazzy Jive",
    genre: "Jazz",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Jazzy Jive, a quintet formed in 2010, has been at the forefront of the modern jazz renaissance. Led by virtuoso pianist Sarah Thompson, the group's sound is deeply rooted in the jazz tradition while incorporating elements of contemporary music. Based in New Orleans, the birthplace of jazz, Jazzy Jive's music is a melting pot of styles, reflecting the rich cultural heritage of their hometown. Their improvisational skills and tight-knit ensemble playing have made them favorites in jazz clubs and festivals worldwide. With four albums to their name, each showcasing their growth and evolving sound, Jazzy Jive continues to push the boundaries of jazz in the 21st century."
  },
  {
    id: "a6",
    name: "Electric Echo",
    genre: "Electronic",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Electric Echo, the brainchild of producers and DJs Lisa Chen and David Okafor, has been at the cutting edge of electronic music since 2017. This London-based duo is known for their genre-defying sound that seamlessly blends elements of house, techno, and ambient music. Their live performances are a true spectacle, combining pulsating beats with stunning visuals to create an immersive experience. Electric Echo's production skills have been sought after by some of the biggest names in pop and electronic music, leading to high-profile collaborations and remixes. With three EPs and countless singles, they continue to be a driving force in the ever-evolving electronic music landscape."
  },
  {
    id: "a7",
    name: "The Rockin' Roots",
    genre: "Rock",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    bio: "The Rockin' Roots are a four-piece rock band that has been carrying the torch of classic rock into the 21st century since their formation in 2014. Hailing from Detroit, Michigan, their sound is deeply influenced by the giants of rock from the '60s and '70s, but with a modern twist that keeps their music fresh and relevant. Known for their electrifying live performances, blistering guitar solos, and anthemic choruses, The Rockin' Roots have built a strong following through relentless touring and three well-received studio albums. Their music celebrates the spirit of rock 'n' roll while addressing contemporary themes, bridging the gap between rock's storied past and its exciting future."
  },
  {
    id: "a8",
    name: "Soulful Serenade",
    genre: "R&B",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Soulful Serenade, formed in 2016, is an R&B group that has been captivating audiences with their smooth harmonies and heartfelt performances. This quartet, consisting of two male and two female vocalists, first met in a gospel choir in Philadelphia and bonded over their shared love of classic and contemporary R&B. Their music is a perfect blend of old-school soul and modern R&B, with lush vocal arrangements and sleek production. Soulful Serenade's debut album earned them critical acclaim and comparisons to R&B greats, while their sophomore effort saw them experimenting with more eclectic influences. Known for their emotional live performances and undeniable chemistry, Soulful Serenade is breathing new life into the R&B genre."
  }
];

// Artist-Event Relationship
export interface ArtistEvent {
  artistId: string;
  eventId: string;
}

export const mockArtistEvents: ArtistEvent[] = [
  { artistId: "a1", eventId: "e1" },
  { artistId: "a1", eventId: "e2" },
  { artistId: "a1", eventId: "e10" },
  { artistId: "a2", eventId: "e1" },
  { artistId: "a2", eventId: "e3" },
  { artistId: "a2", eventId: "e7" },
  { artistId: "a3", eventId: "e2" },
  { artistId: "a3", eventId: "e4" },
  { artistId: "a3", eventId: "e10" },
  { artistId: "a4", eventId: "e1" },
  { artistId: "a4", eventId: "e5" },
  { artistId: "a4", eventId: "e10" },
  { artistId: "a5", eventId: "e6" },
  { artistId: "a5", eventId: "e9" },
  { artistId: "a5", eventId: "e10" },
  { artistId: "a6", eventId: "e3" },
  { artistId: "a6", eventId: "e7" },
  { artistId: "a6", eventId: "e10" },
  { artistId: "a7", eventId: "e1" },
  { artistId: "a7", eventId: "e8" },
  { artistId: "a7", eventId: "e10" },
  { artistId: "a8", eventId: "e6" },
  { artistId: "a8", eventId: "e9" },
  { artistId: "a8", eventId: "e10" }
];

export function getEventsByArtistId(id: string) {
  const artistEventIds = mockArtistEvents
    .filter(artistEvent => artistEvent.artistId === id)
    .map(ae => ae.eventId);
  return mockEventData.filter(event => artistEventIds.includes(event.id))
}


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
  const popularTracks = allPopularTracks.sort((a, b) => b.plays - a.plays)

  if(artist) return { ...artist, upcomingEvents, popularTracks, socialLinks }
}

export async function getArtistsId(limit: number): Promise<string[]> {
  return Promise.resolve(mockArtistData.map(artist => artist.id));
}

/**
 * Tracks
 */

export interface Track {
  id: string;
  artistId: string;
  name: string;
  duration: string;
  plays: number;
}

export const mockTracks: Track[] = [
  // The Melodic Waves
  { id: "t1", artistId: "a1", name: "Echoes of You", duration: "3:45", plays: 1500000 },
  { id: "t2", artistId: "a1", name: "Neon Sunrise", duration: "4:12", plays: 1200000 },
  { id: "t3", artistId: "a1", name: "Whispers in the Wind", duration: "3:58", plays: 900000 },
  
  // Neon Pulse
  { id: "t4", artistId: "a2", name: "Retro Future", duration: "3:58", plays: 1800000 },
  { id: "t5", artistId: "a2", name: "Neon Dreams", duration: "4:25", plays: 1600000 },
  { id: "t6", artistId: "a2", name: "Synthwave Nights", duration: "3:50", plays: 1400000 },
  
  // Acoustic Serenity
  { id: "t7", artistId: "a3", name: "Mountain Melody", duration: "4:05", plays: 1100000 },
  { id: "t8", artistId: "a3", name: "Whispering Pines", duration: "3:40", plays: 950000 },
  { id: "t9", artistId: "a3", name: "Acoustic Dreams", duration: "4:30", plays: 880000 },
  
  // Beats & Pieces
  { id: "t10", artistId: "a4", name: "Urban Rhythm", duration: "3:35", plays: 2000000 },
  { id: "t11", artistId: "a4", name: "Street Poetry", duration: "4:15", plays: 1750000 },
  { id: "t12", artistId: "a4", name: "Beat Drop", duration: "3:55", plays: 1650000 },
  
  // Jazzy Jive
  { id: "t13", artistId: "a5", name: "Smooth Saxophone", duration: "5:20", plays: 1300000 },
  { id: "t14", artistId: "a5", name: "Jazz Fusion", duration: "4:45", plays: 1100000 },
  { id: "t15", artistId: "a5", name: "Midnight Blues", duration: "4:10", plays: 950000 },
  
  // Electric Echo
  { id: "t16", artistId: "a6", name: "Digital Dreamscape", duration: "6:15", plays: 2200000 },
  { id: "t17", artistId: "a6", name: "Electro Pulse", duration: "4:30", plays: 1900000 },
  { id: "t18", artistId: "a6", name: "Synthetic Harmony", duration: "5:05", plays: 1700000 },
  
  // The Rockin' Roots
  { id: "t19", artistId: "a7", name: "Classic Riff", duration: "4:20", plays: 1600000 },
  { id: "t20", artistId: "a7", name: "Guitar Hero", duration: "3:55", plays: 1400000 },
  { id: "t21", artistId: "a7", name: "Rock Anthem", duration: "4:40", plays: 1250000 },
  
  // Soulful Serenade
  { id: "t22", artistId: "a8", name: "Heartfelt Harmony", duration: "4:50", plays: 1800000 },
  { id: "t23", artistId: "a8", name: "Soulful Nights", duration: "4:15", plays: 1650000 },
  { id: "t24", artistId: "a8", name: "R&B Romance", duration: "3:55", plays: 1500000 },
];

export function getTracksByArtistId(id: string) {
  return mockTracks.filter(track => track.artistId === id);
}

/**
 * Services
 */

export type IconName = 'ticket' | 'calendar' | 'music' | 'user' | 'default'

export interface Service {
  title: string
  description: string
  icon: IconName
}

export const mockServiceData: Service[] = [
  {
      title: 'Ticket Booking', 
      description: 'Secure your spot at your favorite concerts with ease.',
      icon: 'ticket'
  },
  {
      title: 'Event Calendar',
      description: "Stay updated with all upcoming music events in your area.",
      icon: 'calendar',
  }, 
  {
      title: 'Artist Profiles',
      description: 'Explore detailed profiles of your favorite bands and artists.',
      icon: 'music'
  }
]

export async function getServices(): Promise<Service[]> {
  const services: Promise<Service[]> = Promise.resolve(mockServiceData);
  return services;
}