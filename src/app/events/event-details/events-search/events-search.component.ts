import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-events-search",
  templateUrl: "./events-search.component.html",
  styleUrls: ["./events-search.component.scss"]
})
export class EventsSearchComponent implements OnInit {
  userFilter: any = { name: "" };
  @Output() searchChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onSearch(val) {
    this.searchChange.emit(val);
  }
}
