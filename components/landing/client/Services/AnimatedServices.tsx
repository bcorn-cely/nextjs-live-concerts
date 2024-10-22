'use client';
import { ReactNode } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/revealOnScroll";


export default function AnimatedServices({children} : {children: ReactNode}) {
    return (
        <RevealOnScroll>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 * 0.1 }}    
            >
                {children}
            </motion.div>
        </RevealOnScroll>
    )
}