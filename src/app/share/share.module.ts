import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTapComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridTitleDirective } from './directives';
import { AgoPipe } from './pipes';




@NgModule({
  declarations: [
    ScrollTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridTitleDirective,
    AgoPipe,
    FooterComponent,
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
    CountDownComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridTitleDirective,
    AgoPipe,
    FooterComponent
  ]
})
export class ShareModule { }
