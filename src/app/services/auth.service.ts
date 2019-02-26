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
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private notifySvc: NotifyService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  get user() {
    return this.store.select(getLoggedInUser);
  }

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
}
