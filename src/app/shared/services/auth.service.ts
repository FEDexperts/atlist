import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  login(userName, password) {
    return this.api.post(`${environment.url}api/auth/login`, { userName, password })
      .pipe(
        tap((res: string) => {
          localStorage.setItem('token', res);
        })
      );
  }
}
