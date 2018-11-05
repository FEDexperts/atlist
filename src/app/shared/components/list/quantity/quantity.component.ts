import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  @Input()
  quantity: number;

  @Output()
  valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.quantity = 0;
  }

  add() {
    this.quantity += 1;
    this.valueChanged.emit(this.quantity);
  }

  remove() {
    if (this.quantity === 0) return;
    this.quantity -= 1;
    this.valueChanged.emit(this.quantity);
  }

}
