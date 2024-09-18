

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { FacebookIcon, TwitterIcon } from "lucide-react"
import { shareEvent } from '@/actions/actions';
import { Event } from '@/lib/data/eventData';
import ShareButtons from "./client/ShareButtons";


export default function AnimatedEvents({ events }: { events: Event[] }) {
  const lessEvents = events.slice(0, 6);
  return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessEvents.map((event: Event, index: number) => (
            <Card key = {`event-${index}`}className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative w-full h-48 mb-4">
                  <Image 
                    src={event.image} 
                    alt={event.name} 
                    fill 
                    style={{objectFit: "cover"}}
                    className="rounded"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{event.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">{event.venue}, {event.city}</p>
                <ShareButtons eventId={event.id} />
              </CardContent>
            </Card>
        ))}
      </div>
  )
}