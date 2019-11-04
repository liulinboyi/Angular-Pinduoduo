import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit {

  constructor() { }
  obj = { productId: 2, name: '手机', model: 's', type: '全面屏' };
  date;
  price;
  ngOnInit() {
    this.date = new Date();
    this.price = 123.32;
  }

}
