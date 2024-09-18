'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeading({children}: { children: ReactNode}) {
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}