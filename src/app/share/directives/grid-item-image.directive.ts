import { Directive, ElementRef, Renderer2, Input, AfterViewInit, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
  @Input() appGridItemImageWidth = '2rem';
  @HostBinding('style.grid-area') image = 'image';
  @HostBinding('style.width') width = this.appGridItemImageWidth;
  @HostBinding('style.height') height = this.appGridItemImageWidth;
  @HostBinding('style.object-fit') fit = 'cover';
  // 监听事件
  @HostListener('click', ['$event.target'])
  handleClick(e) {
    console.log(e);
  }
  // 得到数组，操作数组的样式
constructor(private elr: ElementRef, private rd2: Renderer2) {
  // console.log(this.appGridItemImageWidth, this);
}
// ngOnInit(): void {
//   // console.log(this.appGridItemImageWidth, this);
//   this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
//   this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImageWidth);
//   this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImageWidth);
//   this.rd2.setStyle(this.elr.nativeElement, 'object-fit', 'cover');
// }
}
