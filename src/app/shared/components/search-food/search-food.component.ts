import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { food } from '../../interaces/food.interface';

import * as fromSearch from './store';
import { Store, select } from '@ngrx/store';
import { Search } from './store/search-food.actions';
import { getSearchResultsState } from './store/search-food.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit {

  selected: string;
  showList: boolean;
  items$: Observable<food[]>;

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
  }

  search(value) {
    this.showList = true;
    this.store.dispatch(new Search({ searchValue: value }));
  }

  itemSelect(item) {
    this.selected = item['FoodName'];
    this.showList = false;
    this.onItemSelect.emit(item);
  }

}
