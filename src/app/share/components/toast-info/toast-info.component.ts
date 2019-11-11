import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toast-info',
  templateUrl: './toast-info.component.html',
  styleUrls: ['./toast-info.component.scss']
})
export class ToastInfoComponent implements OnInit, OnDestroy {
  time;
  @Input() msg = '请稍后重试';
  @Input() step = 1;
  @Input() show = false;
  @ViewChild('wrapper', {static: false}) wrapper: ElementRef;
  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    this.time = setTimeout( () => {
      // if (this.show) {
      // this.rd2.setStyle(this.wrapper.nativeElement, 'display', 'none');

      // }
    }, this.step * 1000);
  }
  ngOnDestroy() {
    clearTimeout(this.time);
  }

}
