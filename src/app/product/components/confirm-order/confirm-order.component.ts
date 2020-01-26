import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { Observable, Subject, combineLatest, merge } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { Payment } from '../payment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {
  item$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];
  unitPrice$: Observable<number>;
  amount$: Observable<number>;
  mergedCount$: Observable<number>;

  unitPrice: number;
  amount: number;
  totalPrice: number;
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.dialogService.getDate().pipe(
      tap((val: { variant: ProductVariant; count: number }) => {
        this.unitPrice = val.variant.price;
        this.amount = val.count;
        this.totalPrice = this.unitPrice * this.amount;
        console.log(val);
      }),
      share()
    );
  }

  handleAmountChange(count: number) {
    this.count$.next(count);
    this.totalPrice = this.unitPrice * count;
  }

  handlePay() {}
}
