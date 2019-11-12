import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad, Product } from 'src/app/share/domain';
import { HomeService } from 'src/app/home/services';
import { filter, map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.ad$ = this.service.getAdByTab('men').pipe(filter(item => item.length > 0),
    map(item => item[0]));
    this.products$ = this.service.getProduct('men').pipe(
      catchError(error => {
        // this.show = true;
        // this.cd.markForCheck();
        throw of(error);
       },
       ), tap((item) => {
        // this.show = false;
        // this.cd.markForCheck();
       }));
  }

}
