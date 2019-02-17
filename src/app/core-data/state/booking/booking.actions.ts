import { Action } from "@ngrx/store";

export enum BookingActionTypes {
  LoadAllBookings = "[Booking] Load All Bookings",
  LoadBookingSuccess = "[Booking] Load Bookings Success",
  LoadBookingsFailure = "[Booking] Load Bookings Failure"
}

export class LoadAllBookings implements Action {
  readonly type = BookingActionTypes.LoadAllBookings;
}

export class LoadBookingSuccess implements Action {
  readonly type = BookingActionTypes.LoadBookingSuccess;
  constructor(public payload: any[]) {}
}

export class LoadBookingsFailure implements Action {
  readonly type = BookingActionTypes.LoadBookingsFailure;
  constructor(public payload: any) {}
}

export type BookingActions =
  | LoadAllBookings
  | LoadBookingSuccess
  | LoadBookingsFailure;
