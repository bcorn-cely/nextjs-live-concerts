import { unstable_flag as flags } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';

export const showFallLandingPage = flags({
    key: 'showFallLandingPage',
    async decide() {
        const value = await get('showFallLandingPage');
        return value ?? false;
    }
});

export const landingPageFlags = [showFallLandingPage] as const;