'use client'

import { motion } from "framer-motion"
import RevealOnScroll from '@/components/ui/revealOnScroll';
import { ReactNode } from "react";

export default function AnimatedArtistsClient({ children } : { children: ReactNode }) {
  return (
    <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
          >
            {children}
          </motion.div>
    </RevealOnScroll>
  )
}