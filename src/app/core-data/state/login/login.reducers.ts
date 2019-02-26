import { Action } from "@ngrx/store";
import * as fromLogin from "./login.actions";
import { User } from "src/app/models/users.model";

export interface LoginState {
  user: User | null;
  tokenExpirationTimer: any;
  error: any;
  email: string | null;
}

export const initState: LoginState = {
  user: null,
  tokenExpirationTimer: null,
  error: null,
  email: null
};

export function loginReducer(
  state = initState,
  action: fromLogin.LoginActions
): LoginState {
  switch (action.type) {
    case fromLogin.LoginActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload
      };
    case fromLogin.LoginActionTypes.LoginFailure:
      return {
        ...state,
        error: action.payload
      };
    case fromLogin.LoginActionTypes.SetUserEmail:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
}
