import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import AnimatedText from "./client/Hero/AnimatedText"
import AnimatedHeading from "./client/Hero/AnimatedHeading"
import AnimatedForm from "./client/Hero/AnimatedForm"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AnimatedHeading>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Live Music in Your Town
            </h1>
          </AnimatedHeading>
          <AnimatedText>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Find upcoming concerts, explore new bands, and never miss a beat with MusicTown.
            </p>
          </AnimatedText>
          <div className="w-full max-w-sm space-y-2">
            <AnimatedForm>
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for bands or venues" type="text" />
                  <Button type="submit">Search</Button>
                </form>
            </AnimatedForm>
          </div>
        </div>

        {/* Large Image Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <Image
            width={500}
            height={500}
            src="/music.jpg?height=600&width=1200"
            alt="Live music concert"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}