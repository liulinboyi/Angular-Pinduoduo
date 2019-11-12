import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollTapComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  FooterComponent,
  ProductCardComponent,
  VerticalGridComponent,
  ToastInfoComponent,
  ProductTileComponent,
  BackButtonComponent} from './components';
import { GridItemDirective, GridItemImageDirective, GridTitleDirective, TagDirective, AvatarDirective } from './directives';
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
    ProductCardComponent,
    VerticalGridComponent,
    TagDirective,
    AvatarDirective,
    ToastInfoComponent,
    ProductTileComponent,
    BackButtonComponent,
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
    FooterComponent,
    ProductCardComponent,
    VerticalGridComponent,
    TagDirective,
    AvatarDirective,
    ToastInfoComponent,
    ProductTileComponent,
    BackButtonComponent
  ]
})
export class ShareModule { }
