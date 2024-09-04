import Image from 'next/image';
import { notFound } from 'next/navigation'
import { getAllArtistIds, getArtistWithDetails } from '@/lib/data';
import ArtistHeader from '@/components/artistProfile/ArtistHeader'
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
      <div className="relative h-64 md:h-96">
        <Image
          src={artist.image}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{artist.name}</h1>
          <p className="text-xl md:text-2xl">{artist.genre}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <p className="text-gray-700 dark:text-gray-300">{artist.bio}</p>
            </section>
            
            <UpcomingEvents events={artist.upcomingEvents} />
            <PopularTracks tracks={artist.popularTracks} />
          </div>
          
          <div>
            <SocialLinks links={artist.socialLinks} />
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Genre: {artist.genre}</li>
                <li>Total Tracks: {artist.popularTracks.length}</li>
                <li>Upcoming Shows: {artist.upcomingEvents.length}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}