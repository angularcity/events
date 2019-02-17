import { Action } from "@ngrx/store";
import * as fromAction from "./events.actions";

export interface EventsState {
  events: Event[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initState: EventsState = {
  events: [],
  loaded: false,
  loading: false,
  error: null
};

export function eventsReducer(
  state = initState,
  action: fromAction.EventsActions
): EventsState {
  switch (action.type) {
    case fromAction.EventsActionTypes.LoadAllEvents:
      return {
        ...state,
        loading: true
      };

    case fromAction.EventsActionTypes.LoadAllEventsSuccess:
      return {
        ...state,
        loading: false,
        events: action.payload,
        loaded: true
      };

    case fromAction.EventsActionTypes.AddNewEvent:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    default:
      return state;
  }
}
