import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorOfButton]'
})
export class ColorOfButtonDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {

    this.elementRef.nativeElement.style.backgroundColor = 'green';


    setTimeout(() => {

      this.elementRef.nativeElement.style.backgroundColor = '#333';
    }, 2000);
  }

}
