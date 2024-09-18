'use client';

import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode
    threshold?: number
}

export default function RevealOnScroll({children, threshold = 0.1}: RevealOnScrollProps) {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                controls.start('visible')
            }
        }, { threshold });

        if(ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }
    }, [controls, threshold])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={'hidden'}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{duration: 0.5}}
        >  
        {children}
        </motion.div>
    )
}