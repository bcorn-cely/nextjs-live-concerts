import { Track } from '@/lib/data/trackData'

export default function PopularTracks({ tracks }: { tracks: Track[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Popular Tracks</h2>
      <div className="space-y-2">
        {tracks.map((track) => (
          <div key={track.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
            <div>
              <h3 className="font-bold">{track.name}</h3>
              <p className="text-sm text-gray-500">{track.duration}</p>
            </div>
            <p>{track.plays.toLocaleString()} plays</p>
          </div>
        ))}
      </div>
    </div>
  )
}