import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListItem } from '../../interaces/list-item.interface';
import { Store } from '@ngrx/store';
import { ListValueChange, ListRemoveItem } from './store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  items$: Observable<ListItem[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onValueChanged(item, value) {
    this.store.dispatch(new ListValueChange({
      item,
      value
    }));
  }

  onRemoveItem(item) {
    this.store.dispatch(new ListRemoveItem({
      item
    }));
  }

}
