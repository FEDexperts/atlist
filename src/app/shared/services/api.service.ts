import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?): Observable<T> {
    console.log(`atlist get url => ${url}`, url);
    return this.http.get<T>(url, { params: params });
  }

  post<T>(url: string, body?, options?): Observable<any> {
    console.log(`atlist post url => ${url}`, url, body);
    return this.http.post<T>(url, body);
  }

  delete(url: string, params?): Observable<any> {
    console.log(`atlist delete url => ${url}`, url);
    return this.http.delete(url, {
      params: params
    });
  }

  put<T>(url: string, body?: any): Observable<T> {
    console.log(`atlist put url => ${url}`, url);
    return this.http.put<T>(url, body);
  }

  patch<T>(url: string, body?: any): Observable<T> {
    console.log(`atlist patch url => ${url}`, url);
    return this.http.patch<T>(url, body);
  }
}
