import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { LoginModule } from "../login/login.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, LoginModule],
  providers: []
})
export class CoreModule {}
