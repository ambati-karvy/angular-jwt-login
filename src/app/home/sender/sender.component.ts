import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import './create'
import './subscribing'
import './asynchSubject'
import { DataService } from './data.service';

declare var $:any;

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  htmlSnippet = 'Template <script>alert("XSS Attack")</script> <b>Code attached</b>';

  message:string;
  safeOperator = null;
  validation = {"name":"test",
                  "adress":"",
                  "status":true};
  greeting: string[] = ['a','b', 'c', 'd', 'f', 'g', 'i'];
  @ViewChild('myname', {static: false}) input ; 
  constructor(private dataService:DataService,private MyElement:ElementRef) {
    
  }

  ngOnInit(): void {

    $(document).ready(()=> {
      
      $('#elementId').css({'text-color':'blue','font-size':'150%'});
    });

    this.dataService.currentMessage.subscribe(message => this.message=message)
  }

  changeName(mesage:string) {
    this.dataService.newMessage(mesage);
  }

  myName:string = "Raghu";
  updateName(name: string) {
    this.myName = name;
  }


  @ViewChild('uname', {static: true}) uname;

  ngAfterViewInit() {
    console.log("------"+this.uname.nativeElement.value);
  }
}
