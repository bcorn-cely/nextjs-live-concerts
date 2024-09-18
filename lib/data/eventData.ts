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
    date: "2024-07-15",
    venue: "Sunset Park Amphitheater",
    city: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e2",
    name: "Indie Rock Night",
    date: "2024-07-22",
    venue: "The Basement",
    city: "New York, NY",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e3",
    name: "Electronic Dreams",
    date: "2024-07-29",
    venue: "Neon Club",
    city: "Miami, FL",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e4",
    name: "Acoustic in the Park",
    date: "2024-08-05",
    venue: "Central Park",
    city: "New York, NY",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e5",
    name: "Hip Hop Block Party",
    date: "2024-08-12",
    venue: "Downtown Square",
    city: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e6",
    name: "Jazz & Blues Festival",
    date: "2024-08-19",
    venue: "Riverfront Park",
    city: "New Orleans, LA",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e7",
    name: "Synthwave Nights",
    date: "2024-08-26",
    venue: "Retro Lounge",
    city: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: "e8",
    name: "Rock the City",
    date: "2024-09-02",
    venue: "City Arena",
    city: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: "e9",
    name: "Soulful Sundays",
    date: "2024-09-09",
    venue: "Harmony Hall",
    city: "Detroit, MI",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e10",
    name: "Eclectic Music Fest",
    date: "2024-09-16",
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