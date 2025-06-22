import {
  Show,
  NavigationItem,
  TicketInfo,
  ParkHours,
  AnimalInfo,
} from '@/types'
import { NavigationIds, NavigationTitles, NavigationRoutes } from './navigation'
import { ButtonText, PlaceholderText, TimeFormats } from './text'

export const navigationItems: NavigationItem[] = [
  {
    id: NavigationIds.MAP,
    title: NavigationTitles.MAP,
    icon: require('../../assets/icons/Map.png'),
    route: NavigationRoutes.MAP,
  },
  {
    id: NavigationIds.INHABITANTS,
    title: NavigationTitles.INHABITANTS,
    icon: require('../../assets/icons/Inhabitant.png'),
    route: NavigationRoutes.INHABITANTS,
  },
  {
    id: NavigationIds.SHOWS,
    title: NavigationTitles.SHOWS,
    icon: require('../../assets/icons/Show.png'),
    route: NavigationRoutes.SHOWS,
  },
  {
    id: NavigationIds.SHOPPING,
    title: NavigationTitles.SHOPPING,
    icon: require('../../assets/icons/Shopping.png'),
    route: NavigationRoutes.SHOPPING,
  },
  {
    id: NavigationIds.DINE,
    title: NavigationTitles.DINE,
    icon: require('../../assets/icons/Dine.png'),
    route: NavigationRoutes.DINE,
  },
  {
    id: NavigationIds.MEET_GREETS,
    title: NavigationTitles.MEET_GREETS,
    icon: require('../../assets/icons/Meet.png'),
    route: NavigationRoutes.MEET_GREETS,
  },
]

export const upcomingShows: Show[] = [
  {
    id: '1',
    title: 'Dive Feeding @ Shipwreck',
    time: '2:30 PM',
    image: require('../../assets/icons/dive.png'),
  },
  {
    id: '2',
    title: 'Say Cheese Shark',
    time: '2:40 PM',
    image: require('../../assets/icons/dive.png'),
  },
]

export const ticketInfo: TicketInfo = {
  hasTickets: false,
  message: PlaceholderText.NO_TICKETS,
  action: ButtonText.RETRIEVE_HERE,
}

export const parkHours: ParkHours = {
  date: TimeFormats.TODAY_DATE,
  hours: TimeFormats.PARK_HOURS,
  action: ButtonText.PLAN_MY_VISIT,
}

export const alligatorGarInfo: AnimalInfo = {
  id: '1',
  name: 'Alligator Gar',
  zone: 'ZONE 1',
  distance: '410m away',
  description:
    "With its wide, alligator-like snout and razor-sharp teeth, it's easy to see how this fish acquired its name. Despite its ferocious appearance, the alligator gar poses little threat to human beings. They prefer to lie and wait for unsuspecting prey within reach, before lunging forward to grab their prey.",
  facts:
    'As the largest species in the gar family, the alligator gar can reach up to 3 metres in length. Scientists have traced this species in fossil records dating back to 100 million years ago, hence they are also known as living fossils!',
  image: require('../../assets/icons/Fish.png'),
}
