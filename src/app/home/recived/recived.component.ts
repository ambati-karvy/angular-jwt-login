import { Component, OnInit } from '@angular/core';
import { DataService } from '../sender/data.service';

@Component({
  selector: 'app-recived',
  templateUrl: './recived.component.html',
  styleUrls: ['./recived.component.css']
})
export class RecivedComponent implements OnInit {

  message:string;
  asyMessage = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message )
    this.dataService.currentAyncMessage.subscribe(message => {
      
      this.asyMessage.push(message)})
  }

}
