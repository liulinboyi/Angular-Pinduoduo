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
  data;
  ngOnInit() {
    // this.date = new Date();
    this.date = this.minusDays(new Date(), 60);
    this.price = 123.32333;
    this.data = [1, 2, 3];
  }
  minusDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
