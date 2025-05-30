import { Error } from './auth-types';

export type CreateTripState = {
  trip: string;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripCreateType = {
  tripId: string;
  driver: DriverTrip;
  tripDate: string;
  createdAt: string;
  price: number;
  coordinates: Location[];
};

export type DeleteRequestNotification = {
  userId: string;
  entity: string;
};

export type NotificationState = {
  notifications: Notification[] | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type Notification = {
  message: string;
  id: string;
  type: string;
  createdAt: string;
  entity: string;
  userId: string;
};

export type TripRequestType = {
  bookingId: string;
  user: UserTrip;
  trip: TripRequest;
};

export type TripRequestState = {
  requests: TripRequestType[] | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripRequest = {
  tripDate: string;
  tripId: string;
  coordinates: Location[];
};

export type UserTrip = {
  id: string;
  name: string;
  surname: string;
  profilePic: string;
};

export type UpcomingTrip = {
  trip: TripUpcomingType | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripUpcomingType = {
  tripId: string;
  tripDate: string;
  coordinates: Location[];
};

export type UpcomingTripState = {
  trip: TripListType | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripList = {
  trips: TripListType[] | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripListType = {
  tripId: string;
  driver: DriverTrip;
  tripDate: string;
  createdAt: string;
  coordinates: Location[];
  price: string;
  status: string;
};

export type Location = {
  address: string;
  latitude: string;
  longitude: string;
};

export type Passenger = {
  bookingId: string;
};

export type DriverTrip = {
  id: string;
  name: string;
  surname: string;
  profilePic: string;
  avgRating: number;
};

export type BookingRequestState = {
  request: BookingRequestType | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type BookingRequestType = {
  tripId: string;
  bookingId: string;
  passengerId: string;
  tripDate: string;
  cost: string;
  passengerName: string;
  passengerPic: string;
  passengerRating: number;
  startAddress: string;
  startLat: string;
  startLong: string;
  endAddress: string;
  endLat: string;
  endLong: string;
  pickupAddress: string;
  pickupLat: string;
  pickupLong: string;
};

export type TripDetails = {
  trip: TripDetailsType | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type TripDetailsType = {
  tripId: string;
  driver: DriverTrip;
  passengers: [
    {
      userId: string;
      status: string;
      pickUp: {
        address: string;
        latitude: string;
        longitude: string;
      };
    }
  ];
  tripDate: string;
  createdAt: string;
  seatsAvailable?: string;
  price: string;
  coordinates: Location[];
  status: string;
};

export type TripBooking = {
  tripId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type AcceptTripRequest = {
  tripId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type DeclineTripRequest = {
  bookingId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type UpdatePaymentStatusType = {
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type BookingIdType = {
  bookingId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};
export type StartTrip = {
  tripId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type EndTrip = {
  tripId: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type ReviewType = {
  byId: string;
  forId: string;
  tripId: string;
  role: string;
  comment: string;
  rating: string;
};

export type ReviewReturnType = {
  id: string;
};

export type ReviewTripState = {
  review: string | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type PassengerList = {
  passengers: PassengerListType[] | null;
  status: 'success' | 'loading' | 'error' | 'idle';
  error: Error | null;
};

export type PassengerListType = {
  bookingId: string;
  tripId: string;
  userId: string;
  user: UserPassengerList;
};

export type UserPassengerList = {
  name: string;
  profilePic: string;
};

export type Passengers = {
  bookingId: string;
  tripId: string;
  userId: string;
};
