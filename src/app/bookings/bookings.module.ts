import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Custom
import { BookingsRoutingModule } from "./bookings-routing.module";
import { BookingsComponent } from "./bookings.component";
import { BookingCardComponent } from "./booking-card/booking-card.component";

@NgModule({
  declarations: [BookingsComponent, BookingCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookingsRoutingModule
  ],
  exports: [BookingsComponent, BookingCardComponent],
  providers: []
})
export class BookingModule {}
