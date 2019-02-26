import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as loginActions from "./login.actions";
import {
  tap,
  take,
  mergeMap,
  map,
  catchError,
  withLatestFrom
} from "rxjs/operators";
import { FirebaseService } from "src/app/services/firebase.service";

import { of } from "rxjs";
import { AuthService, AuthResponseData } from "src/app/services/auth.service";
import { User } from "src/app/models/users.model";
import { Store } from "@ngrx/store";
import { AppState } from "..";

@Injectable()
export class LoginEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(loginActions.LoginActionTypes.Login),
    // map((action: any) => new loginActions.SetUserEmail(action.payload.email)),
    mergeMap((action: any) =>
      this.authSvc.login(action.payload.email, action.payload.password).pipe(
        catchError(errResponse => {
          this.handleError(errResponse.error.error.message);
          return of(new loginActions.LoginFailure(errResponse));
        })
      )
    ),
    withLatestFrom(this.store$),
    map(([resData, store]) => {
      console.log("YOOOOOOO", resData, store);
      // const formObj = action.payload;
      // const latest = store.dashboard;

      // const newObj = {
      //   id: formObj.name,
      //   ...latest.formVal
      // };
      // return new fromEvents.AddNewEvent(newObj);
    })
    // map((resData: AuthResponseData) => {
    //   console.log("Logging in...", resData);
    //   if (resData && resData.idToken) {
    //     this.handleLogin(
    //       resData.idToken,
    //       resData.localId,
    //       parseInt(resData.expiresIn)
    //     );
    //   }
    // })
    //catchError(err => of(new bookingActions.LoadBookingsFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private authSvc: AuthService,
    private store$: Store<AppState>
  ) {}

  private handleLogin(
    email: string,
    token: string,
    userId: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    localStorage.setItem("userData", JSON.stringify(user));
    //this.autoLogout(user.timeToExpiry);
    // this._user.next(user);
    // this.store.dispatch(new loginActions.SetUserAfterLoginSuccss(user));
  }

  private handleError(msg: string) {
    switch (msg) {
      case "EMAIL_EXISTS":
        // this.notifySvc.isVisible.next({
        //   type: "alert",
        //   message: "EMail Already exists",
        //   visibility: true
        // });
        console.log("EMAIL_EXISTS");
        break;
      case "INVALID_PASSWORD":
        // this.notifySvc.isVisible.next({
        //   type: "alert",
        //   message: "Invalid password provided",
        //   visibility: true
        // });
        console.log("INVALID_PASSWORD");
        break;
      default:
        console.log("SOME UNKNOWN ERROR");
      // this.notifySvc.isVisible.next({
      //   type: "alert",
      //   message: "Authentication failed. Try once more",
      //   visibility: true
      // });
    }
  }
}
