import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, take, tap, switchMap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { NotifyService } from "../shared/notify/notify.service";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  canActivate() {
    let logged = false;
    this.auth.user.pipe(take(1)).subscribe(user => {
      logged = !!user;
      if (!logged) {
        this.notifyService.isVisible.next({
          type: "alert",
          message: "You need to be authenticated before continuing",
          visibility: true
        });
        this.router.navigate(["/login"]);
        return logged;
      }
    });
    return logged;
  }
}
