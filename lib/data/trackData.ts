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
