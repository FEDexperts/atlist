import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/types/list-item.interface';
import { filter, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromMissingList from './store';
import { getListState, getSelectedState } from './store/missing-list.selectors';
import { food } from '../shared/types/food.interface';
import { GetList, GetSingle, listConfig, RemoveItem, ListValueChange } from '../core/list';

@Component({
  selector: 'missing-list',
  templateUrl: './missing-list.page.html',
  styleUrls: ['./missing-list.page.scss'],
})
export class MissingListPage implements OnInit {

  items$: Observable<food[]>;
  listItems$: Observable<ListItem[]>;
  units$: Observable<{ unitId: number, unitName: string }[]>;
  addEnabled: boolean = false;

  constructor(private store: Store<fromMissingList.State>) { }

  ngOnInit() {
    this.listItems$ = this.store
      .pipe(
        select(getListState),
        filter(listState => listState),
      )

    this.store
      .pipe(
        select(getSelectedState),
        filter(state => !!state),
        tap((state: any[]) => {
          if (state.length === 0) {
            this.addEnabled = true;
          }
        })
      )
      .subscribe();

    this.store.dispatch(new GetList({ listConfig: listConfig.missing }));
  }

  onItemSelected(item) {
    this.store.dispatch(new GetSingle({
      listConfig: listConfig.missing,
      id: item.FoodId,
    }));
  }

  removeItem(item) {
    this.store.dispatch(new RemoveItem({
      listConfig: listConfig.missing,
      id: item.itemId,
    }))
  }

  valueChanged(e) {
    this.store.dispatch(new ListValueChange({
      listConfig: listConfig.missing,
      id: e.item.itemId,
      value: e.value
    }))
  }

}
