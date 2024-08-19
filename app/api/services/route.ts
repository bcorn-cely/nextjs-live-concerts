import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const services = [
        {
            title: 'buy tickets', 
            description: 'We can sell you some tickets'
        },
        {
            title: 'find concerts',
            description: 'We can help you find a show'
        }
    ];
    console.log('inside api call ', services);
    return NextResponse.json(services, { status: 200 })
}