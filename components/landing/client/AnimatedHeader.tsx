'use client';

import { motion } from "framer-motion"
import { ReactNode } from "react";

export default function AnimatedHeaderClient({children}: { children: ReactNode}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 lg:px-6 h-14 flex items-center"
    >
        {children}
    </motion.div>
  )
}