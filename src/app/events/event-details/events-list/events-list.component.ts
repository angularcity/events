import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/core-data/state";
import * as fromEvents from "../../../core-data/state/events";
import { take } from "rxjs/operators";
@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent implements OnInit {
  events$: Observable<Event[]>;
  searchFilter: any = { name: "" };
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.events$ = this.store.pipe(select(fromEvents.getAllEvents));
    this.store.dispatch(new fromEvents.LoadAllEvents());
  }
  onSearchChange(val) {
    this.searchFilter.name = val;
  }
}
