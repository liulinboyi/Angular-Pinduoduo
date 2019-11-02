import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollTapComponent, ImageSliderComponent, HorizontalGridComponent } from './components';

@NgModule({
  // 自己的组件声明，让组件相互认识
  // 包含组件，指令，管道
  // 自己的和第三方无关
  declarations: [
    AppComponent,
    ScrollTapComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  // 使用的模块，第三方模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 导出的，可以是模块，指令，服务
  exports: [

  ],
  // 服务可注入的
  providers: [],
  // 根模块，才有
  bootstrap: [AppComponent]
})
export class AppModule { }
