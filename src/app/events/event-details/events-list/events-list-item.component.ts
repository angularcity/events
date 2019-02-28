import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-events-list-item",
  templateUrl: "./events-list-item.component.html",
  styleUrls: ["./events-list-item.component.scss"]
})
export class EventsListItemComponent implements OnInit {
  @Input() event: Event;
  constructor() {}

  ngOnInit() {}
}
