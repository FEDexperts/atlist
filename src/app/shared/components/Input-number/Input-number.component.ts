import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-Input-number',
  templateUrl: './Input-number.component.html',
  styleUrls: ['./Input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input()
  value: number;

  @Output()
  onValueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.value += 1;
    this.onValueChange.emit(this.value);
  }

  remove() {
    if (this.value === 0) return;
    this.value -= 1;
    this.onValueChange.emit(this.value);
  }

}
