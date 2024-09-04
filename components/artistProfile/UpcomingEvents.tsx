import { Event } from '@/lib/data/eventData'

export default function UpcomingEvents({ events }: { events: Event[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold">{event.name}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.venue}, {event.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}