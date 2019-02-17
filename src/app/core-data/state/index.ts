import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "src/environments/environment";

import * as fromEvents from "./events";
import * as fromBooking from "./booking";
import * as fromDashboard from "./dashboard";

export interface AppState {
  events: fromEvents.EventsState;
  bookings: fromBooking.BookingState;
  dashboard: fromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<AppState> = {
  events: fromEvents.eventsReducer,
  bookings: fromBooking.bookingReducer,
  dashboard: fromDashboard.dashboardReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
