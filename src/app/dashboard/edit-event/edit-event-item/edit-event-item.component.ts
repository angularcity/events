import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/notify/notify.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import * as fromDashboard from "../../../core-data/state/dashboard";

@Component({
  selector: "app-edit-event-item",
  templateUrl: "./edit-event-item.component.html",
  styleUrls: ["./edit-event-item.component.scss"]
})
export class EditEventItemComponent implements OnInit {
  @Input() event;
  @Output() formSubmit = new EventEmitter<any>();
  isEdit = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
  toggle() {
    this.isEdit = !this.isEdit;
  }
  remove(event) {
    this.store.dispatch(new fromDashboard.DeleteDashboardEvent(event.id));
    // this.fbService.deleteEvent(event.id).subscribe(success => {
    //   this.notifyService.isVisible.next({
    //     type: "alert",
    //     message: "Event is deleted",
    //     visibility: true
    //   });
    //   this.router.navigate(["/"]);
    // });
  }
  onFormSubmit(event) {
    this.formSubmit.emit(event);
  }
}
