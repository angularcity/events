import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from "./core-data/services";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: "events",
    loadChildren: "./events/events.module#EventsModule",
    canActivate: [AuthGuardService]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "bookings",
    loadChildren: "./bookings/bookings.module#BookingModule",
    canActivate: [AuthGuardService]
  },
  {
    path: "manage",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
