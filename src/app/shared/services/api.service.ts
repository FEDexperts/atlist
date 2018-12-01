import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?): Observable<T> {
    return this.http.get<T>(url, { params: params });
  }

  post<T>(url: string, body?, options?): Observable<T> {
    return this.http.post<T>(url, body);
  }

  delete(url: string, params?): Observable<any> {
    return this.http.delete(url, {
      params: params
    });
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(url, body)
  }

  patch<T>(url: string, body?: any): Observable<T> {
    return this.http.patch<T>(url, body)
  }
}
