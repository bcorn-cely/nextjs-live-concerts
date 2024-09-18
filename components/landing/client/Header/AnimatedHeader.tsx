'use client';

import { motion } from "framer-motion"
import { ReactNode } from "react";

export default function AnimatedHeaderClient({children}: { children: ReactNode}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
  )
}