import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/interaces/list-item.interface';
import { ApiService } from '../shared/services/api.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.page.html',
  styleUrls: ['./missing-list.page.scss'],
})
export class MissingListPage implements OnInit {

  items: Observable<string[]>;
  listItems: Observable<ListItem[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.listItems = this.api.get(`${environment.local}api/lists/missing/1`);
  }

  search(val) {
    this.items = this.api.get(`${environment.local}api/foods/list`)
      .pipe(
        map(res => {
          return res
            .filter(item => item.FoodName.indexOf(val) !== -1)
            .map(item => { return { foodName: item.FoodName } })
        }),
      )
  }

}
