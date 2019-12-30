import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthanticationService } from './authantication.service';
import { map, catchError } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  
  constructor(private authanticationService:AuthanticationService,private router: Router) { }

  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authanticationService.currentUserValue;
    if(currentUser) {
      req = req.clone({
        setHeaders: {
            Authorization: currentUser
        }
      });
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              
              //console.log('event', event.headers.get('Authorization'));
          }
          return event;
      }),catchError((error: HttpErrorResponse) => {

        let errorMessage = '';
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            this.router.navigate(['login']);
          }
        }

        return throwError(errorMessage);
      }));
  }
}
