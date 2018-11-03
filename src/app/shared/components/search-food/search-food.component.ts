import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { food } from '../../interaces/food.interface';

import * as fromSearch from './store';
import { Store, select } from '@ngrx/store';
import { Search } from './store/search-food.actions';
import { getSearchResultsState, getSearchEnableAddState } from './store/search-food.selectors';
import { AddItem } from '../../../missing-list/store';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit {

  selected: string;
  showList: boolean;
  items$: Observable<food[]>;
  enableAdd$: Observable<boolean>;

  private item;

  @Input()
  listId: number;

  @Output()
  onItemSelect = new EventEmitter();

  constructor(private store: Store<fromSearch.State>) {
  }

  ngOnInit() {
    this.showList = false;

    this.items$ = this.store
      .pipe(
        select(getSearchResultsState),
      );

    this.enableAdd$ = this.store
      .pipe(
        select(getSearchEnableAddState),
      )
  }

  search(value) {
    this.showList = true;
    this.store.dispatch(new Search({ searchValue: value }));
  }

  itemSelect(item) {
    this.item = item;
    this.selected = item['FoodName'];
    this.showList = false;
    this.onItemSelect.emit(item);
  }

  addItem() {
    this.store.dispatch(new AddItem({ listId: this.listId, item: this.item }));
  }

}
