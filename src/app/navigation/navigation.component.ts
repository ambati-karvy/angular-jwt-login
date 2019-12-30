import { Component, OnInit } from '@angular/core';
import { AuthanticationService } from '../authantication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  name:string;
  roles:any[];
  constructor(private authanticationService:AuthanticationService,private router:Router) { 
  }

  ngOnInit() {
    let token = this.authanticationService.currentUserValue;
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.name=decodedToken.user_name;
    this.roles = decodedToken.authorities; 
   // console.log(this.name)
    console.log(this.roles)
  }

  checkRoles(acceptedArr, incomingArr): boolean {    
    return incomingArr.some(v => acceptedArr.includes(v));
  }


  userInRole(roles: any[]):boolean {
    var userRoles = this.roles   
    return this.checkRoles(roles, userRoles);
  }

  logout() {
    this.authanticationService.logOut()
    this.router.navigate(['login'])
  }
}
