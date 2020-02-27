import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  template: `<b>{{message}}</b>`
})
export class NumberComponent {
  count:number = 0;
  message:string = "";

  incrementOne() {
    this.count = this.count+1;
    this.message = "count-"+this.count;
  }

  decrementOne() {
    this.count = this.count-1;
    this.message = "count-"+this.count;
  }
}
