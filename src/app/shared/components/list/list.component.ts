import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../../types/list-item.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  items$: Observable<ListItem[]>;

  @Input()
  units$: Observable<{ unitId: number, unitName: string }[]>;

  @Output()
  onValueChange = new EventEmitter();

  @Output()
  onRemove = new EventEmitter();

  constructor(private store: Store<any>) { }

}
