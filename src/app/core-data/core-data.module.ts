import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromEvents from "./state/events";
import { EventsEffects } from "./state/events";
import { BookingEffects } from "./state/booking";
import { DashboardEffects } from "./state/dashboard";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("events", fromEvents.eventsReducer),
    EffectsModule.forFeature([EventsEffects, BookingEffects, DashboardEffects])
  ]
})
export class CoreDataModule {}
