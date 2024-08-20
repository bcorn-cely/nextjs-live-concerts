import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const services = [
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
    ];
    return NextResponse.json(services, { status: 200 })
}