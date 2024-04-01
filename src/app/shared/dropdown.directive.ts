import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
