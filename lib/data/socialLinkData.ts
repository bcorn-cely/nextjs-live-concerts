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

