import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as loginActions from "./login.actions";
import {
  tap,
  take,
  mergeMap,
  map,
  catchError,
  withLatestFrom,
  switchMap
} from "rxjs/operators";
import { FirebaseService } from "src/app/services/firebase.service";

import { of, Observable } from "rxjs";
import { AuthService, AuthResponseData } from "src/app/services/auth.service";
import { User } from "src/app/models/users.model";
import { Store } from "@ngrx/store";
import { AppState } from "..";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
  @Effect()
  login$: Observable<any> = this.actions$.pipe(
    ofType(loginActions.LoginActionTypes.Login),
    map((action: any) => action.payload),
    switchMap(({ email, password }) => {
      return this.auth.login(email, password).pipe(
        map(user => {
          let savedUser = new User(
            user.email,
            user.localId,
            user.idToken,
            new Date(user.expiresIn)
          );
          //console.log("Success user", user);
          return new loginActions.LoginSuccess(savedUser);
        }),
        catchError(err => of(new loginActions.LoginFailure(err)))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<any> = this.actions$.pipe(
    ofType(loginActions.LoginActionTypes.LoginSuccess),
    tap(user => {
      localStorage.setItem("userData", JSON.stringify(user.payload));
      this.router.navigateByUrl("/");
    })
  );

  @Effect({ dispatch: false })
  loginFailure$: Observable<any> = this.actions$.pipe(
    ofType(loginActions.LoginActionTypes.LoginFailure),
    tap(res => console.log("Login failure!"))
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions$.pipe(
    ofType(loginActions.LoginActionTypes.Logout),
    tap(user => {
      //when the user log out the token and email are removed from localStorage
      localStorage.removeItem("userData");
      this.router.navigateByUrl("/login");
    })
  );

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}
}
