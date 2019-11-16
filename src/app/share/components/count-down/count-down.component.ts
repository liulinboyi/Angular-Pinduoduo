import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  countDown$: Observable<string>;
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PRE_SECOND = 1000;
  constructor() { }
  private diffInSec = (start: Date, future: Date): number => {
    const diff = +future - +start;
    return Math.floor(diff / this._MS_PRE_SECOND);
  }
  ngOnInit() {
    this.countDown$ = this.getCountDownObservervable(this.startDate, this.futureDate);
  }
  private getCountDownObservervable(startDate: Date, futureDate: Date) {
    return interval(1000).pipe(map(item => this.diffInSec(startDate, futureDate) - item),
    // takeWhile 如果gap >= 0 条件为true则继续，如果为false则停止订阅，这个流结束。filter只是过滤不会结束流。
    takeWhile(gap => gap >= 0),
    // 打印，调试
    // tap(val => console.log(val) ),
    map(item => ({
        day: Math.floor(item / 3600 / 24),
        hour: Math.floor((item / 3600) % 24),
        minut: Math.floor((item / 60) % 60),
        second: Math.floor(item % 60),
    })),
    map(({hour, minut, second}) => `${hour}:${minut}:${second}`)
    );
  }
}
