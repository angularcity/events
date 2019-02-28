export interface Event {
  id: number | string;
  name: string;
  date: string;
  location: EventLocation;
  imageUrl: string;
  ticketsAvailable: boolean;
  description: string;
}

export interface EventLocation {
  name: string;
  lat: number;
  lng: number;
}

export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}
