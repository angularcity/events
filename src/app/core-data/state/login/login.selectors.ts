import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromLogin from "./login.reducers";

//private to this file.
const getAllLoginSlice = createFeatureSelector<fromLogin.LoginState>("login");
export const getLoggedInUser = createSelector(
  getAllLoginSlice,
  (state: fromLogin.LoginState) => state.user
);

export const getLoggedInUserError = createSelector(
  getAllLoginSlice,
  (state: fromLogin.LoginState) => state.error
);
