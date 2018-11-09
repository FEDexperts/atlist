import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/interaces/list-item.interface';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { GetList, GetSingle } from './store';

import * as fromMissingList from './store';
import { getListState } from './store/missing-list.selectors';
import { food } from '../shared/interaces/food.interface';

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
      )

    this.store.dispatch(new GetList());
  }

  itemSelected(item) {
    this.store.dispatch(new GetSingle(item));
  }

}
