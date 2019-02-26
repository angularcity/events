import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NotifyService } from "../shared/notify/notify.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    private notifySvc: NotifyService
  ) {}

  ngOnInit() {}

  onRegister(form: NgForm) {
    this.isLoading = true;
    const { email, password } = form.value;
    // this.authService.signUp(email, password).subscribe(
    //   success => {
    //     this.isLoading = false;
    //     this.notifySvc.isVisible.next({
    //       type: "success",
    //       message: "User successfully signed up!",
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
