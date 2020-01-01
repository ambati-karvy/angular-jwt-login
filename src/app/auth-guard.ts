import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'])
        return false;
    }

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'])
        return false;
    }
}
