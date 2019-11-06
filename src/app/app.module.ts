import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';

import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  // 自己的组件声明，让组件相互认识
  // 包含组件，指令，管道
  // 自己的和第三方无关
  declarations: [
    AppComponent
  ],
  // 使用的模块，第三方模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShareModule,
    HttpClientModule,
    HomeModule
  ],
  // 导出的，可以是模块，指令，服务
  exports: [

  ],
  // 服务可注入的
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      // HTTP_INTERCEPTORS 带有s一个令牌对应多个
      useClass: ParamInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  // 根模块，才有
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
