import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromEvents from "./events.reducer";

//private to this file.
const getAllEventsSlice = createFeatureSelector<fromEvents.EventsState>(
  "events"
);
export const getAllEvents = createSelector(
  getAllEventsSlice,
  (state: fromEvents.EventsState) => state.events
);
