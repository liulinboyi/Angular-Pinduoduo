import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface imageSlider {
  imageUrl: string,
  link: string,
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: imageSlider[] = []
  // angular 依赖注入 private rd2: Renderer2
  // angular 推荐使用 Renderer2 操作dom
  constructor(private rd2: Renderer2) { }
  // static: true 在ngfor 或者 ngif 包含之下吗
  // 引用html组件
  @ViewChild('imageSlider',{ static: true}) imgSlider: ElementRef;

  @ViewChildren('img') imgs: QueryList<ElementRef>
  ngOnInit() {
    // 视图还没有真正渲染好
    console.log(this.imgSlider);
  }
  // 安全获取，组件引用
  ngAfterViewInit(): void {
    console.log(this.imgs);
    this.imgs.forEach(item => {
      // 安全，操作dom
      this.rd2.setStyle(item.nativeElement,'height','100px')
    })
  }

}
