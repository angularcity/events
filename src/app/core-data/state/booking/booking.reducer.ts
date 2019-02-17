import { Action } from "@ngrx/store";
import * as fromBooking from "./booking.actions";

export interface BookingState {
  bookings: any[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initState: BookingState = {
  bookings: [],
  loaded: false,
  loading: false,
  error: null
};

export function bookingReducer(
  state = initState,
  action: fromBooking.BookingActions
): BookingState {
  switch (action.type) {
    case fromBooking.BookingActionTypes.LoadAllBookings:
      return {
        ...state,
        loading: true
      };

    case fromBooking.BookingActionTypes.LoadBookingSuccess:
      return {
        ...state,
        loading: false,
        bookings: action.payload
      };
    default:
      return state;
  }
}
