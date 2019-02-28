import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import * as fromDashboard from "../../core-data/state/dashboard";

@Component({
  selector: "app-event-dashboard",
  templateUrl: "./event-dashboard.component.html",
  styleUrls: ["./event-dashboard.component.scss"]
})
export class EventDashboardComponent implements OnInit {
  viewMode = "ADD";
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  setView(mode) {
    console.log(mode);
    this.viewMode = mode;
  }

  formCompleteHandle(formVal) {
    this.store.dispatch(new fromDashboard.AddDashBoardEvent(formVal));
  }
}
