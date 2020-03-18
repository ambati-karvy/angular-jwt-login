import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounting]'
})
export class CountingDirective {

  constructor() { }

  count:number = 0
  @HostListener('click',['$event.target'])
  onclick(bnd) {

    console.log("number incremented "+this.count++);
  }

}
