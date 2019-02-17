import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as eventActions from "./events.actions";
import { tap, take, mergeMap, map, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";

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

  constructor(private actions$: Actions, private fbService: FirebaseService) {}
}
