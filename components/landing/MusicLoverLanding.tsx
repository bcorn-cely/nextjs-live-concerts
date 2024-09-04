import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarIcon, TicketIcon, UserIcon } from "lucide-react"

export default function Component() {
  // Simulated trending artists data
  const trendingArtists = [
    { name: "The Melodic Waves", genre: "Indie Rock", image: "/placeholder.svg?height=100&width=100" },
    { name: "Neon Pulse", genre: "Synthwave", image: "/placeholder.svg?height=100&width=100" },
    { name: "Acoustic Serenity", genre: "Folk", image: "/placeholder.svg?height=100&width=100" },
    { name: "Beats & Pieces", genre: "Hip Hop", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 lg:px-6 h-14 flex items-center"
      >
        <Link className="flex items-center justify-center" href="#">
          {/* <MusicIcon className="h-6 w-6" /> */}
          <span className="sr-only">MusicTown</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Search
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
        </nav>
      </motion.header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Live Music in Your Town
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find upcoming concerts, explore new bands, and never miss a beat with MusicTown.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-sm space-y-2"
              >
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for bands or venues" type="text" />
                  <Button type="submit">Search</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Rock Night Extravaganza", "Jazz in the Park", "Indie Showcase"].map((event, index) => (
                <motion.div
                  key={event}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{event}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {["Fri, Jul 15 • Downtown Arena", "Sat, Jul 16 • Central Park", "Sun, Jul 17 • The Basement Venue"][index]}
                      </p>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline">
                          {/* <FacebookIcon className="h-4 w-4 mr-2" /> */}
                          Share
                        </Button>
                        <Button size="sm" variant="outline">
                          {/* <TwitterIcon className="h-4 w-4 mr-2" /> */}
                          Tweet
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Trending Artists</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trendingArtists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-24 h-24 rounded-full mb-4"
                      />
                      <h3 className="text-lg font-bold">{artist.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{artist.genre}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: CalendarIcon, title: "Event Calendar", description: "Stay updated with all upcoming music events in your area." },
                { icon: TicketIcon, title: "Ticket Booking", description: "Secure your spots at your favorite concerts with ease." },
                { icon: UserIcon, title: "Artist Profiles", description: "Explore detailed profiles of your favorite bands and artists." }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <service.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Never Miss a Beat</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up for our newsletter to get the latest updates on concerts and exclusive offers.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MusicTown. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}