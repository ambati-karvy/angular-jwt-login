import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-friend',
  template:`Friend Name: {{friendName}}`
})
export class FriendComponent  {

  @ContentChild('name',{static:false}) nameRef: ElementRef;
	
	get friendName(): String {
	   return this.nameRef.nativeElement.innerHTML;   
	}
	ngAfterContentInit() {
	   console.log(this.friendName);
	}
}
