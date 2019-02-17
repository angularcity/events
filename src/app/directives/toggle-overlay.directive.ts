import {
  Directive,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit
} from "@angular/core";

@Directive({
  selector: "[appToggleOverlay]"
})
export class ToggleOverlayDirective implements OnInit, AfterViewInit {
  @ViewChild("hamburger") hamburger: ElementRef;
  constructor(private renderer: Renderer2) {
    console.log("Toggle dir");
  }

  @HostListener("click") overlayClick(eventData: Event) {}
  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(this.hamburger);
  }
}
