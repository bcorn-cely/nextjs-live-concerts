import Image from 'next/image';
import { notFound } from 'next/navigation'
import { getAllArtistIds, getArtistWithDetails } from '@/lib/db';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Music, Share2, Heart } from 'lucide-react'
import UpcomingEvents from '@/components/artistProfile/UpcomingEvents'
import PopularTracks from '@/components/artistProfile/PopularTracks'
import SocialLinks from '@/components/artistProfile/SocialLinks';

export async function generateStaticParams(){
    const artistIds = await getAllArtistIds(100);
    return artistIds.map(id => ({ id }))
}

export const revalidate = 3600;

export default async function ArtistProfile({ params }: { params: { id: string } }) {
  const artist = await getArtistWithDetails(params.id)

  if (!artist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={artist.image}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto flex items-end justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">{artist.name}</h1>
              <Badge variant="secondary" className="text-lg">{artist.genre}</Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="tracks">Tracks</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{artist.bio}</p>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Music className="h-4 w-4 mr-2" />
                        <span>Genre: {artist.genre}</span>
                      </li>
                      <li className="flex items-center">
                        <Music className="h-4 w-4 mr-2" />
                        <span>Total Tracks: {artist.popularTracks.length}</span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Upcoming Shows: {artist.upcomingEvents.length}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <SocialLinks links={artist.socialLinks} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="events">
            <UpcomingEvents events={artist.upcomingEvents} />
          </TabsContent>
          <TabsContent value="tracks">
            <PopularTracks tracks={artist.popularTracks} />
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About {artist.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{artist.bio}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}