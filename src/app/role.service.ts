import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private server:string = "http://localhost:8080/";

  constructor(private httpClient:HttpClient) { }

  public getRoles() {

    let currentUser = localStorage.getItem('currentUser');  
    let headers = new HttpHeaders()
                               .set('Authorization',currentUser);
    
    this.httpClient.get(this.server+"rest/roles/all",{withCredentials:true})
    .subscribe(data => console.log(data), err => console.log(err));
  }
}
