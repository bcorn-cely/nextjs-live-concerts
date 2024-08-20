import { SocialLink } from '@/lib/data'
import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'

const iconMap = {
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  Spotify: FaSpotify,
}

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Follow</h2>
      <div className="flex space-x-4">
        {links.map((link) => {
          const Icon = iconMap[link.platform as keyof typeof iconMap]
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </div>
  )
}