import { Directive, Input, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: 'appBook'
})
export class BookDirective {
  @Input() bookId: string;
  @Input() bookName: string;

  constructor(public viewContainerRef: ViewContainerRef) { }

  count:number = 0
  @HostListener('clieck',['$event.target'])
  onclick(bnd) {

    console.log("number incremented"+this.count++);
  }

}
