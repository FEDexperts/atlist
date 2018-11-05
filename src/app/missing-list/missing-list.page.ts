import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/interaces/list-item.interface';
import { ApiService } from '../shared/services/api.service';
import { environment } from '../../environments/environment';
import { filter, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { GetList, GetListItem } from './store';

import * as fromMissingList from './store';
import { getListState, getSelectedState } from './store/missing-list.selectors';
import { food } from '../shared/interaces/food.interface';
import { EnableAdd } from '../shared/components/search-food/store/search-food.actions';
import { isUndefined } from 'util';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.page.html',
  styleUrls: ['./missing-list.page.scss'],
})
export class MissingListPage implements OnInit {

  items$: Observable<food[]>;
  listItems$: Observable<ListItem[]>;

  constructor(private store: Store<fromMissingList.State>) { }

  ngOnInit() {
    this.listItems$ = this.store
      .pipe(
        select(getListState),
        filter(list => list),
        tap(list => console.log(list)),
      )

    this.store.dispatch(new GetList({ listId: 1 }));

    this.store
      .pipe(
        select(getSelectedState),
        filter(res => !isUndefined(res)),
        tap(res => {
          this.store.dispatch(new EnableAdd(!res));
        }),
      )
      .subscribe()
  }

  itemSelected(item) {
    this.store.dispatch(new GetListItem({ listId: 1, foodId: item.FoodId }));
  }

}
