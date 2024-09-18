import Link from "next/link"
import { MusicIcon } from "lucide-react"

export default function AnimatedHeader() {
  const navs = ["Home", "Search", "Events", "Services"]

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MusicIcon className="h-6 w-6" />
        <span className="sr-only">MusicTown</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navs.map((item, index) => (
          <div key={`nav-${index}`}>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              {item}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}