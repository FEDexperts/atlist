import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { food } from '../types/food.interface';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private api: ApiService) { }

  search(value): Observable<food[]> {
    return this.api.get<food[]>(`${environment.url}api/foods/search`, { searchValue: value });
  }
}
