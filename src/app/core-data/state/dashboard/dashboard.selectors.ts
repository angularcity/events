import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromDashboard from "./dashboard.reducer";

//private to this file.
const getAllDashboardSlice = createFeatureSelector<
  fromDashboard.DashboardState
>("dashboard");
export const getCurrentlyAddedDashboardEvent = createSelector(
  getAllDashboardSlice,
  (state: fromDashboard.DashboardState) => {
    const id = state.id;
    const formObj = state.formVal;
    return {
      id,
      formObj
    };
  }
);
