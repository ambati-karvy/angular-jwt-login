import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-office',
  template: `{{name}}--{{address}}`
})
export class OfficeComponent {

  @Input('name') name: string;
  @Input('address') address:string;
}
