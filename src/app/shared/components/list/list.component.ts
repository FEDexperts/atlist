import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../../types/list-item.interface';
import { Store } from '@ngrx/store';
import { IUnit } from '../../types/unit';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  items$: Observable<ListItem[]>;

  @Input()
  units$: Observable<IUnit[]>;

  @Output()
  valueChanged = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  @Output()
  unitChanged = new EventEmitter();

  constructor(private store: Store<any>) { }

}
