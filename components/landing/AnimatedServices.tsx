'use client'

import { motion } from "framer-motion"
import { CardContent, Card } from "@/components/ui/card"
import RevealOnScroll from '@/components/ui/revealOnScroll';
import { MusicIcon, CalendarIcon, TicketIcon, UserIcon } from "lucide-react"
import { IconName, Service } from '@/lib/data/serviceData';

const iconMap: Record<IconName, React.ComponentType> = {
  ticket: TicketIcon,
  calendar: CalendarIcon,
  music: MusicIcon,
  user: UserIcon,
  default: UserIcon
}

export default function AnimatedServices({ services } : { services: Service[] }) {  
  return (
    <RevealOnScroll>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const ServiceIcon = iconMap[service.icon] || iconMap['default']; 
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {ServiceIcon && <ServiceIcon className="h-12 w-12 mb-4" />}
                    
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg font-bold"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {service.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </RevealOnScroll>
  )
}