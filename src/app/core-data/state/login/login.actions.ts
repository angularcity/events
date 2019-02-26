import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export enum LoginActionTypes {
  Login = "[Login] Login",
  LoginSuccess = "[Login] LoginSuccess",
  LoginFailure = "[Login] LoginFailure",
  SetUserAfterLoginSuccss = "[Login] SetUserAfterLoginSuccss",
  SetUserEmail = "[Login] SetUserEmail"
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
  constructor(public payload: { email: string; password: string }) {}
}

export class SetUserAfterLoginSuccess implements Action {
  readonly type = LoginActionTypes.SetUserAfterLoginSuccss;
  constructor(public payload: User) {}
}

export class SetUserEmail implements Action {
  readonly type = LoginActionTypes.SetUserEmail;
  constructor(public payload: string) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export type LoginActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | SetUserAfterLoginSuccess
  | SetUserEmail;
