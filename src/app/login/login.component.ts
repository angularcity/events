import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { NotifyService } from "../shared/notify/notify.service";
import { Store } from "@ngrx/store";
import { AppState } from "../core-data/state";
import * as loginActions from "../core-data/state/login";
import { AuthService } from "../core-data/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    private notifySvc: NotifyService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.isLoading = true;
    const { email, password } = form.value;
    this.store.dispatch(new loginActions.Login({ email, password }));

    // this.authService.login(email, password).subscribe(
    //   success => {
    //     this.isLoading = false;
    //     this.notifySvc.isVisible.next({
    //       type: "success",
    //       message: "User successfully logged in!",
    //       visibility: true
    //     });
    //     this.router.navigate(["/"]);
    //   },
    //   error => {
    //     this.isLoading = false;
    //   }
    // );
  }
}
