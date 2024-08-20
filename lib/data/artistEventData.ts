import { mockEventData } from "./eventData";

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
