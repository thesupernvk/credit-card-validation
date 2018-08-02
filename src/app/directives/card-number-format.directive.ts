import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardNumberFormat]'
})
export class CardNumberFormatDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') onFocus(){
    let value : String = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
  }

}