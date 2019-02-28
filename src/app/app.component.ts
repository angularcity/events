import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "./core-data/services";

// import { Store } from "@ngrx/store";
// import { AppState } from "./store";
// import * as eventActions from "./store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Music Events App";
  isVisible$: Observable<any>;
  constructor(
    private auth: AuthService // private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    // this.auth.autoLogin();
    // this.isVisible$ = this.notifyService.isVisible;
    // this.auth.autoLogin().subscribe(success => {
    //   console.log("Auto login success");
    // });
    //this.store.dispatch(new eventActions.LoadAllEvents());
    // this.store
    //   .select(state => {
    //     // console.log(state);
    //   })
    //   .subscribe();
  }
}
