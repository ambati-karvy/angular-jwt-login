import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthanticationService implements OnInit{

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private httpClient:HttpClient,private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit() {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    
    return this.currentUserSubject.value;
  }

  login() {
    console.log("login mathod");
    let headers = new HttpHeaders().set("Authorization", "Basic c2FtcGxlQ2xpZW50SWQ6c2VjcmV0")
    let data = {
      "username":"user@user.com",
      "password":"password",
      "grant_type":"password"
    }

    let formDate = new FormData();
    formDate.append("username","user@user.com");
    formDate.append("password","password");
    formDate.append("grant_type","password");

    const body = new HttpParams()
    .set('username', "user@user.com")
    .set('password', "password")
    .set('grant_type', "password");

    return this.httpClient.post<any>("http://localhost:8080/oauth/token",formDate,{headers: headers})
      .pipe(map(res => {
        localStorage.setItem('currentUser',res.access_token)
        this.currentUserSubject.next(res.access_token);
        return "success";
      }));
  }

  login1() {

    console.log(document.cookie)
    
    let formDate = new FormData();
    formDate.append("username","user@user.com");
    formDate.append("password","password");
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.httpClient.post("http://localhost:8080/login",formDate,{observe:'response',responseType: 'text',withCredentials:true})
    .subscribe(resp => {
      //console.log(resp.headers.get('Content-Length'));
      if(resp.ok) {
        localStorage.setItem('currentUser',resp.headers.get('Authorization'))
        this.currentUserSubject.next(resp.headers.get('Authorization'));
        this.router.navigate(['/']);
      }
    });
    
    // .pipe(map(res => {
    //   //localStorage.setItem('currentUser',res)
    //   //this.currentUserSubject.next(res.access_token);
    //   console.log(res.HttpHeaders.get('Authorization'))
    //   return "success";
    //   }));
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
