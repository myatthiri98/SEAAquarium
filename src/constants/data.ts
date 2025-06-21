import {
  Show,
  NavigationItem,
  TicketInfo,
  ParkHours,
  AnimalInfo,
} from "@/types";

export const navigationItems: NavigationItem[] = [
  {
    id: "1",
    title: "Map",
    icon: require("../../assets/icons/Map.png"),
    route: "Map",
  },
  {
    id: "2",
    title: "Inhabitants",
    icon: require("../../assets/icons/Inhabitant.png"),
    route: "Inhabitants",
  },
  {
    id: "3",
    title: "Shows",
    icon: require("../../assets/icons/Show.png"),
    route: "Shows",
  },
  {
    id: "4",
    title: "Shopping",
    icon: require("../../assets/icons/Shopping.png"),
    route: "Shopping",
  },
  {
    id: "5",
    title: "Dine",
    icon: require("../../assets/icons/Dine.png"),
    route: "Dine",
  },
  {
    id: "6",
    title: "Meet & Greets",
    icon: require("../../assets/icons/Meet.png"),
    route: "MeetGreets",
  },
];

export const upcomingShows: Show[] = [
  {
    id: "1",
    title: "Dive Feeding @ Shipwreck",
    time: "2:30 PM",
    image: require("../../assets/icons/dive.png"),
  },
  {
    id: "2",
    title: "Say Cheese Shark",
    time: "2:40 PM",
    image: require("../../assets/icons/dive.png"),
  },
];

export const ticketInfo: TicketInfo = {
  hasTickets: false,
  message: "There aren't any yet",
  action: "Retrieve here",
};

export const parkHours: ParkHours = {
  date: "Today, 13 Feb",
  hours: "10am - 5pm",
  action: "Plan my visit",
};

export const alligatorGarInfo: AnimalInfo = {
  id: "1",
  name: "Alligator Gar",
  zone: "ZONE 1",
  distance: "410m away",
  description:
    "With its wide, alligator-like snout and razor-sharp teeth, it's easy to see how this fish acquired its name. Despite its ferocious appearance, the alligator gar poses little threat to human beings. They prefer to lie and wait for unsuspecting prey within reach, before lunging forward to grab their prey.",
  facts:
    "As the largest species in the gar family, the alligator gar can reach up to 3 metres in length. Scientists have traced this species in fossil records dating back to 100 million years ago, hence they are also known as living fossils!",
  image: require("../../assets/icons/Fish.png"),
};
