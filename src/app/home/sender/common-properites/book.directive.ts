import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'appBook'
})
export class BookDirective {
  @Input() bookId: string;
  @Input() bookName: string;

}
