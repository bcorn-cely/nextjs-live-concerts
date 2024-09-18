'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimatedNewsletter({children} : { children: ReactNode}) {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}