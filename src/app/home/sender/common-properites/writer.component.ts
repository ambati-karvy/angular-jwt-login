import { Component, OnInit, ContentChild } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'app-writer',
  template: `Name: {{writerName}}
	<br/>Latest Book: {{book?.bookId}} - {{book?.bookName}}`
})
export class WriterComponent {

  writerName ="mahesh";
  @ContentChild(BookDirective,{static: false}) book: BookDirective
}
