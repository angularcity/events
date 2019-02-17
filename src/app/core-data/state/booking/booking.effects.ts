import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as bookingActions from "./booking.actions";
import { tap, take, mergeMap, map, catchError } from "rxjs/operators";
import { FirebaseService } from "src/app/services/firebase.service";
import { of } from "rxjs";

@Injectable()
export class BookingEffects {
  @Effect()
  loadAllBookings$ = this.actions$.pipe(
    ofType(bookingActions.BookingActionTypes.LoadAllBookings),
    mergeMap(action => this.fbService.getBookingDetails()),
    map((bookings: any[]) => new bookingActions.LoadBookingSuccess(bookings)),
    catchError(err => of(new bookingActions.LoadBookingsFailure(err)))
  );

  constructor(private actions$: Actions, private fbService: FirebaseService) {}
}
