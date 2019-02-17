import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.scss"]
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  @Output() formComplete = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.eventForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      location: new FormGroup({
        name: new FormControl(null, Validators.required),
        lat: new FormControl(null, Validators.required),
        lng: new FormControl(null, Validators.required)
      }),
      ticketsAvailable: new FormControl(null, Validators.requiredTrue),
      description: new FormControl(null, Validators.required)
    });
  }

  eventFormSubmit() {
    this.formComplete.emit(this.eventForm.value);
    this.eventForm.reset();
    //this.router.navigate(["/"]);
  }
}
