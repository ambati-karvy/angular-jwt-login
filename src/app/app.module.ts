import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule.forRoot()
    
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:() => {
    //       console.log("abc")
    //       let currentUser = localStorage.getItem('currentUser');  	// {"user":"athlete1","token":"Bearer eyJhbGciOiJIUzUxMiJ9...."}
    //       let authorisedUsernameAndToken = JSON.parse(currentUser);

    //       return authorisedUsernameAndToken["token"];
    //     },
    //     whitelistedDomains: ['http://cis.karvyinnotech.com/touch-crm/users/roles'],
    //     blacklistedRoutes: ['http://cis.karvyinnotech.com/touch-crm/users/roles']
    //   }
    // })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
