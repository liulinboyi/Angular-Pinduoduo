import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductVariant } from '../..';
import { filter, map } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  selectedIndex = 0;
  variants$: Observable<ProductVariant[]>;
  subs: Subscription[] = [];
  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router,
    ) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(item => item.has('productId')),
      map(parms => parms.get('productId'))
    );
    productId$.subscribe(e => {
      this.variants$ = this.service.getProductVariantProductId(e);
    });
  }

  handleDirectBuy(variants: ProductVariant) {

  }
  handleGroupBuy(variants: ProductVariant) {
    const top = 40;

    // 7-9
    // 传入 Output，EventEmitter 其实就是一个 Subject
    // Subject即是Observable 也是 Observer
    // Subject既可以 subscribe 也可以 next(xxx)
    // Behavior是Subject的一种特殊形式, 可以记住最新的值。
    const formSubmitted = new EventEmitter();
    this.subs.push(
          formSubmitted.subscribe(ev => {
            console.log(ev);

            this.dialogService.saveDate(ev);
            this.router.navigate(['/orders', 'confirm']);
          })
        );
    const selected = new EventEmitter<number>();
    this.subs.push(
          selected.subscribe(idx => {
            console.log(idx);
            this.selectedIndex = idx;
          })
        );
    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: {
        selected,
        formSubmitted
      },
      position: {
        top: `${top}%`,
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
