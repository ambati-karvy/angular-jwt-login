import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import './create'
import './subscribing'
import './asynchSubject'
import { DataService } from './data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  message:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.message=message)
  }

  changeName(mesage:string) {
    this.dataService.newMessage(mesage);
  }
}
