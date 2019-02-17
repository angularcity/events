import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AddEventComponent } from "./add-event/add-event.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Custom
import { EditEventComponent } from "./edit-event/edit-event.component";
import { EventDashboardComponent } from "./event-dashboard/event-dashboard.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { EditEventItemComponent } from "./edit-event/edit-event-item/edit-event-item.component";

@NgModule({
  declarations: [
    EventDashboardComponent,
    AddEventComponent,
    EditEventComponent,
    EditFormComponent,
    EditEventItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {}
