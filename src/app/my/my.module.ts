import { NgModule } from '@angular/core';

import { MyRoutingModule } from './my-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    MyRoutingModule
  ]
})
export class MyModule { }
