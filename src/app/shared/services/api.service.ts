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

  post<T>(url: string, body?): Observable<T> {
    return this.http.post<T>(url, body);
  }

  delete(url: string, paramList?): Observable<any> {
    return this.http.delete(url, {
      params: paramList
    });
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(url, body)
  }

  patch<T>(url: string, body?: any): Observable<T> {
    return this.http.patch<T>(url, body)
  }
}
