import { Component, OnInit, EventEmitter, Output, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { food } from '../../types/food.interface';

import { Store, select } from '@ngrx/store';
import { tap, filter, takeUntil } from 'rxjs/operators';
import { FoodService } from '../../services/food.service';
import { AddItem, EnableAdd } from '../../../core/list';
import { getEnableAddState } from '../../../store';

@Component({
  selector: 'search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.scss']
})
export class SearchFoodComponent implements OnInit, OnDestroy {

  showList: boolean;
  items$ = new BehaviorSubject<food[]>([]);
  destroy$ = new Subject();
  item: food = { FoodId: null, FoodName: null };
  public addEnabled: boolean;
  value: string;

  @Output()
  itemSelect = new EventEmitter();

  @Output()
  addItem = new EventEmitter();

  constructor(private store: Store<any>, private foodService: FoodService) {
  }

  ngOnInit() {
    this.showList = false;

    this.store
      .pipe(
        select(getEnableAddState),
      )
      .subscribe(enableAddState => this.addEnabled = enableAddState);
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

  onAddItem() {
    this.value = '';
    this.store.dispatch(new EnableAdd(false));
    this.addItem.emit(this.item);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
