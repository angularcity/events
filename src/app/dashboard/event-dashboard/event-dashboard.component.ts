import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/notify/notify.service";
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
  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private notifyService: NotifyService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  setView(mode) {
    console.log(mode);
    this.viewMode = mode;
  }

  formCompleteHandle(formVal) {
    this.store.dispatch(new fromDashboard.AddDashBoardEvent(formVal));
    // this.fbService.addNewEvent(formVal).subscribe(data => {
    //   this.notifyService.isVisible.next({
    //     type: "success",
    //     message: "New event added successfully!",
    //     visibility: true
    //   });
    //   this.router.navigate(["/"]);
    // });
  }
}
