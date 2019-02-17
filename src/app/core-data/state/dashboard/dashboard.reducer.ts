import * as fromDashboard from "./dashboard.actions";

export interface DashboardState {
  formVal: any;
  id: string;
}

export const initialState: DashboardState = {
  formVal: {},
  id: null
};

export function dashboardReducer(
  state = initialState,
  action: fromDashboard.DashboardActions
): DashboardState {
  switch (action.type) {
    case fromDashboard.DashboardActionTypes.AddDashBoardEvent:
      return {
        ...state,
        formVal: action.payload
      };

    case fromDashboard.DashboardActionTypes.AddDashBoardEventSuccess:
      return {
        ...state,
        id: action.payload.name
      };
    default:
      return state;
  }
}
