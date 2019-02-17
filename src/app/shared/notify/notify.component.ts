import { Component, OnInit, Input } from "@angular/core";
import { NotifyService, INotify } from "./notify.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-notify",
  templateUrl: "./notify.component.html",
  styleUrls: ["./notify.component.scss"]
})
export class NotifyComponent implements OnInit {
  @Input() options: INotify;

  constructor(private notifySvc: NotifyService) {}

  ngOnInit() {
    this.notifySvc.isVisible.subscribe(options => {
      if (options.visibility) {
        setTimeout(() => {
          this.notifySvc.reset();
        }, 3000);
      }
    });
  }
}
