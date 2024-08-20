import { NextResponse, NextRequest } from "next/server";
import { Event } from "@/components/landing/AnimatedEvents";

export const featuredEvents: Event[] = [
{
    id: "1",
    name: "Summer Beats Festival",
    date: "2023-07-15",
    venue: "Sunset Park Amphitheater",
    city: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
},
{
    id: "2",
    name: "Indie Rock Night",
    date: "2023-07-22",
    venue: "The Basement",
    city: "New York, NY",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
},
{
    id: "3",
    name: "Electronic Dreams",
    date: "2023-07-29",
    venue: "Neon Club",
    city: "Miami, FL",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
},
{
    id: "4",
    name: "Jazz in the Park",
    date: "2023-08-05",
    venue: "Central Park",
    city: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
},
{
    id: "5",
    name: "Country Music Fest",
    date: "2023-08-12",
    venue: "River Valley Ranch",
    city: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
},
{
    id: "6",
    name: "Hip Hop Block Party",
    date: "2023-08-19",
    venue: "Downtown Square",
    city: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
}
];

export async function GET(req: NextRequest){
return NextResponse.json(featuredEvents, { status: 200 });
}