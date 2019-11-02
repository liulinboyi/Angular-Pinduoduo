import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTapComponent, ImageSliderComponent, HorizontalGridComponent } from './components';


@NgModule({
  declarations: [
    ScrollTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent
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
    HorizontalGridComponent
  ]
})
export class ShareModule { }
