import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductVariant } from '../..';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  selectedIndex = 0;
  variants$: Observable<ProductVariant[]>;
  constructor(private service: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(item => item.has('productId')),
      map(parms => parms.get('productId'))
    );
    productId$.subscribe(e => {
      this.variants$ = this.service.getProductVariantProductId(e);
    });
  }

}
