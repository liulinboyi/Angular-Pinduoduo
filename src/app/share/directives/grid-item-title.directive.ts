import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridTitle]',
})
export class GridTitleDirective {
@HostBinding('style.font-size') @Input() fontSize = 'title';
@HostBinding('style.grid-area') title = 'title';
    // 得到数组，操作数组的样式
constructor(private elr: ElementRef, private rd2: Renderer2) {
}
// ngOnInit(): void {
//   this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');

// }
 }
