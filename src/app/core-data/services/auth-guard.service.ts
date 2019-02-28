import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, take, tap, switchMap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { AppState } from "../state";
import { getLoggedInUser } from "../state/login";
import * as loginActions from "../state/login";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private store$: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  canActivate() {
    let logged = false;
    this.store$
      .select(getLoggedInUser)
      .pipe(take(1))
      .subscribe(user => {
        logged = !!user;
        console.log("CAN?? route??", this.router.url);
        if (!logged) {
          // this.notifyService.isVisible.next({
          //   type: "alert",
          //   message: "You need to be authenticated before continuing",
          //   visibility: true
          // });
          console.log("Sorry, no auth");
          this.auth.autoLogin().subscribe(autolog => {
            this.store$.dispatch(
              new loginActions.SetUserAfterLoginSuccess(
                JSON.parse(localStorage.getItem("userData"))
              )
            );
          });
          this.router.navigate(["/login"]);
          return logged;
        }
      });
    return logged;
  }
}
