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

  @Input() intervalInms: number = 2
  @Input() scrollHeight: string = '140px'
  @Input() sliders: imageSlider[] = []
  selectedIndex = 0;
  intavelId;
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
    let i = 0;
    this.intavelId = setInterval(() => {
      // 设置属性
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',(this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length
        )
    }, this.intervalInms * 1000);
    console.log(this.imgs);
    this.imgs.forEach(item => {
      // 安全，操作dom
      // this.rd2.setStyle(item.nativeElement,'height','auto')
    })
  }
  // 避免数组越界
  getIndex(index){
    return index >= 0? 
    index % this.sliders.length : 
    (this.sliders.length - Math.abs(index)) %  this.sliders.length
  }
  handleScroll(e){
    // 滑动比例
    const ratio = e.target.scrollLeft * this.sliders.length / e.target.scrollWidth
    this.selectedIndex = Math.round(ratio)
  }
  ngOnDestroy(): void {
    // 清理计时器
    clearInterval(this.intavelId)
  }
}
