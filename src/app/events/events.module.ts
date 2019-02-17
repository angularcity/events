import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { CoreDataModule } from "./../core-data/core-data.module";
// Custom
import { EventRoutingModule } from "./events.routing.module";
import { SharedModule } from "../shared/shared.module";
import { FilterPipeModule } from "ngx-filter-pipe";
import { AgmCoreModule } from "@agm/core";
import { StoreModule } from "@ngrx/store";
import * as fromAppState from "../core-data/state";
import { EventsEffects } from "../core-data/state/events";

@NgModule({
  declarations: [EventRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventRoutingModule,
    SharedModule,
    FilterPipeModule,
    AgmCoreModule.forRoot({
      apiKey: "KEY_FOR_GOOGLE_MAP"
    }),
    CoreDataModule
  ],
  exports: [EventRoutingModule.components],
  providers: []
})
export class EventsModule {}
