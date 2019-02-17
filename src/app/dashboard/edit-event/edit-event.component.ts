import { Component, OnInit, ViewChild } from "@angular/core";
import { FirebaseService } from "./../../services/firebase.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import * as fromDashboard from "../../core-data/state/dashboard";
import * as fromEvents from "../../core-data/state/events";

@Component({
  selector: "app-edit-event",
  templateUrl: "./edit-event.component.html",
  styleUrls: ["./edit-event.component.scss"]
})
export class EditEventComponent implements OnInit {
  events$;
  eventId = null;

  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.fbService.getEventDetails().subscribe(data => {
    //   this.events = data;
    //   //console.log(this.events);
    // });
    this.events$ = this.store.pipe(select(fromEvents.getAllEvents));
    this.store.dispatch(new fromEvents.LoadAllEvents());
  }
  editEvent(event) {
    this.eventId = event.id;
  }
  updateFormSubmit(saveData) {
    const formVal = saveData.form.value;
    const eventId = saveData.id;
    this.store.dispatch(
      new fromDashboard.SaveDashboardEvent({ formVal, eventId })
    );
    // this.fbService
    //   .updateEventDetails(saveData.form.value, saveData.id)
    //   .subscribe(response => {
    //     this.router.navigate(["/"]);
    //   });
  }
}
