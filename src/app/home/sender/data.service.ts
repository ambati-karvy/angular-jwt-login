import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public message : string;
  public messageSource = new BehaviorSubject(this.message)
  currentMessage = this.messageSource.asObservable();
  constructor() { }


  newMessage(data:string) {
    this.messageSource.next(data);
  }
}
