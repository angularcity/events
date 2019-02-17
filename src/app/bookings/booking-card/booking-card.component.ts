import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/notify/notify.service";

@Component({
  selector: "app-booking-card",
  templateUrl: "./booking-card.component.html",
  styleUrls: ["./booking-card.component.scss"]
})
export class BookingCardComponent {
  @Input() booking;
  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private notifySvc: NotifyService
  ) {}

  ngOnInit() {}

  cancel(event) {
    this.fbService.cancelBookedEvent(event).subscribe(success => {
      this.notifySvc.isVisible.next({
        type: "success",
        message: "Booked event is cancelled",
        visibility: true
      });
      this.router.navigate(["/"]);
    });
  }
}
