import { Component, OnInit, AfterViewChecked, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewChecked {
  // tslint:disable-next-line:variable-name
  _title = 'hello!';
  // tslint:disable-next-line:variable-name
  _time;
  // 引用模板
  @ViewChild('timRef', {static: true}) timeRef: ElementRef;
  /**
   * name
   */
  // 同步操作
  public get title() {
    console.log('脏值检测');
    return this._title;
  }
  /**
   * time
   */
  public get time() {
    // Date.now(); 每次检查，每次都不同。
    return this._time;
  }
  handleClick() {

  }
  constructor(private ngzone: NgZone, private rd2: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    // 在这里赋值会报错
    // this._title = 'hi!';
    // zone 是浏览器的运行时
    this.ngzone.runOutsideAngular(() => {
      // 异步操作才可以实现
      // this._title = 'hi!';
      // 绑定不是无代价的，是脏值检测改变，更新dom改变。
      // setInterval(() => {
      //   this._time = Date.now();
      // });

      setInterval(() => {
        // 不直接操作dom,使用rd2
        this.rd2.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          // angular 6之上可以使用管道的变化函数
          // 在类中使用管道，变化函数。
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans'));
        // this.timeRef.nativeElement.innerText = Date.now();
      }, 100);
    });
  }

}
