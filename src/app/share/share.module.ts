import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTapComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridTitleDirective } from './directives';


@NgModule({
  declarations: [
    ScrollTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridTitleDirective
  ]
})
export class ShareModule { }
