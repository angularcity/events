import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as fromDashboard from "./dashboard.actions";
import * as fromEvents from "../events";

import { mergeMap, tap, map, withLatestFrom, catchError } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { DashboardState } from "./dashboard.reducer";
import { pipe, of } from "rxjs";
import { AppState } from "../index";
import { Router } from "@angular/router";
import { FirebaseService } from "../../services";

@Injectable()
export class DashboardEffects {
  @Effect()
  loadDashboards$ = this.actions$.pipe(
    ofType(fromDashboard.DashboardActionTypes.AddDashBoardEvent),
    mergeMap((action: { type: string; payload: any }) =>
      this.fbService.addNewEvent(action.payload)
    ),
    map(
      (addedEventId: string) =>
        new fromDashboard.AddDashBoardEventSuccess(addedEventId)
    ),
    withLatestFrom(this.store$),
    map(([action, store]) => {
      const formObj = action.payload;
      const latest = store.dashboard;

      const newObj = {
        id: formObj.name,
        ...latest.formVal
      };
      return new fromEvents.AddNewEvent(newObj);
    }),
    catchError(err => of(new fromDashboard.AddDashBoardEventFailure(err)))
  );

  @Effect()
  saveDashboardEvent$ = this.actions$.pipe(
    ofType(fromDashboard.DashboardActionTypes.SaveDashboardEvent),
    mergeMap((action: { type: string; payload: any }) => {
      return this.fbService
        .updateEventDetails(action.payload.formVal, action.payload.eventId)
        .pipe(
          map(() => {
            //this.router.navigate(["/"]);
            return new fromDashboard.SaveDashboardEventSuccess();
          })
        );
    })
  );

  @Effect({ dispatch: false })
  navigateHome$ = this.actions$.pipe(
    ofType(
      fromEvents.EventsActionTypes.AddNewEvent,
      fromDashboard.DashboardActionTypes.SaveDashboardEventSuccess,
      fromDashboard.DashboardActionTypes.DeleteDashboardEventSuccess
    ),
    tap(() => this.router.navigate(["/"]))
  );

  @Effect()
  deleteDashboardEvent$ = this.actions$.pipe(
    ofType(fromDashboard.DashboardActionTypes.DeleteDashboardEvent),
    mergeMap((action: { type: string; payload: any }) =>
      this.fbService.deleteEvent(action.payload)
    ),
    map(
      (deletedEventId: string) =>
        new fromDashboard.DeleteDashboardEventSuccess()
    )
    //catchError(err => of(new fromDashboard.AddDashBoardEventFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private fbService: FirebaseService,
    private store$: Store<AppState>,
    private router: Router
  ) {}
}
