import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";

import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../state";
import { getLoggedInUser } from "../state/login";
import * as loginActions from "../state/login";
import { User } from "../models/users.model";

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
  constructor(private http: HttpClient) {}

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
    if (!localStorage.getItem("userData")) {
      return of(false);
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.isAuth) {
      console.log("ISAUTH", loadedUser.isAuth);

      // this.store$.dispatch(
      //   new loginActions.SetUserAfterLoginSuccess(loadedUser)
      // );
      //this._user.next(loadedUser);
      //this.autoLogout(loadedUser.timeToExpiry)
      //navigate and clear history
      return of(true);
    }
    //return of(false);
  }
}
