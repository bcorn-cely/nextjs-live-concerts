import { CardContent, Card } from "@/components/ui/card"
import { Artist } from '@/lib/data/artistData';
import Link from "next/link";
import Image from "next/image";

export default function AnimatedArtists({ artists } : { artists: Artist[] }) {
  return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {artists.map((artist, index) => (
            <Link key={`artist-${index}`} href={`/artist/${artist.id}`}>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Image
                    width={500}
                    height={500}
                    src={artist.image}
                    alt={artist.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {artist.genre}
                  </p>
                </CardContent>
              </Card>
            </Link>
        ))}
      </div>
  )
}