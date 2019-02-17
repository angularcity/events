import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "../core-data/state";
import * as fromBooking from "../core-data/state/booking";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  bookedArr$: Observable<any[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.bookedArr$ = this.store.pipe(select(fromBooking.getAllBookings));
    this.store.dispatch(new fromBooking.LoadAllBookings());
  }
}
