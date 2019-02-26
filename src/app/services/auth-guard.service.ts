import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, take, tap, switchMap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { NotifyService } from "../shared/notify/notify.service";
import { Store } from "@ngrx/store";
import { AppState } from "../core-data/state";
import { getLoggedInUser } from "../core-data/state/login";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate() {
    let logged = false;
    this.store
      .select(getLoggedInUser)
      .pipe(take(1))
      .subscribe(user => {
        logged = !!user;
        if (!logged) {
          // this.notifyService.isVisible.next({
          //   type: "alert",
          //   message: "You need to be authenticated before continuing",
          //   visibility: true
          // });
          console.log("Sorry, no auth");
          this.router.navigate(["/login"]);
          return logged;
        }
      });
    return logged;
  }
}
