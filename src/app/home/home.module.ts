import { NgModule, Injectable } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeContainerComponent, token } from './components';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { HomeService } from './services';

// 从angular6开始
// 这样写，所有提供的服务，只有使用了真正注入了，才会编译进js里面去。
@Injectable({
  providedIn: 'root'
  // 或者 注入到模块providedIn: HomeModule
})

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  providers: [HomeService, { provide: token, useValue: 'http://localhost.dev/' }]
})
export class HomeModule { }
