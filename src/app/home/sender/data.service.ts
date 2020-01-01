import { Injectable } from '@angular/core';
import { BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public message : string;
  public messageSource = new BehaviorSubject(this.message)
  currentMessage = this.messageSource.asObservable();

  public messageAsynch = new ReplaySubject<string>();
  currentAyncMessage = this.messageAsynch.asObservable();
  constructor() { }


  newMessage(data:string) {
    this.messageSource.next(data);
    this.messageAsynch.next(data);
  }
}
