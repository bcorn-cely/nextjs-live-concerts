'use client'

import { motion } from "framer-motion"
import { CardContent, Card } from "@/components/ui/card"
import RevealOnScroll from '@/components/ui/revealOnScroll';

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
}

export default function AnimatedArtists({ artists } : { artists: Artist[] }) {
  return (
    <RevealOnScroll>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {artists.map((artist, index) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4 flex flex-col items-center text-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={artist.image}
                  alt={artist.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg font-bold"
                >
                  {artist.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {artist.genre}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </RevealOnScroll>
  )
}