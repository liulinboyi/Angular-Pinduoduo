import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild('inputRef', {static: true})
  inputref: ElementRef;

  startDate = new Date(2019, 11, 6);
  futureDate = new Date(2019, 11, 7);

  constructor() { }

  ngOnInit() {
    // 把输入事件，转化成流。subscribe订阅
    fromEvent(this.inputref.nativeElement, 'input')
    .subscribe((e: any) => {
      console.log(e, e.target.value);

    });
  }

}
