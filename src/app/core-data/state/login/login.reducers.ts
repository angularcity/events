import { Action } from "@ngrx/store";
import * as fromLogin from "./login.actions";
import { User } from "src/app/models/users.model";

export interface LoginState {
  user: User | null;
  error: any;
}

export const initState: LoginState = {
  user: null,
  error: null
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
    case fromLogin.LoginActionTypes.Logout:
      return {
        ...state,
        user: null
      };
    case fromLogin.LoginActionTypes.SetUserAfterLoginSuccss:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
