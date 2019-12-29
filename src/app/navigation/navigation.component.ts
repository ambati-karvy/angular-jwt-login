import { Component, OnInit } from '@angular/core';
import { AuthanticationService } from '../authantication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  name:string;
  constructor(private authanticationService:AuthanticationService) { 
    let token = authanticationService.currentUserValue;
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.name=decodedToken.user_name;
    console.log(this.name)
  }

  ngOnInit() {
  }

}
