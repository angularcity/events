import { Action } from "@ngrx/store";

export enum DashboardActionTypes {
  AddDashBoardEvent = "[Dashboard] Add Dashboards Trigger Event",
  AddDashBoardEventForm = "[Dashboard] Add Dashboards Form Current",
  AddDashBoardEventSuccess = "[Dashboard] Add Dashboards Success",
  AddDashBoardEventFailure = "[Dashboard] Add Dashboards Failure",

  SaveDashboardEvent = "[Dashboard] SaveDashboardEvent",
  SaveDashboardEventSuccess = "[Dashboard] SaveDashboardEvent Success",

  DeleteDashboardEvent = "[Dashboard] DeleteDashboardEvent",
  DeleteDashboardEventSuccess = "[Dashboard] DeleteDashboardEventSuccess"
}

export class AddDashBoardEvent implements Action {
  readonly type = DashboardActionTypes.AddDashBoardEvent;
  constructor(public payload: any) {}
}

export class AddDashBoardEventSuccess implements Action {
  readonly type = DashboardActionTypes.AddDashBoardEventSuccess;
  constructor(public payload: any) {}
}

export class AddDashBoardEventFailure implements Action {
  readonly type = DashboardActionTypes.AddDashBoardEventFailure;
  constructor(public payload: any) {}
}

export class SaveDashboardEvent implements Action {
  readonly type = DashboardActionTypes.SaveDashboardEvent;
  constructor(public payload: { formVal: any; eventId: string }) {}
}

export class SaveDashboardEventSuccess implements Action {
  readonly type = DashboardActionTypes.SaveDashboardEventSuccess;
}

export class DeleteDashboardEvent implements Action {
  readonly type = DashboardActionTypes.DeleteDashboardEvent;
  constructor(public payload: string) {}
}

export class DeleteDashboardEventSuccess implements Action {
  readonly type = DashboardActionTypes.DeleteDashboardEventSuccess;
}

export type DashboardActions =
  | AddDashBoardEvent
  | AddDashBoardEventSuccess
  | AddDashBoardEventFailure
  | SaveDashboardEvent
  | SaveDashboardEventSuccess
  | DeleteDashboardEvent
  | DeleteDashboardEventSuccess;
