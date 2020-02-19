import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { TokenInterceptorService } from './token-interceptor.service';


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
    // ,
    // HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'})
  ],
  providers: [AuthGuard,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService,multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
