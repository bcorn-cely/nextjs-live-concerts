import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'
import AnimatedHeader from '@/components/landing/AnimatedHeader'
import AnimatedHero from '@/components/landing/AnimatedHero'
import AnimatedEvents from '@/components/landing/AnimatedEvents'
import AnimatedArtists from '@/components/landing/AnimatedArtists'
import AnimatedServices from '@/components/landing/AnimatedServices'
import AnimatedNewsletter from '@/components/landing/AnimatedNewsletter'
import { getServices, getFeaturedEvents, getTrendingArtists } from '@/lib/db'
import LoadingArtists from '@/components/landing/loading/LoadingArtists'
import LoadingServices from '@/components/landing/loading/LoadingServices'
import LoadingEvents from '@/components/landing/loading/LoadingEvents'
import { withDelay } from '@/lib/delay'
import { Leaf, Coffee, Apple } from 'lucide-react'

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-orange-900">
      <AnimatedHeader />
      <main className="flex-1">
        <AnimatedHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-800">Autumn Events</h2>
            <Suspense fallback={<LoadingEvents />}>
              <FeaturedEvents />
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-800">Fall Favorites</h2>
            <Suspense fallback={<LoadingArtists />}>
              <TrendingArtists />
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-800">Seasonal Services</h2>
            <Suspense fallback={<LoadingServices />}>
              <Services />
            </Suspense>
          </div>
        </section>
        <FallActivities />
        <AnimatedNewsletter />
      </main>
      <footer className="w-full py-6 bg-orange-200 text-orange-900">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; 2024 Fall Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

async function Services() {
  const services = await getServices()
  return <AnimatedServices services={services} />
}

async function FeaturedEvents() {
  noStore()
  const events = await withDelay(getFeaturedEvents(), 2000)
  return <AnimatedEvents events={events} />
}

async function TrendingArtists() {
  noStore()
  const artists = await withDelay(getTrendingArtists(), 2000)
  return <AnimatedArtists artists={artists} />
}

function FallActivities() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-orange-800">Fall Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ActivityCard
            icon={<Leaf className="w-12 h-12 text-orange-600" />}
            title="Leaf Peeping"
            description="Enjoy the beautiful autumn colors with guided tours through scenic routes."
          />
          <ActivityCard
            icon={<Coffee className="w-12 h-12 text-orange-600" />}
            title="Cozy Cafés"
            description="Warm up with seasonal drinks and treats at our partner cafés."
          />
          <ActivityCard
            icon={<Apple className="w-12 h-12 text-orange-600" />}
            title="Apple Picking"
            description="Visit local orchards for apple picking and fall-themed activities."
          />
        </div>
      </div>
    </section>
  )
}

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ActivityCard({ icon, title, description }: ActivityCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-orange-800">{title}</h3>
      <p className="mt-2 text-center text-orange-700">{description}</p>
    </div>
  )
}