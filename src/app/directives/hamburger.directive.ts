import {
  Directive,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: "[appHamburger]",
  exportAs: "hamburger"
})
export class HamburgerDirective {
  @HostBinding("class.open")
  navOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener("click") mouseover(eventData: Event) {
    this.toggleOverlay();
  }
  toggle() {
    this.toggleOverlay();
  }
  toggleOverlay() {
    const flag = this.elRef.nativeElement.parentElement.classList.contains(
      "open"
    );
    if (!flag) {
      this.renderer.addClass(this.elRef.nativeElement.parentElement, "open");
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.parentElement, "open");
    }
  }
}
