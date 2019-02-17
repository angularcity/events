import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./../services/auth.service";
import { NotifyService } from "../shared/notify/notify.service";

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
    private notifySvc: NotifyService
  ) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.isLoading = true;
    const { email, password } = form.value;
    this.authService.login(email, password).subscribe(
      success => {
        this.isLoading = false;
        this.notifySvc.isVisible.next({
          type: "success",
          message: "User successfully logged in!",
          visibility: true
        });
        this.router.navigate(["/"]);
      },
      error => {
        this.isLoading = false;
      }
    );
  }
}
