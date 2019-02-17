import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../core-data/state";
import * as fromEvents from "../../core-data/state/events";
import { take } from "rxjs/operators";
@Component({
  selector: "app-event-gallery",
  templateUrl: "./event-gallery.component.html",
  styleUrls: ["./event-gallery.component.scss"]
})
export class EventGalleryComponent implements OnInit {
  events$: Observable<Event[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.events$ = this.store.pipe(select(fromEvents.getAllEvents));
    this.store.dispatch(new fromEvents.LoadAllEvents());
  }
}
