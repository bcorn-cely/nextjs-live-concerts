import { CardContent, Card } from "@/components/ui/card"
import { MusicIcon, CalendarIcon, TicketIcon, UserIcon } from "lucide-react"
import { Service } from '@/lib/data/serviceData';


const iconMap = {
  ticket: TicketIcon,
  calendar: CalendarIcon,
  music: MusicIcon,
  user: UserIcon,
  default: UserIcon
}

export default function Services({ services } : { services: Service[] }) {  
  return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const ServiceIcon = iconMap[service.icon] || iconMap['default']; 
          return (
              <Card key={service.title}>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div
                  >

                    {ServiceIcon && <ServiceIcon className="h-12 w-12 mb-4" />}
                    
                  </div>
                  <h3
                    className="text-lg font-bold"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
          )
        })}
      </div>
  )
}