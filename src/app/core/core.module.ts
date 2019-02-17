import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { LoginModule } from "../login/login.module";
import { FirebaseService } from "../services/firebase.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, LoginModule],
  providers: [FirebaseService]
})
export class CoreModule {}
