import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";

import { NotifyService } from "../shared/notify/notify.service";
import { User } from "../models/users.model";
import { Router } from "@angular/router";

const API_KEY = "AIzaSyCsXcKc15exyOf5rypRA25UsiuSgJblvsM";

interface AuthResponseData {
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
  private _user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private notifySvc: NotifyService,
    private router: Router
  ) {}

  get user() {
    return this._user.asObservable();
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errResponse => {
          this.handleError(errResponse.error.error.message);
          return throwError(errResponse);
        }),
        tap((resData: AuthResponseData) => {
          if (resData && resData.idToken) {
            this.handleLogin(
              email,
              resData.idToken,
              resData.localId,
              parseInt(resData.expiresIn)
            );
          }
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errResponse => {
          this.handleError(errResponse.error.error.message);
          return throwError(errResponse);
        }),
        tap((resData: AuthResponseData) => {
          if (resData && resData.idToken) {
            this.handleLogin(
              email,
              resData.idToken,
              resData.localId,
              parseInt(resData.expiresIn)
            );
          }
        })
      );
  }

  logout() {
    this._user.next(null);
    if (localStorage.getItem("userData")) {
      localStorage.removeItem("userData");
      if (this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
      }
    }
    this.router.navigate(["/login"]);
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
      this._user.next(loadedUser);
      this.autoLogout(loadedUser.timeToExpiry);
      this.router.navigate(["/"]);
      //navigate and clear history
      return of(true);
    }
    return of(false);
  }

  autoLogout(expiryDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => this.logout(), expiryDuration);
  }

  private handleLogin(
    email: string,
    token: string,
    userId: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    localStorage.setItem("userData", JSON.stringify(user));
    this.autoLogout(user.timeToExpiry);
    this._user.next(user);
  }

  private handleError(msg: string) {
    switch (msg) {
      case "EMAIL_EXISTS":
        this.notifySvc.isVisible.next({
          type: "alert",
          message: "EMail Already exists",
          visibility: true
        });
        break;
      case "INVALID_PASSWORD":
        this.notifySvc.isVisible.next({
          type: "alert",
          message: "Invalid password provided",
          visibility: true
        });
        break;
      default:
        this.notifySvc.isVisible.next({
          type: "alert",
          message: "Authentication failed. Try once more",
          visibility: true
        });
    }
  }
}
