import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.scss']
})
export class ProductAmountComponent implements OnInit {

  @Input() count = 1;
  @Output() amountChange = new EventEmitter<number>();
  constructor() { }

  handleDecrease() {
    if (this.count <= 0) {
      return;
    }
    this.amountChange.emit(--this.count);
  }

  handleIncrease() {
    this.amountChange.emit(++this.count);
  }
  ngOnInit() {
  }

}
