import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private api: ApiService) {
    }

    hello(): Observable<any> {
        return this.api.get(`${environment.url}/auth/hello`);
    }

    login(userName, password) {
        return this.api.post(`${environment.url}/auth/login`, {userName, password})
            .pipe(
                tap((res: string) => {
                    console.log('atlist token (login) => ', res);
                    localStorage.setItem('token', res);
                }));
    }
}
