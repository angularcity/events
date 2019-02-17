import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FirebaseService } from "src/app/services/firebase.service";
import { Observable } from "rxjs";
import { NotifyService } from "src/app/shared/notify/notify.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  currentId;
  currentEvent;
  latitude = 0;
  longitude = 0;
  isBtnDisabled$: Observable<boolean>;

  constructor(
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.currentId = this.route.snapshot.params["id"];

    this.currentEvent = this.fbService.getIndividualEventDetails(
      this.currentId
    );

    this.isBtnDisabled$ = this.fbService.validateIfBooked(this.currentId);
  }

  onBooking() {
    this.fbService.bookEvent(this.currentEvent).subscribe(success => {
      this.notifyService.isVisible.next({
        type: "success",
        message: "Event booking done! Check your mail for more details",
        visibility: true
      });
      this.router.navigate(["/"]);
    });
  }
}
