import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthanticationService } from './authantication.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  
  constructor(private authanticationService:AuthanticationService) { }

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
      }));
  }
}
