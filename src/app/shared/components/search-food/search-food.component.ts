import { Component, OnInit, EventEmitter, Output, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { food } from '../../types/food.interface';

import { Store } from '@ngrx/store';
import { tap, filter, takeUntil } from 'rxjs/operators';
import { FoodService } from '../../services/food.service';
import { AddItem } from '../../../core/list';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit, OnDestroy {

  showList: boolean;
  items$ = new BehaviorSubject<food[]>([]);
  destroy$ = new Subject();
  item: food = { FoodId: null, FoodName: null };
  _addEnabled: boolean;
  value: string;

  @Input()
  set addEnabled(val: boolean) {
    this._addEnabled = val;
    if (!val) {
      this.value = '';
    }
  }

  @Output()
  itemSelect = new EventEmitter();

  constructor(private store: Store<any>, private foodService: FoodService) {
  }

  ngOnInit() {
    this.showList = false;
  }

  onSearch(value) {

    if (value === '') {
      this.showList = false;
    }

    this.foodService.search(value)
      .pipe(
        takeUntil(this.destroy$),
        filter(res => !!res.length),
        tap(res => {
          this.showList = true;
          this.items$.next(res);
        }),
      )
      .subscribe();
  }

  onItemSelect(item) {
    this.item = item;
    this.showList = false;
    this.value = item.FoodName;
    this.itemSelect.emit(item);
  }

  addItem() {
    this.store.dispatch(new AddItem(this.item));
    this.addEnabled = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
