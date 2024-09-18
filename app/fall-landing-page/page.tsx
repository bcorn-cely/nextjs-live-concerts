import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'
import Header from '@/components/landing/Header'
import AnimatedHeaderClient from '@/components/landing/client/Header/AnimatedHeader'
import Hero from '@/components/landing/Hero'
import AnimatedHero from '@/components/landing/client/Hero/AnimatedHero'
import Events from '@/components/landing/Events'
import AnimatedEventsClient from '@/components/landing/client/AnimatedEvents'
import Artists from '@/components/landing/Artists'
import Services from '@/components/landing/Services'
import AnimatedServices from '@/components/landing/client/AnimatedServices'
import Newsletter from '@/components/landing/Newsletter'
import AnimatedNewsletter from '@/components/landing/client/AnimatedNewsletter'
import { getServices, getFeaturedEvents, getTrendingArtists } from '@/lib/db';
import LoadingArtists from '@/components/landing/loading/LoadingArtists'
import LoadingServices from '@/components/landing/loading/LoadingServices'
import LoadingEvents from '@/components/landing/loading/LoadingEvents'
import { withDelay } from '@/lib/delay'
import AnimatedArtistsClient from '@/components/landing/client/AnimatedArtists'
import { Leaf, Coffee, Apple } from 'lucide-react'

export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-orange-900">
      <LandingHeader />
      <main className="flex-1">
        <AnimatedHero>
          <Hero />
        </AnimatedHero>
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
              <AllServices />
            </Suspense>
          </div>
        </section>
        <FallActivities />
        <AnimatedNewsletter>
            <Newsletter />
        </AnimatedNewsletter>
      </main>
      <footer className="w-full py-6 bg-orange-200 text-orange-900">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; 2024 Fall Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function LandingHeader () {
  return (
    <AnimatedHeaderClient>
      <Header />
    </AnimatedHeaderClient>
  )
}

async function AllServices() {
  const services = await getServices()
  return (
    <AnimatedServices>
      <Services services={services} />
    </AnimatedServices>
  )
}
async function FeaturedEvents() {
  const events = await withDelay(getFeaturedEvents(), 2000)
  return (
    <AnimatedEventsClient>
      <Events events={events} />
    </AnimatedEventsClient>
  )
}

async function TrendingArtists() {
  const artists = await withDelay(getTrendingArtists(), 2000)
  return (
    <AnimatedArtistsClient>
      <Artists artists={artists} />
    </AnimatedArtistsClient>
  )
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