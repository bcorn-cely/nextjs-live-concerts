import Image from 'next/image'
import { Artist } from '@/lib/data/artistData'

export default function ArtistHeader({ artist }: { artist: Artist }) {
  return (
    <div className="relative h-96">
      <Image
        unoptimized
        src={artist.image}
        alt={artist.name}
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
        <p className="text-xl">{artist.genre}</p>
      </div>
    </div>
  )
}