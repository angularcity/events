import { Component, OnInit, AfterViewInit, Renderer2 } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import { getLoggedInUser } from "src/app/core-data/state/login";
import * as loginActions from "../../core-data/state/login";
import { AuthService } from "src/app/core-data/services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isLoggedIn = false;
  constructor(public auth: AuthService, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getLoggedInUser).subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  ngAfterViewInit(): void {}

  logout() {
    this.store.dispatch(new loginActions.Logout());
  }
  toggle() {}
}
