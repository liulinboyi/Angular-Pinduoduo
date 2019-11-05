import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ChangeDetectionStrategy } from '@angular/core';

// tslint:disable-next-line:class-name
export interface topMenu {
  id?: number;
  title: string;
  link?: string;
}
type addFunction = (x: number, y: number) => number;

@Component({
  selector: 'app-scroll-tap',
  templateUrl: './scroll-tap.component.html',
  styleUrls: ['./scroll-tap.component.scss'],
  // 这样配置元数据，angular只看有@Input装饰器的属性，
  // 如果变了启用脏值检测，只有这个分支的树脏值检测,不会整个树检测，否则不理。
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTapComponent implements OnInit,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // 永远第一个被调用
  constructor() {
    console.log('构造函数，组件构造调用');

  }
  @Input() menus;
  @Input() backGroundColor = '#FFF';
  @Input() titleActiveColor = 'red';
  @Input() titleColor = '#000';
  @Input() indicalorColor = 'red';
  // 事件发射器 EventEmitter 这个经常倒入错误，应该在angular/core 中导入
  @Output() tabSelected = new EventEmitter();

  title = 'angular-pinduoduo';
  selectedIndex = -1;
  // 在输入注解，修饰符后面的值改变后调用
  // 输入属性改变
  // 自己关心的，属性变化
  ngOnChanges(changes: SimpleChanges): void {
    console.log('输入属性', changes);

  }
  // 可以安全使用，属性和方法
  ngOnInit() {
    console.log('组件初始化');
  }
  // 整体框架，检测属性变化
  // 与ngOnChanges功能有部分重合，angunlar官方不建议，在同一组件一起使用
  // ngDoCheck(): void {
  //   console.log("脏值检测");
  // }

  // 组件内容初始化
  // 组件投影初始化后，调用
  ngAfterContentInit(): void {
    console.log('组件内容初始化');
  }

  ngAfterContentChecked(): void {
    // console.log("组件内容脏值检测");
  }
  // 组件的视图初始化
  // 组件自身加上子组件，都初始化后调用
  ngAfterViewInit(): void {
    console.log('组建的视图初始化');
  }
  // 子组件点击事件
  handleSelection(i, e) {
    this.selectedIndex = i;
    // 将事件发射出去，携带数据那个被选中,只能传递一个参数
    this.tabSelected.emit(this.menus[i]);
  }
  // 组件视图的脏值检测
  // 由系统完成的
  ngAfterViewChecked(): void {
    // console.log("组件视图的脏值检测");
  }
  // 需要做一些清理工作，把settimeOut等清理掉
  ngOnDestroy(): void {
    console.log('组件销毁');
  }

  add(x, y) {
    return x + y;
  }

}
