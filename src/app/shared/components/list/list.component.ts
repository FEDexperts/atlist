import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListItem } from '../../interaces/list-item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  items$: Observable<ListItem[]>;

  quantity: number;

  constructor() { }

  ngOnInit() {
    this.quantity = 0;

    this.items$
      .pipe(
        tap(items => console.log(items)),
      )
  }

  add() {
    this.quantity += 1;
  }

  remove() {
    if (this.quantity === 0) return;
    this.quantity -= 1;
  }

}
