import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FirebaseService } from "src/app/services/firebase.service";

@Injectable()
export class EventResolverService implements Resolve<Event[]> {
  constructor(private fbService: FirebaseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Event[] | Observable<Event[]> | Promise<Event[]> {
    return this.fbService.getEventDetails();
  }
}
