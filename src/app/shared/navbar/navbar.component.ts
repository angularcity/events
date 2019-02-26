import { Component, OnInit, AfterViewInit, Renderer2 } from "@angular/core";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isLoggedIn = false;
  constructor(public auth: AuthService, private renderer: Renderer2) {}

  ngOnInit() {
    this.auth.user.subscribe(loggedIn => {
      this.isLoggedIn = !!loggedIn;
    });
  }

  ngAfterViewInit(): void {}

  logout() {
    //this.auth.logout();
  }
  toggle() {}
}
