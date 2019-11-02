import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
