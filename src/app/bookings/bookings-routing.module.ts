import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Custom
import { BookingsComponent } from "./bookings.component";

const routes: Routes = [
  {
    path: "",
    component: BookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class BookingsRoutingModule {}
