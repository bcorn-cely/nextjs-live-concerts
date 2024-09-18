import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'
import AnimatedHeader from '@/components/landing/AnimatedHeader'
import AnimatedHero from '@/components/landing/AnimatedHero'
import AnimatedEvents from '@/components/landing/AnimatedEvents'
import AnimatedArtists from '@/components/landing/AnimatedArtists'
import AnimatedServices from '@/components/landing/AnimatedServices'
import AnimatedNewsletter from '@/components/landing/AnimatedNewsletter'
import { getServices, getFeaturedEvents, getTrendingArtists } from '@/lib/db';
import LoadingArtists from '@/components/landing/loading/LoadingArtists'
import LoadingServices from '@/components/landing/loading/LoadingServices'
import LoadingEvents from '@/components/landing/loading/LoadingEvents'
import { withDelay } from '@/lib/delay'

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-1">
        <AnimatedHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Events</h2>
            <Suspense fallback={<LoadingEvents />}>
              <FeaturedEvents />
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Trending Artists</h2>
            <Suspense fallback={<LoadingArtists />}>
              <TrendingArtists />
            </Suspense>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Services</h2>
              <Suspense fallback={<LoadingServices />}>
                <Services />
              </Suspense>
          </div>
        </section>
        <AnimatedNewsletter />
      </main>
      {/* Footer content */}
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