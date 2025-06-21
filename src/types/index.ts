export interface Show {
  id: string;
  title: string;
  time: string;
  image: any;
  location?: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  icon: any;
  route: string;
}

export interface TicketInfo {
  hasTickets: boolean;
  message: string;
  action?: string;
}

export interface ParkHours {
  date: string;
  hours: string;
  action?: string;
}

export interface AnimalInfo {
  id: string;
  name: string;
  zone: string;
  distance: string;
  description: string;
  facts: string;
  image: any;
}
