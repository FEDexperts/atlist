import { Component, OnInit } from '@angular/core';
import { filter, tap, single } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListItem } from '../../shared/types/list-item.interface';

import * as fromShoppingList from './store';
import { Store, select } from '@ngrx/store';
import { listConfig, GetList, RemoveItem, UpdateItem, GetSingle, AddItem, EnableAdd } from '../../core/list';
import { getListState, getSingleState } from './store/shopping-list.selectors';
import { IUnit } from '../../shared/types/unit';
import { getUnitsState } from '../../store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  items: Observable<string[]>;
  listItems$: Observable<ListItem[]>;
  units$: Observable<IUnit[]>;

  constructor(private store: Store<fromShoppingList.State>) { }

  ngOnInit() {
    this.listItems$ = this.store
      .pipe(
        select(getListState),
        filter(listState => listState),
      );

    this.units$ = this.store
      .pipe(
        select(getUnitsState),
      );

    this.store
      .pipe(
        select(getSingleState),
        filter(singleState => !!singleState),
      )
      .subscribe(singleState => {
        this.store.dispatch(new EnableAdd(true));
      });

    this.store.dispatch(new GetList({ list: listConfig.shopping }));
  }

  onValueChanged(e) {
    // this.store.dispatch(new UpdateItem({
    //   list: listConfig.shopping,
    //   id: e.item.itemId,
    //   data: {
    //     value: e.value,
    //   }
    // }));
  }

  onRemove(e) {
    this.store.dispatch(new RemoveItem({
      list: listConfig.shopping,
      id: e.itemId,
    }));
  }

  onUnitChanged(e) {
    // this.store.dispatch(new UpdateItem({
    //   list: listConfig.shopping,
    //   id: e.item.itemId,
    //   data: {
    //     itemUnit: e.selected.unitName,
    //     itemUnitId: e.selected.unitId,
    //   }
    // }));
  }

  onItemSelected(item) {
    this.store.dispatch(new GetSingle({
      list: listConfig.shopping,
      id: item.FoodId,
    }));
  }

  onAddItem(e) {
    this.store.dispatch(new AddItem({
      foodId: e.FoodId
    }));
  }

}
