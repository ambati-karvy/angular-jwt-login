import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

        if(localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'])
        return false;
    }
}
