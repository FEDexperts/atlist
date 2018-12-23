import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const token = localStorage.getItem('token');
        console.log('atlist guard token =>', token);
        if (token === null || token === undefined) {
            this.router.navigate(['login']);
        }

        return true;
    }
}
