import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface INotify {
  type: string;
  message: string;
  visibility: boolean;
}

@Injectable()
export class NotifyService {
  private initVal: INotify = {
    type: "alert",
    message: "null",
    visibility: false
  };
  isVisible = new BehaviorSubject<INotify>(this.initVal);
  reset() {
    this.isVisible.next(this.initVal);
  }
  constructor() {}
}
