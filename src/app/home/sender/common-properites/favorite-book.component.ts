import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'app-favorite-book',
  template:`<b>Top Favourite Books</b>
	<ng-template ngFor let-book [ngForOf]= "topBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
		
	<br/><b>All Favorite Books</b>
	<ng-template ngFor let-book [ngForOf]= "allBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>` 
})
export class FavoriteBookComponent {

  @ContentChildren(BookDirective) topBooks: QueryList<BookDirective>
  @ContentChildren(BookDirective, {descendants: false}) allBooks: QueryList<BookDirective>
}
