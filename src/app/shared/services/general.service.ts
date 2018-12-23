import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IUnit } from '../types/unit';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private api: ApiService) { }

  getUnits(): Observable<IUnit> {
    return this.api.get(`${environment.url}/general/units`);
  }
} 
