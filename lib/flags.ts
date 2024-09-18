import { unstable_flag as flags } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';

export const showFallLandingPage = flags({
    key: 'showFallLandingPage',
    async decide() {
        const value = await get('showFallLandingPage');
        console.log(' value ', value);
        return value ? true : false;
    }
});

export const landingPageFlags = [showFallLandingPage] as const;

export const showArtistProfilePageVar = flags({
    key: 'showArtistProfilePageVar',
    async decide() {
        const value = await get('showArtistProfilePageVar');
        console.log('value ', value);
        return value ? true : false;
    }
});

export const artistProfilePageFlags = [ showArtistProfilePageVar ] as const;