'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { MusicIcon } from "lucide-react"

export default function AnimatedHeader() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 lg:px-6 h-14 flex items-center"
    >
      <Link className="flex items-center justify-center" href="#">
        <MusicIcon className="h-6 w-6" />
        <span className="sr-only">MusicTown</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["Home", "Search", "Events", "Services"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  )
}