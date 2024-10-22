import { unstable_flag as flags } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';

export const showFallLandingPage = flags({
    key: 'showFallLandingPage',
    async decide() {
        const value = await get('flags');
        // @ts-ignore -- nested flags from edge config
        const flag = value && value[this.key];
        return flag ?? false;
    }
});

export const landingPageFlags = [showFallLandingPage] as const;

export const showArtistProfilePageVar = flags({
    key: 'showArtistProfilePageVar',
    async decide() {
        const value = await get('flags');
        // @ts-ignore -- nested flags from edge config
        const flag = value && value[this.key];
        return flag ?? false;
    }
});

export const artistProfilePageFlags = [ showArtistProfilePageVar ] as const;


export const showAIChatBot = flags({
    key: 'showAIChatBot',
    async decide() {
        const value = await get('flags');
        // @ts-ignore
        const flag = value && value[this.key];
        return flag && false;
    }
})