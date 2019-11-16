import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {
// 将tag抽象出来，如果后续有改动，直接修改一个就行。
// 当然这个只是修改一些样式，可以直接在组件中修改，不用使用指令。
  @Input() @HostBinding('style.background-color') tapBgColor = '#faefe3';
  @Input() @HostBinding('style.color') tapColor = '#ca516a';
  @Input() @HostBinding('style.font-size') tapSize = '0.8rem';
  @Input() @HostBinding('style.padding') tapPadding = '3px';
  @Input() @HostBinding('style.border-radius') tagRadius = '0';

  constructor() { }

}
