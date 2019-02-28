import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as bookingActions from "./booking.actions";
import { tap, take, mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { FirebaseService } from "../../services";
import { Router } from "@angular/router";

@Injectable()
export class BookingEffects {
  @Effect()
  loadAllBookings$ = this.actions$.pipe(
    ofType(bookingActions.BookingActionTypes.LoadAllBookings),
    mergeMap(action => this.fbService.getBookingDetails()),
    map((bookings: any[]) => new bookingActions.LoadBookingSuccess(bookings)),
    catchError(err => of(new bookingActions.LoadBookingsFailure(err)))
  );

  @Effect()
  cancelBooking$ = this.actions$.pipe(
    ofType(bookingActions.BookingActionTypes.CancelBooking),
    mergeMap((action: any) => this.fbService.cancelBookedEvent(action.payload)),
    map((bookings: any[]) => new bookingActions.CancelBookingSuccess()),
    catchError(err => of(new bookingActions.LoadBookingsFailure(err)))
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(bookingActions.BookingActionTypes.CancelBookingSuccess),
    tap(res => {
      this.router.navigateByUrl("/");
    })
  );

  constructor(
    private actions$: Actions,
    private fbService: FirebaseService,
    private router: Router
  ) {}
}
