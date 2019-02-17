import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-event-map",
  templateUrl: "./event-map.component.html",
  styleUrls: ["./event-map.component.scss"]
})
export class EventMapComponent implements OnInit {
  @Input() latitude;
  @Input() longitude;
  constructor() {}

  ngOnInit() {}
}
