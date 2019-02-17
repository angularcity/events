import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromBooking from "./booking.reducer";

//private to this file.
const getAllBookingSlice = createFeatureSelector<fromBooking.BookingState>(
  "bookings"
);
export const getAllBookings = createSelector(
  getAllBookingSlice,
  (state: fromBooking.BookingState) => state.bookings
);
