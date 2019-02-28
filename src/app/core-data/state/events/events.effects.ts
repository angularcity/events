import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as eventActions from "./events.actions";
import { tap, take, mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { FirebaseService } from "../../services";
import { Router } from "@angular/router";

@Injectable()
export class EventsEffects {
  @Effect()
  loadAllEventsOnLoad$ = this.actions$.pipe(
    tap(() => console.log("Effects Events >>>")),
    ofType(eventActions.EventsActionTypes.LoadAllEvents),
    mergeMap(action => this.fbService.getEventDetails()),
    map((courses: Event[]) => new eventActions.LoadAllEventsSuccess(courses)),
    catchError(err => of(new eventActions.LoadAllEventsFailure(err)))
  );

  @Effect()
  bookEvent$ = this.actions$.pipe(
    ofType(eventActions.EventsActionTypes.BookEvent),
    mergeMap((action: any) => this.fbService.bookEvent(action.payload)),
    map(() => new eventActions.BookEventSuccess()),
    catchError(err => of(new eventActions.LoadAllEventsFailure(err)))
  );

  @Effect({ dispatch: false })
  bookEventSuccess$ = this.actions$.pipe(
    ofType(eventActions.EventsActionTypes.BookEventSuccess),
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
