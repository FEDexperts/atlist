import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  selected: string;
  showList: boolean;

  @Input()
  items$: Observable<string[]>;

  @Input()
  key: string;

  @Output()
  onSearchChange = new EventEmitter();

  @Output()
  onItemSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.showList = false;
  }

  search(value) {
    this.showList = false;
    if (isNullOrUndefined(value)) return;
    this.showList = true;
    this.onSearchChange.emit(value);
  }

  itemSelect(item) {
    this.selected = item[this.key];
    this.showList = false;
    this.onItemSelect.emit(item);
  }

}
