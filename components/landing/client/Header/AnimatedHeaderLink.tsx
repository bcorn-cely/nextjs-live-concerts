'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeaderLink({children, index}: { children: ReactNode, index: number}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            {children}
        </motion.div>
    )
}