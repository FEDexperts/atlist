import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { food } from '../../interaces/food.interface';

import * as fromSearch from './store';
import { Store, select } from '@ngrx/store';
import { Search, SearchEnableAdd, SearchReset } from './store/search-food.actions';
import { getSearchResultsState, getSearchEnableAddState } from './store/search-food.selectors';
import { AddItem } from '../../../missing-list/store';
import { tap, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit, OnDestroy {


  selected: string;
  showList: boolean;
  items: food[];
  enableAdd$: Observable<boolean>;
  onDestroySubject = new Subject();

  private item: food;

  @Output()
  onItemSelect = new EventEmitter();

  constructor(private store: Store<fromSearch.State>) {
  }

  ngOnInit() {
    this.showList = false;

    this.store
      .pipe(
        takeUntil(this.onDestroySubject),
        select(getSearchResultsState),
        filter(res => res && res.length),
        tap(res => {
          this.items = res;
          this.showList = true;
        }),
      )
      .subscribe();

    this.enableAdd$ = this.store
      .pipe(
        select(getSearchEnableAddState),
      )
  }

  search(value) {
    if (value) {
      this.store.dispatch(new Search({ searchValue: value }));
    } else {
      this.showList = false;
    }
  }

  itemSelect(item) {
    this.item = item;
    this.selected = item['FoodName'];
    this.showList = false;
    this.onItemSelect.emit(item);
  }

  addItem() {
    this.store.dispatch(new AddItem({ itemId: this.item.FoodId }));
    this.store.dispatch(new SearchEnableAdd(false));
    this.store.dispatch(new SearchReset());
    this.selected = '';
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.unsubscribe();
  }

}
