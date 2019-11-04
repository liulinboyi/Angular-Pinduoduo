import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';

// 可注入类
@Injectable()
class Product {
  constructor(private name: string) {

  }
}

// 可注入类
@Injectable()
class PurchaseOrder {
  // 产品
  // 数量
  private amount: number;
  constructor(private product: Product) {
    // this.product = new Product('手机');

  }
}

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
    // angualr构造的对象池，实际上把所有对象都建立好了，已经new出来了。使用直接拿就好。
    // 默认是单例的，类默认情况下只有一份，也支持，每次都是一个新的实例
    const injecter = Injector.create({
      // 描述，如何创建
      providers: [
        // Product 标识符
        {
          provide: Product,
          // 不做特殊处理使用useClass
          // useClass: Product,
          // 特殊处理useFactory,工厂
          useFactory: () => {
            return new Product('手机');
          },
          deps: []
          // deps:[] Product的依赖，是否依赖这个对象池子里面其他东西，有的话，列出来
          // useExisting: 使用自己已经实例化的
          // useValue:
        }, {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product]
        }
      ]
    });
    console.log(injecter.get(Product));
    console.log(injecter.get(PurchaseOrder));


  }
  minusDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
