/**
 * Services
 */

export type IconName = 'ticket' | 'calendar' | 'music' | 'user' | 'default'

export interface Service {
  title: string
  description: string
  icon: IconName
}

export const mockServiceData: Service[] = [
  {
      title: 'Ticket Booking', 
      description: 'Secure your spot at your favorite concerts with ease.',
      icon: 'ticket'
  },
  {
      title: 'Event Calendar',
      description: "Stay updated with all upcoming music events in your area.",
      icon: 'calendar',
  }, 
  {
      title: 'Artist Profiles',
      description: 'Explore detailed profiles of your favorite bands and artists.',
      icon: 'music'
  }
]