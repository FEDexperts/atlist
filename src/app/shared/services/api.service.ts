import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?): Observable<T> {
    return this.http.get<T>(url, { params: params });
  }

  post(url: string, body?): Observable<any> {
    return this.http.post(url, body);
  }

  delete(url: string, paramList?): Observable<any> {
    return this.http.delete(url, {
      params: paramList
    });
  }

  put(url: string, body?: any): Observable<any> {
    return this.http.put(url, body)
  }
}
