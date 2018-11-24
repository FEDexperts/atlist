import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { environment } from '../../environments/environment';
import { filter, tap, take, map, distinctUntilChanged, throttleTime, debounceTime, debounce } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/types/list-item.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  items: Observable<string[]>;
  listItems: Observable<ListItem[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.listItems = this.api.get(`${environment.url}api/lists/shopping`);
  }

  search(val) {
    // this.items = this.api.get(`${environment.url}api/foods/list`)
    //   .pipe(
    //     map(res => {
    //       return res
    //         .filter(item => item.FoodName.indexOf(val) !== -1)
    //         .map(item => { return { foodName: item.FoodName } })
    //     }),
    //   )
  }

}
