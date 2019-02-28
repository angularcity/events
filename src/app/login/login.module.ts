import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";

import { RegisterComponent } from "../register/register.component";
import { AuthService, AuthGuardService } from "../core-data/services";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthService, AuthGuardService]
})
export class LoginModule {}
