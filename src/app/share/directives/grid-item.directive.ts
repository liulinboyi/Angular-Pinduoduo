import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';



// 给标签一个自定义属性，改变某些行为
@Directive({
  // 方括号([])表示它的属性型选择器
  selector: '[appGridItem]',
})
export class GridItemDirective {
// 将 style.display 绑定到 display 变量
@HostBinding('style.display') display = 'grid';
@HostBinding('style.grid-template-areas') template = `'image' 'title'`;
@HostBinding('style.place-items') align = 'center';
@HostBinding('style.width') width = '4rem';
@HostBinding('style.height') height = '4rem';

// 得到数组，操作数组的样式
constructor(private elr: ElementRef, private rd2: Renderer2) {

}
// ngOnInit(): void {
//   this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
//   this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
//   this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
//   this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
// }
 }
