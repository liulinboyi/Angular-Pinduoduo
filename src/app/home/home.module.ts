import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeContainerComponent } from './components';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
