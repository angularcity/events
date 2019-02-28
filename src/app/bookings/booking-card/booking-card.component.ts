import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import * as bookingActions from "../../core-data/state/booking";

@Component({
  selector: "app-booking-card",
  templateUrl: "./booking-card.component.html",
  styleUrls: ["./booking-card.component.scss"]
})
export class BookingCardComponent {
  @Input() booking;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  cancel(event) {
    this.store.dispatch(new bookingActions.CancelBooking(event));
  }
}
