import { Component, OnInit, ElementRef, ViewChild, TemplateRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import './create'
import './subscribing'
import './asynchSubject'
import { DataService } from './data.service';
import { Country } from './country';
import { Fruite } from './fruite';
import { NumberComponent } from './common-properites/number/number.component';
import { OfficeComponent } from './common-properites/office.component';
import { BookDirective } from './common-properites/book.directive';


declare var $:any;

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit ,AfterViewInit{

  countryList: Country[] = [{currency:"",name:"",population:null,weather:""}]
  fruitesList: Fruite[] = [{color:"",name:"",cost:null,tast:""}]
  country: Country = <Country>{name:"raghu"}
  //fruite = new Fruite(); 
  fruite:Fruite = <Fruite>{name:"rahul",harddrive:true,color:""}
  

  // country = {
  //   "name":""
  // }

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

  onSubmit() {
  }

  latestBook = true;
  onChangeBook() {
   this.latestBook = (this.latestBook === true)? false : true;
  }

  showAllBook = false;
  onShowAllBooks() {
    this.showAllBook = (this.showAllBook === true)? false : true;
  } 

  bestFriend = true;   
  onChangeFriend() {
    this.bestFriend = (this.bestFriend === true)? false : true;
  }

  @ViewChild(NumberComponent,{static:true}) 
  private numberComponent: NumberComponent;
  increment() {
    this.numberComponent.incrementOne();
  }

  decrement() {
    this.numberComponent.decrementOne();
  }

  @ViewChildren(OfficeComponent) officeComponent: QueryList<OfficeComponent>;
  @ViewChildren('pname') pnames: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log("------"+this.uname.nativeElement.value);
    this.officeComponent.forEach(a => {console.log(a.address)})
    this.pnames.forEach(a => {console.log(a.nativeElement.nativeElement)})
    //console.log(this.officeComponent);
    console.log("-----templateReferenceData")
    console.log(this.karyInfoData)
    this.bookDirective.map(bookDataAppend => bookDataAppend.viewContainerRef.createEmbeddedView(this.karyInfoData))
  }


  allPersions = [{name:"rahgu",age:23},{name:"rahul",age:24}
  ]

  @ViewChild('karyInfo',{static:true}) karyInfoData: TemplateRef<any>;
  @ViewChildren(BookDirective) bookDirective: QueryList<BookDirective>;

  shouldSayHello = false;

}
