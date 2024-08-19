'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { FacebookIcon, TwitterIcon } from "lucide-react"
import { shareEvent } from '@/actions/actions';

export default function AnimatedEvents({ events }: { events: { id: string, name: string, date: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
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
  )
}