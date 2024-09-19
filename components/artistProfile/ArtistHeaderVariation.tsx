import Image from 'next/image'
import { Artist } from '@/lib/data/artistData'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2, Music, Users } from 'lucide-react'

export default function ArtistHeader({ artist }: { artist: Artist }) {
  return (
    <div className="relative">
      <div className="h-[40vh] min-h-[300px] relative overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="container mx-auto px-4">
        <Card className="relative -mt-20 z-10 overflow-visible">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative w-24 h-24 mr-6 rounded-full overflow-hidden border-4 border-background">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button>Follow</Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}