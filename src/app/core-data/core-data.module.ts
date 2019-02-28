import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromEvents from "./state/events";
import { EventsEffects } from "./state/events";
import { BookingEffects } from "./state/booking";
import { DashboardEffects } from "./state/dashboard";
import { LoginEffects } from "./state/login";
import { FirebaseService, AuthService, AuthGuardService } from "./services";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      EventsEffects,
      BookingEffects,
      DashboardEffects,
      LoginEffects
    ])
  ],
  providers: [FirebaseService, AuthService, AuthGuardService]
})
export class CoreDataModule {}
