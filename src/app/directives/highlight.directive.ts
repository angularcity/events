import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @HostBinding("class.zoom") hoverClass = false;
  constructor() {}
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.hoverClass = true;
  }

  @HostListener("mouseleave") mouseout(eventData: Event) {
    this.hoverClass = false;
  }
}
