'use server';

export async function shareEvent(eventId: string, platform: 'facebook' | 'twitter') {
    console.log(`Sharing event ${eventId} on ${platform}`)
}

