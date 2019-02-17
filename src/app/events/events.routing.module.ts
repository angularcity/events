import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Custom
import { EventsListComponent } from "./event-details/events-list/events-list.component";
import { EventsSearchComponent } from "./event-details/events-search/events-search.component";
import { EventsListItemComponent } from "./event-details/events-list/events-list-item.component";
import { EventMapComponent } from "./event/event-map/event-map.component";
import { EventComponent } from "./event/event.component";
import { EventsComponent } from "./event-details/events.component";

const routes: Routes = [
  {
    path: ":id",
    component: EventComponent
  },
  { path: "", component: EventsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
  static components = [
    EventsListComponent,
    EventsSearchComponent,
    EventsListItemComponent,
    EventMapComponent,
    EventComponent,
    EventsComponent
  ];
}
