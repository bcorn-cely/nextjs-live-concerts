'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import RevealOnScroll from "@/components/ui/revealOnScroll"
import { FacebookIcon, TwitterIcon } from "lucide-react"
import { shareEvent } from '@/actions/actions';
import { Event } from '@/lib/data';


export default function AnimatedEvents({ events }: { events: Event[] }) {
  const lessEvents = events.slice(0, 6);
  return (
    <RevealOnScroll>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <div className="mt-4 flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => shareEvent(event.id, 'facebook')}>
                    <FacebookIcon className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => shareEvent(event.id, 'twitter')}>
                    <TwitterIcon className="h-4 w-4 mr-2" />
                    Tweet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </RevealOnScroll>
  )
}