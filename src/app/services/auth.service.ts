import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";

import { NotifyService } from "../shared/notify/notify.service";
import { User } from "../models/users.model";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../core-data/state";
import { getLoggedInUser } from "../core-data/state/login";
import * as loginActions from "../core-data/state/login";

const API_KEY = "AIzaSyCsXcKc15exyOf5rypRA25UsiuSgJblvsM";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  // private _user = new BehaviorSubject<User>(null);
  //private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private store$: Store<AppState>) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  autoLogin() {
    console.log("Localstorage>>> ", localStorage.getItem("userData"));

    // if (!localStorage.getItem("userData")) {
    //   return of(false);
    // }
    // const userData: {
    //   email: string;
    //   id: string;
    //   _token: string;
    //   _tokenExpirationDate: string;
    // } = JSON.parse(localStorage.getItem("userData"));
    // const loadedUser = new User(
    //   userData.email,
    //   userData.id,
    //   userData._token,
    //   new Date(userData._tokenExpirationDate)
    // );
    // if (loadedUser.isAuth) {
    //   this.store$.dispatch(
    //     new loginActions.SetUserAfterLoginSuccess(loadedUser)
    //   );
    //   //this._user.next(loadedUser);
    //   //this.autoLogout(loadedUser.timeToExpiry)
    //   //navigate and clear history
    //   return of(true);
    // }
    // return of(false);
  }
}
