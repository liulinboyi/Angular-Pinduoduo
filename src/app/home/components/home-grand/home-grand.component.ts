import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';
import { inject } from '@angular/core/testing';

// 可注入类
// @Injectable()
// class Product {
//   constructor(private name: string) {

//   }
// }

// // 可注入类
// @Injectable()
// class PurchaseOrder {
//   // 产品
//   // 数量
//   private amount: number;
//   constructor(private product: Product) {
//     // this.product = new Product('手机');

//   }
// }

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
    // 防止命名冲突，使用token
    const token = new InjectionToken<string>('baseUrl');
    // angualr构造的对象池，实际上把所有对象都建立好了，已经new出来了。使用直接拿就好。
    // 默认是单例的，类默认情况下只有一份，也支持，每次都是一个新的实例
    // angualr注入是分级别的，顶级（应用级）注入，模块（模块级）注入，组件级注入，分范围
    // 注入器，也是一个树。
    // const injecter = Injector.create({
    //   // 描述，如何创建
    //   providers: [
    //     // Product 标识符
    //     {
    //       provide: Product,
    //       // 不做特殊处理使用useClass
    //       // useClass: Product,
    //       // 特殊处理useFactory,工厂
    //       useFactory: () => {
    //         return new Product('手机');
    //       },
    //       deps: []
    //       // deps:[] Product的依赖，是否依赖这个对象池子里面其他东西，有的话，列出来
    //       // useExisting: 使用自己已经实例化的
    //       // useValue:
    //     }, {
    //       provide: PurchaseOrder,
    //       useClass: PurchaseOrder,
    //       deps: [Product]
    //     }, {
    //       provide: token,
    //       useValue: 'http://localhost/'
    //     }
    //   ]
    // });
    // console.log(injecter.get(Product));
    // console.log(injecter.get(PurchaseOrder));
    // console.log(injecter.get(token));



  }
  minusDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
